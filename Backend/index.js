// Require the dotenv package at the beginning of your code
require('dotenv').config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const MongoDB = require("./db");
const app = express();
const PORT = 3002;
const User = require("./Models/User");
const nodemailer = require("nodemailer");
const smtpTransport = require('nodemailer-smtp-transport');
const Post = require("./Models/Post"); 
const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 200,
  allowedHeaders: "Origin,X-Requested-With,Content-Type,Accept",
};


app.use(cors(corsOptions));
app.use(bodyParser.json());

MongoDB();

app.get("/" , (req,res) =>{
  res.json("hello");
})

app.post("/register", async (req, res) => {
  const { email, name } = req.body;

  try {
    // Check if the user with the given email already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      // User with the same email already exists
      console.error(`User with email ${email} already exists`);
      return res.status(409).send('User with this email already exists');
    }

    // Generate OTP
    const otp = Math.floor(1000 + Math.random() * 9000).toString();

    // Save user email, name, and OTP to the database
    const user = new User({ email, name, otp });
    await user.save();

    // Send OTP to the user's email
    const mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: email,
      subject: 'OTP Verification',
      text: `Your OTP is: ${otp}`,
    };

    const transporter = nodemailer.createTransport({
      service: 'gmail',  // Adjust this based on your email provider
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Send OTP email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        return res.status(500).send('Error sending OTP email');
      }
      console.log('Email sent: ' + info.response);
      res.status(200).send('OTP sent to your email');
    });
  } catch (error) {
    if (error.name === 'MongoServerError' && error.code === 11000) {
      // Duplicate key error
      console.error(`User with email ${email} already exists`);
      res.status(409).send('User with this email already exists');
    } else {
      // Other error, handle it as needed
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }
});
app.get("/get-posts", async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error getting posts:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.post('/add-comment/:postId', (req, res) => {
  const postId = parseInt(req.params.postId);
  const { comment } = req.body;

  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return res.status(404).json({ error: 'Post not found' });
  }

  const newComment = { username: 'JohnDoe', text: comment };
  post.comments.push(newComment);

  res.json(post);
});

app.post("/create-post", async (req, res) => {
  const { title, description } = req.body;

  try {
    const newPost = new Post({
      title,
      description,
      // Add more fields as needed
    });

    await newPost.save();

    res.status(201).json({ message: "Post created successfully" });
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/verify-otp", async (req, res) => {
  const { email, otp } = req.body;

  try {
    // Find the user in the database by email
    const user = await User.findOne({ email });

    if (!user) {
      // User not found
      return res.status(404).send('User not found');
    }

    if (user.otp !== otp) {
      // Incorrect OTP
      return res.status(401).send('Incorrect OTP');
    }

    // OTP is correct, update user status (you might want to add a "verified" field)
    user.verified = true;
    await user.save();

    // Send a success response
    res.status(200).send('OTP verified successfully');

  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});





app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

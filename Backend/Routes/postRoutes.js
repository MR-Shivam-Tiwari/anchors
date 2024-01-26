const express = require("express");
const router = express.Router();
const Post = require("../Models/post");

router.post("/upload", async (req, res) => {
  const { category, postName, videoLink, tagProducts, startingPrice, img1, img2,img3,img4,img5 } =
    req.body;

  try {
    const newPost = new Post({
      category,
      postName,
      videoLink,
      tagProducts,
      startingPrice,
      img1,
      img2,
      img3,
      img4,
      img5,
    });

    const savedPost = await newPost.save();
    res.json(savedPost);
  } catch (error) {
    console.error("Error uploading post:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;

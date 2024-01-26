const express = require("express");
const router = express.Router();
const Post = require("../Models/post"); // Adjust the import based on your Post model

// Get all posts
router.get("/getpost", async (req, res) => {
  try {
    const posts = await Post.find({});
    res.json(posts || []);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Add more routes for creating, updating, or deleting posts if needed

module.exports = router;

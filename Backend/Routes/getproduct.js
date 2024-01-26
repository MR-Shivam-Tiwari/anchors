const express = require("express");
const router = express.Router();
const Product = require("../Models/product"); // Adjust the import based on your Product model

// Get all products
router.get("/getproducts", async (req, res) => {
  try {
    const products = await Product.find({});
    res.json({ products: products || [] });
  } catch (error) {
    console.error("Error fetching products:", error);

    // Handle specific error types if needed
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;

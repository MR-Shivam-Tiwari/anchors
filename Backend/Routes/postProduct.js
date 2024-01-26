const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const Product = require("../Models/product");

router.post(
  "/uploadproduct",
  [
    // Validation middleware using express-validator
    body("productName").isString().notEmpty(),
    body("productImageLink").isString().notEmpty(),
    body("price").isNumeric().notEmpty(),
  ],
  async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { productName, productImageLink, price } = req.body;

    try {
      const newProduct = new Product({
        productName,
        productImageLink,
        price,
      });

      const savedProduct = await newProduct.save();
      res.json(savedProduct);
    } catch (error) {
      console.error("Error uploading product:", error);

      // Handle specific error types if needed
      if (error.name === "ValidationError") {
        return res.status(400).json({ error: error.message });
      }

      res.status(500).json({ error: "Internal server error" });
    }
  }
);

module.exports = router;

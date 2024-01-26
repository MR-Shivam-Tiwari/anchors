const express = require("express");
const router = express.Router();
const Itinerary = require("../Models/Itinerarysh");

router.get("/getItineraries", async (req, res) => {
  try {
    const { day } = req.query; // Get day from query parameters

    let query = {}; // Default: get all itineraries

    if (day) {
      query = { day: parseInt(day) }; // If day is specified, filter by day
    }

    const itineraries = await Itinerary.find(query);

    if (itineraries.length === 0) {
      return res.status(404).json({ message: "No itineraries found" });
    }

    res.status(200).json(itineraries);
  } catch (error) {
    console.error("Error fetching itineraries:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;

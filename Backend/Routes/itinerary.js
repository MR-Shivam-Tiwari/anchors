const express = require("express");
const router = express.Router();
const Itinerary = require("../Models/Itinerarysh");

router.post("/saveItinerary", async (req, res) => {
  try {
    const { itineraryData, day } = req.body; // Include postName in the request body
    console.log('Received itineraryData:', itineraryData);
    console.log('Received day:', day);

    // Ensure _id is not included in the request body
    const sanitizedItineraries = itineraryData.map(({ _id, ...rest }) => ({
      ...rest,
      day,
    }));

    const savedItineraries = await Itinerary.create(sanitizedItineraries);
    res.json(savedItineraries);
  } catch (error) {
    console.error("Error saving itineraries:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;

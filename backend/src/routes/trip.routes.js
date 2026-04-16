const express = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const {
  getTrips,
  getTripById,
  createTrip,
  updateTrip,
  deleteTrip,
  toggleFavorite,
} = require("../controllers/trip.controller");

const router = express.Router();

router.use(authMiddleware);

router.get("/", getTrips);
router.get("/:id", getTripById);
router.post("/", createTrip);
router.put("/:id", updateTrip);
router.delete("/:id", deleteTrip);
router.patch("/:id/favorite", toggleFavorite);

module.exports = router;

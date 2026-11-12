
const express = require("express");
const router = express.Router();

const listingController = require("../controllers/listingController");
const validateListing = require("../middleware/validateListing");

// CREATE listing
router.post(
    "/",
    validateListing,
    listingController.createListing
);

// GET all listings
router.get("/", listingController.getAllListings);

// GET listing by ID
router.get("/:id", listingController.getListingById);

// UPDATE listing
router.put(
    "/:id",
    validateListing,
    listingController.updateListing
);

// DELETE listing
router.delete("/:id", listingController.deleteListing);

module.exports = router;

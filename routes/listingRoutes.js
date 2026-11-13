
const express = require("express");
const router = express.Router();
const listingController = require("../controllers/listingController");
const validateListing = require("../middleware/validateListing");

router.post(
    "/",
    validateListing,
    listingController.createListing
);
router.get("/", listingController.getAllListings);

router.get("/:id", listingController.getListingById);

router.put(
    "/:id",
    validateListing,
    listingController.updateListing
);

router.delete("/:id", listingController.deleteListing);

module.exports = router;


const Listing = require("../models/Listing");

exports.createListing = async (req, res, next) => {
    try {
        const listing = await Listing.create(req.body);

        res.status(201).json({
            success: true,
            message: "Listing created successfully",
            data: listing
        });
    } catch (error) {
        next(error);
    }
};

exports.getAllListings = async (req, res, next) => {
    try {
        const listings = await Listing.find();

        res.status(200).json({
            success: true,
            count: listings.length,
            data: listings
        });
    } catch (error) {
        next(error);
    }
};

exports.getListingById = async (req, res, next) => {
    try {
        const listing = await Listing.findById(req.params.id);

        if (!listing) {
            return res.status(404).json({
                success: false,
                message: "Listing not found"
            });
        }

        res.status(200).json({
            success: true,
            data: listing
        });
    } catch (error) {
        next(error);
    }
};

exports.updateListing = async (req, res, next) => {
    try {
        const listing = await Listing.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!listing) {
            return res.status(404).json({
                success: false,
                message: "Listing not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Listing updated successfully",
            data: listing
        });
    } catch (error) {
        next(error);
    }
};

exports.deleteListing = async (req, res, next) => {
    try {
        const listing = await Listing.findByIdAndDelete(req.params.id);

        if (!listing) {
            return res.status(404).json({
                success: false,
                message: "Listing not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Listing deleted successfully"
        });
    } catch (error) {
        next(error);
    }
};

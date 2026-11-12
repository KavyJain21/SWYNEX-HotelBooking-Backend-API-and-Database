
const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Hotel title is required"],
            trim: true,
            minlength: 3,
            maxlength: 100
        },

        description: {
            type: String,
            required: [true, "Description is required"],
            trim: true,
            maxlength: 1000
        },

        image: {
            type: String,
            default: "https://placehold.co/600x400?text=Hotel"
        },

        price: {
            type: Number,
            required: [true, "Price is required"],
            min: [1, "Price must be greater than zero"]
        },

        location: {
            type: String,
            required: [true, "Location is required"],
            trim: true
        },

        country: {
            type: String,
            required: [true, "Country is required"],
            trim: true
        },

        amenities: {
            type: [String],
            default: []
        },

        available: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
);

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;

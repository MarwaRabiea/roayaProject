const reviewRouter = require("express").Router();
const Review = require("../models/reviewModel");


reviewRouter.post("/add review", async (req, res) => {
    const newReview = new Review(req.body);

    try {
        const savedReview = await newReview.save();
        res.status(200).json(savedReview);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports =reviewRouter;
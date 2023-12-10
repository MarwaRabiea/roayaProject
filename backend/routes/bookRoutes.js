const User = require("../models/userModel");
const express = require("express");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const { verifyToken, verifyTokenAndAdmin } = require("../routes/VerifyToken");
const Book = require("../models/bookModel");
const bookRouter = express.Router();

bookRouter.get("/findby/:id", async (req, res) => {
  const bookId = req.params.id;
  try {
    const book = await Book.findById(bookId);
    res.status(200).json(book);
  } catch (err) {
    res.status(500).json(err);
  }
});
bookRouter.get('/list', (req, res) => {
  //limit??
  const { limit = 10 } = req.query;

  getAllBooks(limit)
    .then(books => {
      console.log(`books`, books);
      return res.status(200).send(books);
    })
    .catch(err => {
      console.log(`err`, err);
      return res.status(404).send({ error: err.message });
    });
});

bookRouter.post("/add",verifyToken, verifyTokenAndAdmin, async (req, res) => {
  // const newBook = new Book(req.body);

  try {
      const newBook = await Book.create(req.body);
      res.status(201).json(newBook);
  } catch (err) {
      res.status(400).json({
      message: err.message });
  }
});

bookRouter.delete("/id",  verifyToken, verifyTokenAndAdmin  , async (req, res) => {
  const bookId = req.params.id;
try {
      await Book.findByIdAndDelete(bookId);
      res.json({ message: 'Book deleted' });
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
});

bookRouter.put("/:id", verifyTokenAndAdmin,async (req, res) => {
 
  const bookId = req.params.id;
  const { title, author, description, price, rating } = req.body;

  try {
      const updatedBook = await Book.findByIdAndUpdate(
          bookId, {
          title,
          author,
          description,
          price,
          rating
      }, { new: true });

      res.json(updatedBook);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
});


module.exports = bookRouter;

const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishYear: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
     user: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'user', 
      required: true 
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("books", bookSchema);

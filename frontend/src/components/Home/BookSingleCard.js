import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineBook, AiOutlineUser, AiOutlineEdit, AiOutlineInfoCircle, AiOutlineDelete, AiOutlineClockCircle, AiOutlineEye } from "react-icons/ai";
import BookModal from "./BookModal";
import "./bookCard.css";           
import "./bookSingleCard.css";     

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="book-card">
      <div className="book-info">
        <AiOutlineBook className="book-icon" />
        <h2>{book.title}</h2>
      </div>
      <div className="book-info">
        <AiOutlineUser className="book-icon" />
        <h2>{book.author}</h2>
      </div>
      <div className="book-info">
        <AiOutlineClockCircle className="book-icon" />
        <h2>{book.publishYear}</h2>
      </div>

      <div className="book-actions">
        <AiOutlineEye
          className="action-icon show-icon"
          onClick={() => setShowModal(true)}
        />
        <Link to={`/books/details/${book._id}`}>
          <AiOutlineInfoCircle className="action-icon info-icon" />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className="action-icon edit-icon" />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <AiOutlineDelete className="action-icon delete-icon" />
        </Link>
      </div>

      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default BookSingleCard;
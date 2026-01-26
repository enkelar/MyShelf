import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import BookModal from "./BookModal";
import "./bookSingleCard.css";

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="book-card">
      <div className="book-info">
        <PiBookOpenTextLight className="book-icon" />
        <h2>{book.title}</h2>
      </div>
      <div className="book-info">
        <BiUserCircle className="book-icon" />
        <h2>{book.author}</h2>
      </div>
      <div className="book-info">
        <AiOutlineClockCircle className="book-icon" />
        <h2>{book.publishYear}</h2>
      </div>
      <div className="book-actions">
        <BiShow
          className="show-icon action-icon "
          onClick={() => setShowModal(true)}
        />
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className="info-icon action-icon " />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className="edit-icon action-icon " />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className="delete-icon action-icon " />
        </Link>
      </div>
      {/* Display BookModal when showModal state is true */}
      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default BookSingleCard;

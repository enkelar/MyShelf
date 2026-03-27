import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import { useParams } from "react-router-dom";
import BackButton from "../../components/buttons/BackButton";
import "./showBook.css";

const ShowBook = () => {
  const [book, setBook] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/books/${id}`)
      .then((res) => {
        setBook(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!book) return null; 

  return (
    <div className="show-book container">
      <BackButton />
      <div className="show-book-heading">
        <h1>Book Details</h1>
      </div>
      <div className="show-book-details">
        <div className="show-book-info">
          <span className="show-book-label">Id</span>
          <span className="show-book-value">{book._id}</span>
        </div>
        <div className="show-book-info">
          <span className="show-book-label">Title</span>
          <span className="show-book-value">{book.title}</span>
        </div>
        <div className="show-book-info">
          <span className="show-book-label">Author</span>
          <span className="show-book-value">{book.author}</span>
        </div>
        <div className="show-book-info">
          <span className="show-book-label">Publish Year</span>
          <span className="show-book-value">{book.publishYear}</span>
        </div>
        <div className="show-book-info">
          <span className="show-book-label">Description</span>
          <span className="show-book-value">{book.description}</span>
        </div>
      </div>
    </div>
  );
};

export default ShowBook;
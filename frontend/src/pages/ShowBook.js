import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import "./showBook.css";

const ShowBook = () => {
  const [book, setBook] = useState({});
  const { id } = useParams();

  //Fetch book details
  useEffect(() => {
    axios
      .get(`http://localhost:8080/books/${id}`)
      .then((res) => {
        setBook(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div className="container">
      <BackButton />
      <h1 className="heading">Show Book</h1>
      <div className="book-details">
        <div className="book-info">
          <span className="label">Id</span>
          <span className="value">{book._id}</span>
        </div>
        <div className="book-info">
          <span className="label">Title</span>
          <span className="value">{book.title}</span>
        </div>
        <div className="book-info">
          <span className="label">Author</span>
          <span className="value">{book.author}</span>
        </div>
        <div className="book-info">
          <span className="label">Publish Year</span>
          <span className="value">{book.publishYear}</span>
        </div>
      </div>
    </div>
  );
};

export default ShowBook;

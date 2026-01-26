import React, { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import axios from "../utils/axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import SaveButton from "../components/SaveButton";
import "./editBook.css";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  // Accessing the book id from the route parameters
  const { id } = useParams();

  const { enqueueSnackbar } = useSnackbar();

  //data fetching
  useEffect(() => {
    axios
      .get(`http://localhost:8080/books/${id}`) // Change port to 8080
      .then((res) => {
        setAuthor(res.data.author);
        setPublishYear(res.data.publishYear);
        setTitle(res.data.title);
        setDescription(res.data.description);
      })
      .catch((error) => {
        alert("An error happened. Please check console");
        console.log(error);
      });
  }, [id]);

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
      description,
    };

    axios
      .put(`http://localhost:8080/books/${id}`, data)
      .then(() => {
        enqueueSnackbar("Book Edited successfully", { variant: "success", autoHideDuration: 1500 });
        console.log('Book edited succesfully')
        navigate("/");
      })
      .catch((error) => {
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div className="container">
      <BackButton />
      <h1 className="heading">Edit Book</h1>

      <div className="form-container">
        <div className="form-input">
          <label className="form-label">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-field"
          />
        </div>
        <div className="form-input">
          <label className="form-label">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="form-field"
          />
        </div>
        <div className="form-input">
          <label className="form-label">Publish Year</label>
          <input
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="form-field"
          />
        </div>
        <div className="form-input">
          <label className="form-label">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-field"
          />
        </div>
        <SaveButton onClick={handleEditBook} />
      </div>
    </div>
  );
};

export default EditBook;

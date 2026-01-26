import React, { useState } from "react";
import BackButton from "../components/BackButton";

import axios from "../utils/axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import SaveButton from "../components/SaveButton";
import "./createBook.css";

const CreateBooks = () => {
  //to store inputs
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  //used to show notifs/alerts?
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    //prepare data to send to server
    const data = {
      title,
      author,
      publishYear,
      description,
    };

    //send req to server
    axios
      .post("http://localhost:8080/books", data)
      .then(() => {
        enqueueSnackbar("Book Created successfully", { variant: "success", autoHideDuration: 1500  });
        console.log('Book created succesfully')
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
      <h1 className="heading">Create Book</h1>

      <div className="form-container">
        <div className="form-input">
          <label className="form-label">Title</label>
          <input
            type="text"
            value={title}
            //event handler sets the input
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
        <SaveButton onClick={handleSaveBook} />
      </div>
    </div>
  );
};

export default CreateBooks;

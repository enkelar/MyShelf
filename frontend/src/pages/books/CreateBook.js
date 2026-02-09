import React, { useState } from "react";
import BackButton from "../../components/buttons/BackButton";

import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import SaveButton from "../../components/buttons/SaveButton";
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
    const currentYear = new Date().getFullYear();

    // Validate publish year
    if (!publishYear) {
      enqueueSnackbar("Please enter a publish year", { variant: "warning" });
      return;
    }

    if (publishYear > currentYear) {
      enqueueSnackbar(`Publish year cannot be beyond ${currentYear}`, { variant: "error" });
      return;
    }

    //prepare data to send to server
    const data = {
      title,
      author,
      publishYear,
      description,
    };

    //send req to server
    axios
      .post("/books", data)
      .then(() => {
        enqueueSnackbar("Book Created successfully", { variant: "success", autoHideDuration: 1500 });
        console.log('Book created succesfully')
        navigate("/");
      })
      .catch((error) => {
        const errorMsg = error.response?.data?.message || "Error creating book";
        enqueueSnackbar(errorMsg, { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div className="container">
      <BackButton />
      <div className="header-container">
        <h1>Add Book</h1>
      </div>

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
            max={new Date().getFullYear()}
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

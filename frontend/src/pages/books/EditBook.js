import React, { useState, useEffect } from "react";
import BackButton from "../../components/buttons/BackButton";
import axios from "../../utils/axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import SaveButton from "../../components/buttons/SaveButton";
import "./editBook.css";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true); // Start loading when ID changes
    axios
      .get(`/books/${id}`)
      .then((res) => {
        setAuthor(res.data.author);
        setPublishYear(res.data.publishYear);
        setTitle(res.data.title);
        setDescription(res.data.description);
        setLoading(false); // Data is ready, stop loading
      })
      .catch((error) => {
        setLoading(false);
        alert("An error happened. Please check console");
        console.log(error);
      });
  }, [id]);

  const handleEditBook = () => {
    const currentYear = new Date().getFullYear();

    if (!publishYear) {
      enqueueSnackbar("Please enter a publish year", { variant: "warning" });
      return;
    }

    if (publishYear > currentYear) {
      enqueueSnackbar(`Publish year cannot be beyond ${currentYear}`, { variant: "error" });
      return;
    }

    const data = { title, author, publishYear, description };

    axios
      .put(`/books/${id}`, data)
      .then(() => {
        enqueueSnackbar("Book Edited successfully", { variant: "success", autoHideDuration: 1500 });
        navigate("/");
      })
      .catch((error) => {
        const errorMsg = error.response?.data?.message || "Error editing book";
        enqueueSnackbar(errorMsg, { variant: "error" });
        console.log(error);
      });
  };

  if (loading) return null;

  return (
    <div className="edit-book container">
      <BackButton />
      <div className="edit-book-heading">
        <h1>Edit Book</h1>
      </div>

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
        <SaveButton onClick={handleEditBook} />
      </div>
    </div>
  );
};

export default EditBook;
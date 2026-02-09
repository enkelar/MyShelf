import BackButton from "../../components/buttons/BackButton";
import axios from "../../utils/axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import "./deleteBook.css";

const DeleteBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    axios
      .delete(`/books/${id}`)
      .then(() => {
        enqueueSnackbar("Book Deleted successfully", { variant: "success", autoHideDuration: 1500 });
        console.log('Book deleted succesfully')
        navigate("/");
      })
      .catch((error) => {
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div className="delete-book container">
      <BackButton />
      <div className="delete-container">
        <h3 className="confirmation-message">
          Are you sure you want to delete this book?
        </h3>
        <button className="delete-button" onClick={handleDeleteBook}>
          Yes, Delete it
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;

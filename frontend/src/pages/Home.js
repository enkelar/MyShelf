import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import { Link } from "react-router-dom";
import BooksCard from "../components/Home/BookCard";
import "./home.css";

const Home = () => {
  const [books, setBooks] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  //fetch list of books
  useEffect(() => {
    axios
      .get("http://localhost:8080/books")
      .then((res) => {
        setBooks(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); // Empty dependency array ensures the effect runs only on mount

  return (
    <div>
      <nav className="navbar">
        <Link to="/books/create" className="addLink">
          <button className="addButton">
            <b>ADD</b>
          </button>
        </Link>
        <h1>MyShelf</h1>
        <button className="white_btn" onClick={handleLogout}>
          Logout
        </button>
      </nav>
      <div className="container">
        <h1>Book List</h1>
        <BooksCard books={books} />
      </div>
    </div>
  );
};

export default Home;

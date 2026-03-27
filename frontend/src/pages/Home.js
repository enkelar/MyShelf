import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import { Link } from "react-router-dom";
import BooksCard from "../components/Home/BookCard";
import "./home.css";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  useEffect(() => {
    axios
      .get("/books")
      .then((res) => {
        setBooks(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  }, []);

  return (
    <div className="home-wrapper">
      <nav className="navbar">
        <div className="nav-section nav-left">
          <Link to="/books/create" className="addLink">
            <button className="addButton">ADD</button>
          </Link>
        </div>

        <div className="nav-section nav-center">
          <h1 className="logo">MyShelf</h1>
        </div>

        <div className="nav-section nav-right">
          <button className="logOutBtn" onClick={handleLogout}>
            Logout
          </button>
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {menuOpen && (
          <div className="mobile-menu">
            <Link to="/books/create" className="mobile-menu-item" onClick={() => setMenuOpen(false)}>
              ADD
            </Link>
            <button className="mobile-menu-item logout-mobile" onClick={() => { handleLogout(); setMenuOpen(false); }}>
              Logout
            </button>
          </div>
        )}
      </nav>

      <div className="container">
        <header className="content-header">
          <h1>Book List</h1>
        </header>
        {books.length === 0 ? (
          <p className="no-books-message">
            No books yet! Start adding books to your collection.
          </p>
        ) : (
          <BooksCard books={books} />
        )}

      </div>
    </div>
  );
};

export default Home;

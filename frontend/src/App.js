import React from "react";
import './utils/axios';
import { Routes, Route, Navigate } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBook";
import ShowBook from "./pages/ShowBook";
import EditBook from "./pages/EditBook";
import DeleteBook from "./pages/DeleteBook";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
  const user = localStorage.getItem("token");

  return (
    <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {user ? (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/books/create" element={<CreateBook />} />
          <Route path="/books/details/:id" element={<ShowBook />} />
          <Route path="/books/edit/:id" element={<EditBook />} />
          <Route path="/books/delete/:id" element={<DeleteBook />} />
        </>
      ) : (
        <Route path="/" element={<Navigate replace to="/login" />} />
      )}
    </Routes>
    </SnackbarProvider>
    
  );
};

export default App;

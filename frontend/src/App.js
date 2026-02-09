import React from "react";
import './utils/axios';
import { Routes, Route, Navigate } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import Home from "./pages/Home";
import CreateBook from "./pages/books/CreateBook";
import ShowBook from "./pages/books/ShowBook";
import EditBook from "./pages/books/EditBook";
import DeleteBook from "./pages/books/DeleteBook";
import AuthPage from "./pages/auth/AuthPage";

const App = () => {
  const user = localStorage.getItem("token");

  return (
    <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        {user ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/books/create" element={<CreateBook />} />
            <Route path="/books/details/:id" element={<ShowBook />} />
            <Route path="/books/edit/:id" element={<EditBook />} />
            <Route path="/books/delete/:id" element={<DeleteBook />} />
          </>
        ) : (
          <Route path="/" element={<Navigate replace to="/auth" />} />
        )}
      </Routes>
    </SnackbarProvider>

  );
};

export default App;

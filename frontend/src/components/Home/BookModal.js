import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import './bookModal.css';

const BookModal = ({ book, onClose }) => {
  return (
    <div className='modal-overlay' onClick={onClose}>
      <div
        onClick={(event) => event.stopPropagation()} // Stops modal from closing when clicking inside the content
        className='modal-content'
      >
        <AiOutlineClose className='close-icon' onClick={onClose} />
        <h4 className='year-badge'>{book.publishYear}</h4>
        <div className='book-info'>
          <PiBookOpenTextLight className='book-icon' />
          <h2>{book.title}</h2>
        </div>
        <div className='book-info'>
          <BiUserCircle className='book-icon' />
          <h2>{book.author}</h2>
        </div>
        <p className='modal-description'>Book description</p>
        <p>{book.description}</p>
      </div>
    </div>
  );
};

export default BookModal;

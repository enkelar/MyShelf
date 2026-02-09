import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import './bookModal.css';

const BookModal = ({ book, onClose }) => {
  return (
    <div className='modal-overlay' onClick={onClose}>
      <div
        onClick={(event) => event.stopPropagation()}
        className='modal-content'
      >
        <AiOutlineClose className='close-icon' onClick={onClose} />
        <h4 className='year-badge'>{book.publishYear}</h4>
        <div className='bm-book-info'>
          <PiBookOpenTextLight className='book-icon' />
          <h3>{book.title}</h3>
        </div>
        <div className='bm-book-info'>
          <BiUserCircle className='book-icon' />
          <h3>{book.author}</h3>
        </div>
        <p className='description-label'>Book description</p>
        <p className='book-description'>{book.description}</p>
      </div>
    </div>
  );
};

export default BookModal;

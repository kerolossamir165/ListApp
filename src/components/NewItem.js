import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions';
import FileInput from './FileUplaod'

import defaultIamge from '../Images/765-default-avatar.png'
import './NewItem.css'; 


const NewItem = ({dispatch }) => {
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState(null);
  const inputRef = useRef();
  function handelSelectedPhoto(image) {
      setPhoto(image)
  }
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  
  const handleSubmit = e => {
    e.preventDefault();
    let image = photo ? photo : defaultIamge 
    dispatch(addItem(name , image ));
  };

  return (
    <div className="container">
      <h1>Create Your First Course</h1>
      <form onSubmit={handleSubmit}> 
        <label>
          Enter Your name:
          <input
            ref={inputRef}
            value={name}
            required
            onChange={e => setName(e.target.value)}
          />
        </label>
        <div className='flex-column '>
            {photo  && <div className='flex-center'>
              <img alt={name} className='rounded  ' src={photo} />
            </div>}
           <FileInput handelSelectedPhoto={handelSelectedPhoto} />
        </div>
        <button type="submit" className='add ' >
          Add Item
        </button>
      </form>
    </div>
  );
};

export default connect()(NewItem);

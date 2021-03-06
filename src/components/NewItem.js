import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';

import FileInput from './FileUplaod'
import {addItem , updateItem } from '../actions'
import {EDITE_DONE} from '../actions/constant'
import defaultIamge from '../Images/765-default-avatar.png'
import './NewItem.css'; 


const NewItem = ({dispatch  , edite , selected}) => {
  let title = selected ? selected.name : ''
  let avatar = selected ? selected.photo : null
  const [name, setName] = useState(title);
  const [photo, setPhoto] = useState( avatar );
  const inputRef = useRef();


  function handelSelectedPhoto(image) {
      setPhoto(image)
  }
  useEffect(() => {
    inputRef.current.focus();
  }, [  ]);
  
  const handleSubmit = e => {
    e.preventDefault();
    let image = photo ? photo : defaultIamge 

    if(!edite) {
      dispatch(addItem({ name , image}));
    } else {
      
      dispatch(updateItem({name , image}))
     
      dispatch({type:EDITE_DONE})
    }
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
            onChange={e =>  setName(e.target.value)}
          />
        </label>
        <div className='flex-column '>
            {photo  && <div className='flex-center'>
              <img alt={name} className='rounded  ' src={photo} />
            </div>}
           <FileInput handelSelectedPhoto={handelSelectedPhoto}  text='Upload Image'/>
        </div>
        <button type="submit" className='add ' >
          {edite ? 'Submit' : 'Add Item'}
        </button>
      </form>
    </div>
  );
};



export default connect()(NewItem);

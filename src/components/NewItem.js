import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import FileInput from './FileUplaod'
import {addItem , updateItem } from '../actions'
import {EDITE_DONE} from '../actions/constant'
import {validate} from '../helper/validate'
import defaultIamge from '../Images/765-default-avatar.png'
import './NewItem.css'; 



const NewItem = ({dispatch  , edite , selected}) => {
  let title = selected ? selected.name : ''
  let avatar = selected ? selected.photo : null
  const [name, setName] = useState(title);
  const [photo, setPhoto] = useState( avatar );
  let [errorName , setErrorName] = useState('')
  const inputRef = useRef();
  
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handelSelectedPhoto(image) {
      setPhoto(image)
  }

  
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


  let handelChange = (e) => {
    let {value } = e.target 
    if(validate(value , setName , setErrorName)) {
      setName(value)
      setErrorName('')
    }  
  }

 

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
            onChange={handelChange}
          />
          {errorName ? <div style={{color:'red', padding:'5px', border:'1px solid red'}}>{errorName}</div> : null}
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
  )
};



export default connect()(NewItem);

import React from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
 import './list-modal.css'



const ListITem = ({item , deleteItem  ,startEdite , close}) => {
    let { name , photo } = item

   let submit = () => {
        // confirmAlert({
        //   title: 'Are you want to delete this ?',
        //   buttons: [
        //     {
        //       label: 'Yes',
        //       onClick: () => deleteItem(item)
        //     },
        //     {
        //       label: 'No',
        //       onClick: () => {return}
        //     }
        //   ]
        // });


            confirmAlert({
                customUI: ({ onClose }) => {
                  return (
                    <div className='react-modal'>
                      <p>Do you want to delete this item ?</p>
                      <button
                        onClick={() => {
                          deleteItem(item);
                          onClose();
                        }}
                      >
                        Yes, Delete it!
                      </button>
                      <button onClick={onClose}>No</button>
                    </div>
                  );
                }
              });
      };


    return ( <li> 
            <div className='flex'>
                <div>
                    <img src={photo}  alt={name}/>
                </div>
                <p>{name}</p>
            </div>
        
            <button onClick={()=> startEdite(item)}> Edite</button>
            <button onClick={submit}>Delete</button>

          
        </li>);
}
 
export default ListITem;
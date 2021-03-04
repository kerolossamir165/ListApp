import React from 'react';


const ListITem = ({item , deleteItem}) => {
    let { name , photo } = item
    return ( 

        <li> 
            <div className='flex'>
                <div >
                    <img src={photo}   alt=""/>
                </div>
                <p >
                    {name}
                </p>
            </div>
            <button onClick={()=> {
                deleteItem(item)
            }}> Delete</button>
            
        </li>

        
     );
}
 
export default ListITem;
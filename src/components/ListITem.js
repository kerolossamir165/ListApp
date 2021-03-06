import React from 'react';


const ListITem = ({item , deleteItem  ,startEdite}) => {
    let { name , photo } = item
    return ( <li> 
            <div className='flex'>
                <div>
                    <img src={photo}  alt={name}/>
                </div>
                <p>{name}</p>
            </div>
            <button onClick={()=>  deleteItem(item)}> Delete</button>
            <button onClick={()=> startEdite(item)}> Edite</button>
        </li>);
}
 
export default ListITem;
import React from 'react';
import {connect} from 'react-redux'
import ListItem from './ListITem'
import {deleteItem   , updateItem , startEdite , sortItem , closeModal} from '../actions'
import './List.css'

function List({items  , deleteItem , startEdite ,sortItem ,closeModal }) {
    return (
        <ul className=''>
                                { items.length === 0 ? 
                    <div className='flex-center heading'>
                        <p>There Is No Items </p>
                    </div>
                    : 
                    <div>   
                        <button onClick={sortItem} className='sort'>sort</button>
                        {items.map(item=> ( <ListItem key={item.id}   item={item}  deleteItem={deleteItem}
                             close={closeModal}    startEdite={startEdite}/>))}
                    </div>
                  }
                
            </ul>
    )
}
 
function mapStateToProps(state) {
    
    return {
        items: state.list,
        isOpen: state.openModal
    } 
 }


export default connect(mapStateToProps , {deleteItem   , updateItem , startEdite ,closeModal ,sortItem})(List)

import React from 'react';
import {connect} from 'react-redux'
import ListItem from './ListITem'
import {deleteItem  , openModal} from '../actions'
import './List.css'

function List({items  , deleteItem , openModal }) {
    return (
        <ul className=''>
                { items.length === 0 ? 
                    <div className='flex-center heading'>
                        <p>There Is No Items </p>
                    </div>
                    : 
                    items.map(item=> ( <ListItem key={item.id}   item={item}  deleteItem={deleteItem}
                         />))
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


export default connect(mapStateToProps , {deleteItem  , openModal  })(List)

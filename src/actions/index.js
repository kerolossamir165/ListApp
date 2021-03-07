import {ADD_ITEM , DELETE_ITEM , CLOSE_MODAL ,START_EDITE  , EDITE_ITEM , OPEN_MODAL , SORT_ITEM} from './constant'
import uuid from 'react-uuid'

//* Add item Action Creator 
export function addItem({name , image}) {
    return {
        type: ADD_ITEM,
        payload: {
            name,
            photo: image,
            id: uuid()
        }
    }
}

//* Delete item Action Creator 

export function deleteItem(item) {
    return {
        type: DELETE_ITEM,
        payload: item
    }
}

//* Update item Action Creator 

export function updateItem(item) {
    return {
        type: EDITE_ITEM,
        payload:{
            name: item.name ,
            photo: item.image
        }
    }
}


export const startEdite = (item) => {
    return {
        type: START_EDITE,
        payload: item
    }
}


//* open modal  
export const openModal = () => {
    return {
        type: OPEN_MODAL
    }
};
  
//* close modal  

export const closeModal = () => ({
    type: CLOSE_MODAL
});

// * sort Items 

export const sortItem = ()=> {
    return {
        type:  SORT_ITEM
    }
}

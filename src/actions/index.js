import {ADD_ITEM , DELETE_ITEM , CLOSE_MODAL , OPEN_MODAL} from './constant'
import uuid from 'react-uuid'


export function addItem(itemName , itemPhoto) {
    return {
        type: ADD_ITEM,
        payload: {
            name: itemName,
            photo: itemPhoto,
            id: uuid()
        }
    }
}

export function deleteItem(item) {
    return {
        type: DELETE_ITEM,
        payload: item
    }
}

// export function updateITem(itemName , itemPhoto) {
//     return {
//         type:UPDATE,
//         payload:{
//             name: itemName,
//             photo: itemPhoto
//         }
//     }
// }


export const openModal = () => {
    return {
        type: OPEN_MODAL
    }
};
  
export const closeModal = () => ({
    type: CLOSE_MODAL
});
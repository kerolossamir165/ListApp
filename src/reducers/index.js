import produce from 'immer'
import {
    ADD_ITEM,
    DELETE_ITEM,
    OPEN_MODAL ,
    CLOSE_MODAL,
        
} from '../actions/constant'

let initialState = {
    list: [] ,
    openModal : false 
}

let reducer = produce((draft, action) => {
    switch (action.type) {
        case ADD_ITEM:
            draft.list.push(action.payload)
            draft.openModal = false 
            break
        case DELETE_ITEM:
            let  pos = draft.list.findIndex(ele => ele.id === action.payload.id)
            draft.list.splice(pos  , 1)
            break
        case OPEN_MODAL: 
            draft.openModal = true 
            break
        //  case UPDATE:  
        //     draft.list.map(element => element.id === action.payload.id ?  {...element , ...action.payload} : element)
        //     break
        case CLOSE_MODAL: 
            draft.openModal = false 
            break
        default:
            return draft
    }
}, initialState)




export default reducer
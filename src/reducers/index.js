import produce from 'immer'
import {
    ADD_ITEM,
    DELETE_ITEM,
    OPEN_MODAL,
    CLOSE_MODAL,
    EDITE_ITEM,
    EDITE_DONE,
    START_EDITE,
    SORT_ITEM

} from '../actions/constant'

let initialState = {
    list: [],
    openModal: false,
    edite: false,
    selected: null
}

let reducer = produce((draft, action) => {
    switch (action.type) {
        case ADD_ITEM:
            draft.list.push(action.payload)
            draft.openModal = false
            break
        case DELETE_ITEM:
            let pos = draft.list.findIndex(ele => ele.id === action.payload.id)
            
            draft.list.splice(pos, 1)
            break
        case OPEN_MODAL:
            draft.openModal = true
            break

        case START_EDITE:

            draft.selected = action.payload
            draft.openModal = true
            draft.edite = true

            break
        case EDITE_ITEM:

            let index = draft.list.findIndex(element => element.id === draft.selected.id)
            draft.list[index] =  {
                ...action.payload,
                id: draft.selected.id
            }
            break
        case EDITE_DONE:
            draft.edite = false
            draft.selected = null
            draft.openModal = false
            break
        
        case SORT_ITEM: 
            draft.list.sort((a, b) => {
                if(a.name.toLowerCase() < b.name.toLowerCase()) {
                    return -1 
                } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
                    return 1
                } else {
                    return 0
                }
            })
            break
        case CLOSE_MODAL:
            draft.openModal = false
            break
        default:
            return draft
    }
}, initialState)

export default reducer
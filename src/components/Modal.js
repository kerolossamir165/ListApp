import React from 'react';
import {connect} from 'react-redux'
import NewItem from './NewItem'
import Modal from 'react-modal'
import { closeModal} from '../actions'
import './Modal.css'



function AppModal({isOpen , closeModal}) {
    return (
        <Modal isOpen={isOpen} onRequestClose={closeModal}>
            <NewItem  />
            <button onClick={closeModal}  className='btn-close'>&times;</button>
        </Modal> 
    )
}

function mapStateToProps(state) {
    return {
        isOpen: state.openModal
    }
}

export default connect(mapStateToProps, { closeModal})(AppModal)
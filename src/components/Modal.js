import React from 'react';
import {connect} from 'react-redux'
import NewItem from './NewItem'
import Modal from 'react-modal'
import { closeModal , addItem} from '../actions'

import './Modal.css'

function AppModal({isOpen , closeModal , edite , selected}) {
    return (
        <Modal isOpen={isOpen} onRequestClose={closeModal}>
            <NewItem  edite={edite} selected={selected} />
            <button onClick={closeModal}  className='btn-close'>&times;</button>
        </Modal> 
    )
}

function mapStateToProps(state) {
    return {
        isOpen: state.openModal,
        edite: state.edite,
        selected: state.selected
    }
}

export default connect(mapStateToProps, { closeModal ,addItem})(AppModal)
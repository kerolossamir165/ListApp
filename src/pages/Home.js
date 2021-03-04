import React from 'react';
import {connect} from 'react-redux'
import Modal from '../components/Modal'
import List from '../components/List'
import { openModal   } from '../actions' 

import './Home.css'

function Home({openModal}) {
    return(
        <div className="container">
            <div className="flex-items">
                <header>
                    <h1> Add Your List : </h1>
                </header>
                <button className='add-btn' onClick={openModal}>
                    Add Item
                </button>
            </div>
            <Modal />
            <List />
        </div>
    )


}

export default connect(null , {openModal})(Home)



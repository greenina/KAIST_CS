import React from 'react';
import './style.css'
import { Link } from 'react-scroll'
import { Component } from 'react';
import Modal from '../Modal';

class Header extends Component {
    constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    }
  }
    
    openModal = () => {
        this.setState({ isModalOpen: true });
    }
    closeModal = () => {
        this.setState({ isModalOpen: false }); 
    }
    render () {
        return(
            <header className="header">
                <div className="headerMenu">
                <Modal isOpen={this.state.isModalOpen} close={this.closeModal}/>
                <nav>
                    <a><Link to="intro" spy={true} smooth={true}>INTRO</Link></a>
                    <a><Link to="eventtitle" spy={true} smooth={true}>EVENTS</Link></a>
                    <a><Link to="members" spy={true} smooth={true}>MEMBERS</Link></a>
                    <a onClick={this.openModal}>LOGIN</a>
                </nav>
                </div>
                <div className="main">
                    <h1>전 산과 학생회가 좋아요</h1>
                </div>
                {/* <div>
                    sns icon
                </div> */}
            </header>
        )
    }
}
export default Header;
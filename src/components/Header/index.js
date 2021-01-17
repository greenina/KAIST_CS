import React from 'react';
import './style.css'
import { Link } from 'react-scroll'
import { Component } from 'react';
import Modal from '../Modal';

class Header extends Component {
    state = {
        isModalOpen: false,
        administrator: false,
        veri: false
    };
    element = {
        id: '1234',
        pw: '5678'
    }

    openModal = () => {
        this.setState({ isModalOpen: true });
    }
    closeModal = () => {
        this.setState({ isModalOpen: false }); 
    }

    render () {
        return(
            <div>
                <header className="header">
                    <div className="headerMenu">
                    <Modal isOpen={this.state.isModalOpen}
                            close={this.closeModal}
                            changeState={this.props.changeState}
                            element={this.element}/>
                            
                    <nav>
                        <a><Link to="intro" spy={true} smooth={true}>INTRO</Link></a>
                        <a><Link to="eventtitle" spy={true} smooth={true}>EVENTS</Link></a>
                        <a><Link to="members" spy={true} smooth={true}>MEMBERS</Link></a>
                        <a onClick={this.openModal}>LOGIN</a>
                    </nav>
                    </div>
                    <div className="main">
                        <h1>전 인화가 좋아요</h1>
                    </div>
                    {/* <div>
                        sns icon
                    </div> */}

                </header>
            </div>
        )
    }
}
export default Header;
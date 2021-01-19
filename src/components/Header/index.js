import React from 'react';
import './style.css'
import { Link } from 'react-scroll'
import { Component } from 'react';
import Modal from '../Modal';
import { View } from 'react-native';
import styled from 'styled-components';

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

        const Wrapper = styled.div`
        height: 90px;
        width: 100%;
        /* 색상 */
        background: rgba(251, 250, 252, 0.9);
        box-shadow: 0 3px 6px rgba(0,0,0,0.10), 0 3px 6px rgba(0,0,0,0.20);
    
    `;

        return(
            <Wrapper className="header">
                    <div className="headerMenu">
                    <Modal isOpen={this.state.isModalOpen}
                            close={this.closeModal}
                            changeState={this.props.changeState}
                            element={this.element}/>
                    <View style={{flex: 1, flexDirection: 'row'}} >
                        <img className = 'cslogo' src = "/images/logo_color.png" height='80px'></img>
                        <nav className = "menus">
                            <a><Link to="intro" spy={true} smooth={true}>INTRO</Link></a>
                            <a><Link to="eventtitle" spy={true} smooth={true}>EVENTS</Link></a>
                            <a><Link to="members" spy={true} smooth={true}>MEMBERS</Link></a>
                            <a onClick={this.openModal}>LOGIN</a>
                        </nav>
                    </View>
                    </div>

            </Wrapper>
        )
    }
}
export default Header;
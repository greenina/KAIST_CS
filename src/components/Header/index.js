import React,{useState, useRef} from 'react';
import './style.css'
import { Link } from 'react-scroll'
import Intro from '../Intro'
import Events from '../Events'
import Members from '../Memebrs';

const Header = (props)=>{
    return(
        <header className="header">
            <div className="main">
                <h1>전 산이 좋아요</h1>
            </div>
            <nav className="headerMenu">
                <a><Link to="intro" spy={true} smooth={true}>INTRO</Link></a>
                <a><Link to="events" spy={true} smooth={true}>EVENTS</Link></a>
                <a><Link to="members" spy={true} smooth={true}>MEMBERS</Link></a>
                <a>LOGIN</a>
            </nav>
            {/* <div>
                sns icon
            </div> */}
        </header>
    )
}
export default Header;
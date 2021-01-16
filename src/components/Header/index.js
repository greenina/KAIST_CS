import React from 'react';
import './style.css'
import { Link } from 'react-scroll'

const Header = (props)=>{
    return(
        <header className="header">
            <div className="headerMenu">
            <nav>
                <a><Link to="intro" spy={true} smooth={true}>INTRO</Link></a>
                <a><Link to="eventtitle" spy={true} smooth={true}>EVENTS</Link></a>
                <a><Link to="members" spy={true} smooth={true}>MEMBERS</Link></a>
                <a>LOGIN</a>
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
export default Header;
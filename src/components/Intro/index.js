import React, { useRef } from 'react'
import './style.css'
import Slider from "react-slick";
import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image';
import image1 from './images/image1.PNG'
import image2 from './images/image2.PNG'
import image3 from './images/image3.PNG'

const Intro = (props)=>{
    const slideImages = [
        'images/career_concert.jpg',
        'images/culture_event.jpg',
        'images/department.jpg'
      ];
    return(
        <div id="intro" style={{height:500}}>
            <h1>전산학부 학생회</h1>
            <div className="fade-container">
                <Fade >
                    <div className="each-fade">
                        <img src={image1}></img>
                    </div>
                    <div className="each-fade">
                        <img src={image2}></img>
                    </div>
                    <div className="each-fade">
                        <img src={image3}></img>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Intro;
import React from 'react'
import './style.css'
import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image';
import image1 from './images/image1.jpg'
import image2 from './images/image2.jpg'
import image3 from './images/image3.jpg'

const Intro = (props)=>{
    return(
        <div>
        <h1 className="empty"> hi </h1>
        <div  className="images" id="intro" >
            {/* <h1>전산학부 학생회</h1> */}
            <div className="fade-container">
                <Fade >
                    <div className="each-fade">
                        <img src={image1} width= '800px' height = '450px'></img>
                    </div>
                    <div className="each-fade">
                        <img src={image2} width= '800px' height = '450px'></img>
                    </div>
                    <div className="each-fade">
                        <img src={image3} width= '800px' height = '450px'></img>
                    </div>
                </Fade>
            </div>
        </div>
        </div>
    )
}

export default Intro;
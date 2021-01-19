import React, { Component } from 'react'
import styled from 'styled-components';
import './style.css';
class Extra extends Component{

    render() {
        const Wrapper = styled.div`
            width: 100%;
            /* 색상 */
            background: rgba(255,255,255,0.85);
            box-shadow: 0 3px 6px rgba(0,0,0,0.10), 0 3px 6px rgba(0,0,0,0.20);
        `;

        return(
            <Wrapper  >
                <img className = 'logo_black' src='./images/logo_black.png' height='160px'/>
                <div className = 'address'>대전광역시 유성구 대학로 291 한국과학기술원(N1) 전산학부</div>
                <div className = 'mail_add' href="kaist.helloworld@gmail.com">kaist.helloworld@gmail.com</div>
                <div className = 'blank'> hi </div>
                <div className = 'blank'> hi </div>
            </Wrapper>
        )
    }
}

export default Extra;
import { Component } from 'react';
import './style.css'

class ApplyPage extends Component {
    render() {
        return(
            <div className="login">
            <h1>집행위원회 로그인</h1>
            <div className="form-wrapper">
                <div>
                <input className="name-input" type="text" placeholder="이름"/>
                </div>
                <div>
                <input className="password-input" type="text" placeholder="비밀번호"/>
                </div>
                <div></div>
                
                <button className="submit" >제출</button>
            </div>
            </div>
        )
    }
}

export default ApplyPage;
import React from 'react';
import './style.css';
import { Component } from 'react';

class Modal extends Component {
  state = {
          type: 'password',
          score: 'null',
          id: '',
          password: ''
        }
  showHide = this.showHide.bind(this);
  passwordStrength = this.passwordStrength.bind(this);
  
  showHide(e){
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      type: this.state.type === 'input' ? 'password' : 'input'
    })  
  }
  
  passwordStrength(e){
    if(e.target.value === ''){
      this.setState({
        score: 'null'
      })
    }
    else{
      var pw = e.target.password;
      this.setState({
        score: pw.score
      });      
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onFormSubmit = e => {
    e.preventDefault();
    this.props.changeState(this.state.id === this.props.element.id
                          && this.state.password === this.props.element.pw
                          ? true : false);
    this.props.close();
  }

  render() {
    return (
      this.props.isOpen === true ?
        <form onSubmit={this.onFormSubmit}>
        <div>
          <div className="Modal-overlay" onClick={this.props.close} />
          <div className="Modal">
            <div className="admin_title_wrap">
              <div className="admin_title">
                Only for Crews
              </div>
              <div className="staff">
                {/* only for staffs */}
              </div>
              <div>
              <img className = 'button-close' src = "/images/close_button.png" height='20px' onClick={this.props.close}></img>
            </div>
            </div>
            {/* <button className="button-close" onClick={this.props.close}>X</button> */}
            <div>
              <label className="id-input">Student Id
                <input className="id__input"
                        value={this.state.id}
                        onChange={this.handleChange}
                        name="id" />
              </label>
            </div>

            <div>
              <label className="password-input">Password
                <input type={this.state.type} className="password__input"
                                              value={this.state.password}
                                              onChange={this.handleChange}
                                              name="password"/>
                <span className="password__show" onClick={this.showHide}>{this.state.type === 'input' ? 'Hide' : 'Show'}</span>
                <span className="password__strength" data-score={this.state.score} />
              </label>
            </div>
            <img className = 'button-wrap' src = "/images/login_button.png" height='30px' onClick={this.onFormSubmit}></img>
          </div>
        </div>
        </form>
        :
        null
    );
  }
}
export default Modal;
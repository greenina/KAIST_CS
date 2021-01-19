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
            <p className="admin_title">집행위원회 로그인</p>
            
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
            <button className="button-wrap" type="submit" >Login</button>
            <button className="button-wrap" onClick={this.props.close}>Close</button>
          </div>
        </div>
        </form>
        :
        null
    );
  }
}
export default Modal;
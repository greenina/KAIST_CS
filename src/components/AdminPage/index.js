import { Component } from 'react';
import { Link } from 'react-router-dom';
import Mainpage from '../Mainpage';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './style.css'

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode:'admin_main'
    }
  }

  onFormSubmit = e => {
    e.preventDefault();
    debugger;
    this.props.changeState(false);
  }

  manageEvents = () => {
    document.location.href = "/manage_events"
  }
  manageApplier = () => {
    document.location.href = "/manage_apply"
  }
  forLogout = () => {
    document.location.href = "/"
  }

  render() {
    return (
      <div className = 'admin_page'>
          <h2 >집행위원회 관리자 페이지</h2>
          <img className = 'manage_events' src = "/images/manage_evetns.png" width='230px' height='230px' onClick={this.manageEvents}></img>
          <img className = 'manage_apply' src = "/images/manage_applier.png" width='230px' height='230px' onClick={this.manageApplier}></img>
          <img className = 'for_logout' src = "/images/admin_logout.png" width='230px' height='230px' onClick={this.forLogout}></img>
      </div>
    );
  }
}
  
  export default AdminPage;



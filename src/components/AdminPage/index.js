import { Component } from 'react';
import { Link } from 'react-router-dom';
import Mainpage from '../Mainpage';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

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

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <h2>Admin Page</h2>
          <ul>
            <li>
              <Link to="/manage_events">Manage Events</Link>
            </li>
            <li>
              <Link to="/manage_apply">Manage Applier</Link>
            </li>
            <button type="submit" >Log out</button>
          </ul>
        </form>
      </div>
    );
  }
}
  
  export default AdminPage;
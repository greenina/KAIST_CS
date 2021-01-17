import { Component } from 'react';
import { Link } from 'react-router-dom';

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode:'admin_main'
    }
  }

  render() {
    return (
      <div>
        <h2>Admin Page</h2>
            <ul>
              <li>
                <Link to="/manage_events">Manage Events</Link>
              </li>
              <li>
                <Link to="/manage_apply">Manage Applier</Link>
              </li>
              <li>
                <Link to="/" onClick={() => window.location.reload(false)}>Log Out</Link>
              </li>
            </ul>
            
      </div>
    );
  }
}
  
  export default AdminPage;
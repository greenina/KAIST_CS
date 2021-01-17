import { Component } from 'react';

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
      </div>
    );
  }
}
  
  export default AdminPage;
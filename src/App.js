import './App.css';
import { Component } from 'react';
import Mainpage from './components/Mainpage';
import Memberpage from './components/MemberPage';
import Applypage from './components/ApplyPage';
import Adminpage from './components/AdminPage';
import ApplyManagePage from './components/ApplyManagePage';
import EventManagePage from './components/EventManagePage';
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode:'visitor'
    }
  }
    
  getContent(){
    if(this.state.mode === 'visitor') {
      return <BrowserRouter>
              <Switch>
              <Route path="/" exact component={Mainpage}/>
                <Route path="/members" exact component={Memberpage}/>
                <Route path="/apply" exact component={Applypage}/>
                <Route path="/administrator" exact component={Adminpage}/>
                <Route path="/manage_events" component={EventManagePage}/>
                <Route path="/manage_apply" component={ApplyManagePage}/>
              </Switch>
            </BrowserRouter>
    } else if(this.state.mode === 'admin') {
      return <Route path="/administrator" component={Adminpage} />
    }
  }

  render() {
    return (
      <div>
        {this.getContent()}
      </div>
      );
  }
}

export default App;
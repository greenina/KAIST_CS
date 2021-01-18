import './App.css';
import { Component } from 'react';
import Mainpage from './components/Mainpage';
import Memberpage from './components/MemberPage';
import Applypage from './components/ApplyPage';
import AdminPage from './components/AdminPage';
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
    
  changeState = (flag) => {
    console.log(this.state.mode);
    if(flag) {
      this.setState({ mode: 'admin' }); }
    else {
      this.setState({ mode: 'visitor' });
      console.log(this.state.mode);
      debugger; } 
  }

  getContent(){
    if(this.state.mode === 'visitor') {
      return true; 
    } else if(this.state.mode === 'admin') {
      return false; 
    }
  }

  

  render() {

    return (
      this.getContent() ? 
        <BrowserRouter>
            <Switch>
              <Route path="/" exact render= {
                () => <Mainpage changeState = {this.changeState} />
              } />
              <Route path="/members" exact component={Memberpage}/>
              <Route path="/apply" exact component={Applypage}/>
              <Route path="/manage_events" component={EventManagePage}/>
              <Route path="/manage_apply" component={ApplyManagePage}/>
              <Redirect to="/"/>
            </Switch>
          </BrowserRouter>
          :
          <BrowserRouter>
            <Switch>
              <Route path="/administrator" exact render= {
                  () => <AdminPage changeState = {this.changeState} />
                } />
              <Route path="/manage_events" component={EventManagePage}/>
              <Route path="/manage_apply" component={ApplyManagePage}/>
              <Redirect to="/administrator"/>
            </Switch> 
          </BrowserRouter>
      );
  }
}

export default App;
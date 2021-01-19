import './App.css';
import { Component } from 'react';
import Mainpage from './components/Mainpage';
import Memberpage from './components/MemberPage';
import Applypage from './components/ApplyPage';
import AdminPage from './components/AdminPage';
import ApplyManagePage from './components/ApplyManagePage';
import EventManagePage from './components/EventManagePage';
import EventAddPage from './components/EventAddPage';
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import styled from "styled-components";

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

    // const Container = styled.div`
    //     position: absolute;
    //     top: 0;
    //     left: 0;
    //     width: 100%;
    //     height: auto;
    //     background: url(https://www.xmple.com/wallpaper/single-one-colour-solid-color-plain-azure-1920x1080-c-081c24-f-24.svg);
    //     background-size: cover;
    //   `;

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
              <Route path="/add_events" component={EventAddPage}/>
              <Route path="/manage_apply" component={ApplyManagePage}/>
              <Route path="/administrator" component={AdminPage}/>
              <Redirect to="/"/>
            </Switch>
          </BrowserRouter>
          :
          <BrowserRouter>
            <Switch>
              <Route path="/administrator" component={AdminPage}/>
              <Route path="/manage_events" component={EventManagePage}/>
              <Route path="/add_events" component={EventAddPage}/>
              <Route path="/manage_apply" component={ApplyManagePage}/>
              <Redirect to="/administrator"/>
            </Switch> 
          </BrowserRouter>
      );
  }
}

export default App;
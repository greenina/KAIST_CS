import './App.css';
import { Component } from 'react';
import Mainpage from './components/Mainpage';
import Memberpage from './components/MemberPage';
import Applypage from './components/ApplyPage';
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
                <Redirect path="*" to="/" />
              </Switch>
            </BrowserRouter>
    } else if(this.state.mode === 'visitor_members') {
      return <Route path="/members" component={Memberpage} />
    }
  }

  render() {
    return (
      this.getContent()
      );
  }
}

export default App;
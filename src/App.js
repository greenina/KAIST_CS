import './App.css';
import { Component } from 'react';
import Mainpage from './components/Mainpage';
import Memberpage from './components/MemberPage';
import Applypage from './components/ApplyPage';
import Adminpage from './components/AdminPage';
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
              </Switch>
            </BrowserRouter>
    } else if(this.state.mode === 'admin') {
      return <Route path="/admin" component={Adminpage} />
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
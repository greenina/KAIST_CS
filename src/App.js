import './App.css';
import { Component } from 'react';
import Extra from './components/Extra'
import Members from './components/Memebrs'
import Mainpage from './components/Mainpage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode:'visitor_main',
      selected_content_id: 1
      
    }
  }
  
  getContent(){
    if(this.state.mode === 'visitor_main') {
      return <Mainpage onChangeMode={function(_mode){
        this.setState({
          mode:_mode
        })
      }.bind(this)}></Mainpage>
    } else if(this.state.mode === 'visitor_members') {
      return <Mainpage/>
    }
  }

  render() {
    return (
      <div>
        {this.getContent()}
        <Members/>
        <li><a href="/members" onClick={function(e){
          e.preventDefault();
          this.props.onChangeMode('visitor_members');
        }.bind(this)}>members</a></li>
        <Extra/>
      </div>
    );
  }
}

export default App;
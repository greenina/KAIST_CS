import Header from '../Header'
import Intro from '../Intro'
import Events from '../Events'
import EventTitle from '../EventTitle'
import Members from '../Memebrs'
import { Component } from 'react';
import Extra from '../Extra'
import Memberpage from '../MemberPage';
import Applypage from '../ApplyPage';
import { Route, Link, Router } from 'react-router-dom';
import AdminPage from '../AdminPage'

class Mainpage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        mode:'visitor_main'
      }
    }
  
    getReadContent(){
      var i=0;
        while(i < this.state.events.length) {
          var data = this.state.events[i];
          if(data.id === this.state.selected_content_id) {
            return data;
          }
          i = i+1;
        }
    }
    
    getContent(index){
      var _title, _desc, _src, _src2, _article = null;
      if(this.state.mode === 'visitor_main') {
        _title = this.state.events[index].title;
        _desc = this.state.events[index].desc;
        _src = this.state.events[index].src;
        _src2 = this.state.events[index].src2;
        _article = <Events 
                      title={_title}
                      desc={_desc}
                      src={_src}
                      src2={_src2}
                    ></Events>}
      return _article;
    }
  
    render() {
      return (
        this.state.mode === 'visitor_main'?
          <div >
            <Header changeState={this.props.changeState} classname='header' />
            <Intro/>
            <EventTitle />
            <Members />
            {/* <ul>
              <li>
                <Link to="/members">Members</Link>
              </li>
              <li>
                <Link to="/apply">Apply</Link>
              </li>
            </ul> */}
            <Route path="/members" component={Memberpage}/>
            <Route path="/apply" component={Applypage}/>
            <Extra className = 'extrapart'/>
          </div>
        :
        <AdminPage/>
      );
    }
  }
  
  export default Mainpage;
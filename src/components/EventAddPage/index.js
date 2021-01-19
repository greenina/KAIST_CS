import { Component } from 'react';
import React from 'react'
import './style.css'
import { View } from 'react-native';
import axios from 'axios';
import AdminPage from '../AdminPage';
import { Route, Link, Router } from 'react-router-dom';


class EventAddPage extends Component {

  constructor(props){
    super(props)
    this.state={
      photos: [],
      title:'',
      poster: null,
      s_date:'',
      e_date:'',
      facebook:'',
      description:''
    }
    this.uploadHandler = this.uploadHandler.bind(this);
  }
  changeHandler =(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }

  submitHandler = (e) =>{
    e.preventDefault();
    console.log(this.state)
    axios.post('http://192.249.18.245:8081/event/add', this.state)
    .then(response=>{console.log(response)})
    .catch(error =>{
      console.log(error)
    })
  }

  uploadHandler(event) {
    const data = new FormData();
    data.append('file', event.target.files[0]);
    axios.post('http://192.249.18.245:8081/event/uploads', data);
  }

  render() {
    const{title, poster, s_date, e_date, description, facebook} = this.state;

    const moveHref = () => {
      document.location.href = "/manage_events"
    }
    return (
      <div className="events">
        <form onSubmit={this.submitHandler}>
          <div>
            <input  onChange={this.changeHandler} value={title} name="title" className="title-input" type="text" placeholder="사업명"/>
          </div>
          <div>
            <input  onChange={this.changeHandler} value={s_date} name="s_date" className="s_date-input" type="date" placeholder="시작일"/>
          </div>
          <div>
            <input  onChange={this.changeHandler} value={e_date} name="e_date" className="e_date-input" type="date" placeholder="종료일"/>
          </div>
          <div>
            <input  onChange={this.changeHandler} value={description} name="description" className="description-input" type="text" placeholder="사업 상세 설명"/>
          </div>
          <div>
            <input  onChange={this.changeHandler} value={facebook} name="facebook" className="description-input" type="text" placeholder="페북 공지 링크"/>
          </div>
          <div>
            <input type="file" name="file" className="poster-input" onChange={this.uploadHandler}/>
          </div>
          <div>
            <input type="file" name="file" className="poster-input" onChange={this.uploadHandler}/>
          </div>
          <button className="submit" type="submit" onClick={moveHref}>제출</button>
        </form>
      </div>
    );
  }
}
    
export default EventAddPage;

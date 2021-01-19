import { Component } from 'react';
import React from 'react'
import './style.css'
import { View } from 'react-native';
import axios from 'axios';
import AdminPage from '../AdminPage';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
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
      <div className="events_back">
        <form onSubmit={this.submitHandler}>
        <Grid align="center"
                justify="center"
                direction="column"
                className="format"  
                alignItems="center" 
                justify="center">
          <Grid item xs={5} alignItems="center" justify="center">
          <div className="_blank"></div>
          <Paper className="titlePaper" >
                <div className="apply_title">학생회 사업 추가</div>
          </Paper>
          <div className="blank1"></div>
          <Paper >
          <div align="left" className="nameq">1. 사업명</div>
            <input  onChange={this.changeHandler} value={title} name="title" className="title-input" type="text" />
          </Paper>
          <div className="blank2"></div>
          <Paper >
          <div align="left" className="studentIdq">2. 사업 시작일</div>
            <input  onChange={this.changeHandler} value={s_date} name="s_date" className="s_date-input" type="date" />
          </Paper>
          <div className="blank3"></div>
          <Paper >
          <div align="left" className="phoneNumq">3. 사업 종료일</div>
            <input  onChange={this.changeHandler} value={e_date} name="e_date" className="e_date-input" type="date" />
          </Paper>
          <div className="blank4"></div>
          <Paper >
          <div align="left" className="emailq">4. 사업 내용</div>
            <input  onChange={this.changeHandler} value={description} name="description" className="description-input" type="text" />
          </Paper>
          <div className="blank5"></div>
          <Paper >
          <div align="left" className="groupq">5. 페이스북 공지 링크</div>
            <input  onChange={this.changeHandler} value={facebook} name="facebook" className="description-input" type="text" />
          </Paper>
          <div className="blank5"></div>
          <Paper >
          <div align="left" className="motiveq">6. 로고 이미지</div>
            <input type="file" name="file" className="poster-input" onChange={this.uploadHandler}/>
          </Paper>
          <div className="blank5"></div>
          <Paper >
          <div align="left" className="motiveq">7. 포스터 및 카드뉴스 이미지</div>
            <input type="file" name="file" className="poster-input" onChange={this.uploadHandler}/>
          </Paper>
          <img className = 'submit' src = "/images/save_button.png"  height='45px' onClick={moveHref}></img>
          </Grid>
        </Grid>
        </form>
      </div>
    );
  }
}
    
export default EventAddPage;

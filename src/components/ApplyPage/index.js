import { Component, useState } from 'react';
import './style.css'
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SelectInput from '@material-ui/core/Select/SelectInput';
class ApplyPage extends Component{
  constructor(props){
    super(props)
    this.state={
      name:'',
      studentId:'',
      phoneNum:'',
      email:'',
      group:'',
      motive:'',
      comment:"",
      pass:false
    }
  }
  changeHandler =(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }

  submitHandler = (e) =>{
    e.preventDefault();
    console.log(this.state)
    axios.post('http://192.249.18.245:8081/appliers/add', this.state)
    .then(response=>{console.log(response)})
    .catch(error =>{
      console.log(error)
    })
    
  }

  render(){
    const{name, studentId, phoneNum, email, group, motive, comment, pass} = this.state

    const moveHref = () => {
      document.location.href = "/"
    }

    return(
      <div className="recruit">
        <form  onSubmit={this.submitHandler}  alignItems="center" justify="center">
          <Grid align="center"
                justify="center"
                direction="column"
                className="format"  
                alignItems="center" 
                justify="center">
            <Grid item xs={5} alignItems="center" justify="center">
              <div className="blank"></div>
              <Paper className="titlePaper" >
                <div className="apply_title">전산학부 학생회 지원서</div>
              </Paper>
              <div className="blank1"></div>
              <Paper >
                <div  align="left" className="nameq">1. 이름</div>
                <input onChange={this.changeHandler}  value={name} name="name" className="name-input" type="text"/>
              </Paper>
              <div className="blank2"></div>
              <Paper >
              <div  align="left" className="studentIdq">2. 학번 (예시:20200000)</div>
                <input onChange={this.changeHandler} value={studentId}name="studentId"className="studentId-input" type="text" />
              </Paper>
              <div className="blank3"></div>
              <Paper >
              <div  align="left" className="phoneNumq">3. 전화번호 (예시:01091450485)</div>
                <input  onChange={this.changeHandler} value={phoneNum} name="phoneNum" className="phoneNum-input" type="text"/>
              </Paper>
              <div className="blank4"></div>
              <Paper >
              <div  align="left" className="emailq">4. 이메일</div>
                <input  onChange={this.changeHandler}  value={email}name="email"className="email-input" type="text"/>
              </Paper>
              <div className="blank5"></div>
              <Paper >
              <div  align="left" className="groupq">5. 희망 부서 (기획 및 집행부/소통부/미디어부/비서실)</div>
                <input  onChange={this.changeHandler} value={group}name="group" className="group-input" type="text"/>
              </Paper>
              <div className="blank5"></div>
              <Paper >
              <div  align="left" className="motiveq">6. 지원동기를 자유롭게 작성해주세요</div>
                <textarea value={motive} name="motive"  onChange={this.changeHandler} className="motive-input" ></textarea>
              </Paper>
                <img className = 'submit' src = "/images/apply_button.png" height='50px' onClick={this.submitHandler}></img>
            </Grid>
            
            {/* <button className="submit" type="submit" >제출</button> */}
          </Grid>

        </form>
      </div>
    )
  }
}

export default ApplyPage;
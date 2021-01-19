import React, { Component, useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import './style.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Modal from 'react-modal';
import { Provider } from 'react-redux';
import Contact from '../email/Contact';
import {View} from 'react-native';

const store = require('../email/reducers').init();

const styles = theme => ({
  root: {
    padding: theme.spacing(5),
    background: '#eeeeee'
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
});
function Applier({applier}){
    const [modalState, setModalState] = useState(false);
    const [modalState2, setModalState2] = useState(false);
    const [comment, setComment] = useState('');
    const [pass,setPass] = useState(false);
    const openModal = () => {
        setModalState(true);
    };
    const openModal2 = () => {
        setModalState2(true);
    };
    const closeModal = event => {
        event.preventDefault();
        setModalState(false);
    };
    const closeModal2 = event => {
        event.preventDefault();
        setModalState2(false);
    };
    useEffect(()=>{
        setComment(comment)
    },[comment])
    const commentHandler =(e)=>{
        setComment(e.target.value)
      }
    const passHandler =(e)=>{
        setPass(!pass)
    }
    
    const submitHandler = (e) =>{
        e.preventDefault();
        setComment(comment)
        axios.post('http://192.249.18.245:8081/appliers/update/'+applier.studentId, {comment:comment, pass:pass})
        .then(response=>{console.log(response)})
        .catch(error =>{
          console.log(error)
        })
        
      }

  return(
      <div className="applier">
          <Grid item xs={2}>
          <Paper>
            <img className = 'personicon' src = "/images/person_icon.png" width='70px' height='65px'></img>
            {applier.pass?<h1 className="passname">{applier.name}</h1>:<h1 className="failname">{applier.name}</h1>}
            {applier.pass?<h2 className="passgroup">{applier.group}</h2>:<h2 className="failgroup">{applier.group}</h2>}
            {/* <button className="detailbtn"onClick={openModal}>상세 보기</button> */}
            <img className = 'details_btn' src = "/images/details_button.png" width='70px' height='30px' onClick={openModal}></img>
          </Paper>
        </Grid>
        <Modal isOpen={modalState} onRequestClose={closeModal} contentLabel="Example Modal">
        <div className="title-wrapper">
              <div className="blank">    </div>
              <h2 className ="detail_Info">지원자 상세정보</h2>
              <img className = 'button-close' src = "/images/close_circle.png" width="35px"height='35px' onClick={closeModal}></img>
        </div>
        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'column'}}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'column'}}>
              <div className="applier_title">지원자 성명</div>
            <div className="applier_title">희망 부서</div>
            <div className="applier_title">이메일</div>
            <div className="applier_title">지원 동기</div>
            <div className="applier_title">평가란{applier.comment}</div>
            </View>
            <div className="for_emptyspace"/>
            <View style={{flexDirection: 'column'}}>
              <div className="applier_text">{applier.name}</div>
            <div className="applier_text">{applier.group}</div>
            <div className="applier_text">{applier.email}</div>
            <div className="applier_text">{applier.motive}</div>
            </View>
            </View>

            <div>
                <textarea className="comment-input" onChange={commentHandler} value={comment} name="comment"></textarea>
            </div>
            <form onSubmit={submitHandler}>
            {applier.pass?<div className="ppassorfail">
                  합불 여부
                <input
                  type="checkbox"
                  value="comment"
                  checked={pass === true}
                  onChange={passHandler}
                />
              </div>:<div className="fpassorfail">
                  합불 여부
                <input
                  type="checkbox"
                  value="comment"
                  checked={pass === true}
                  onChange={passHandler}
                />
              </div>}
              <img className = 'submitBtn' src = "/images/save_button.png"   height="32px"onClick={submitHandler}></img>
              {/* <button className="submit" type="submit" >저장</button> */}
              {/* {applier.pass?<div className="pass">합격</div>:<div className="fail">불합격</div>} */}
            </form>
            </View>
            <div className= "contact_view">
          <View style={{flexDirection: 'column'}}>
            <Provider store={store}>
              <BrowserRouter>
                <div className='App'>
                    <div className='container'>
                    <Route exact path='/manage_apply' component={()=><Contact email ={applier.email}/>} />
                    </div>
                </div>
              </BrowserRouter>
            </Provider>
            </View>
            </div>
            </View>
        </Modal>
      </div>
  )
}
function ApplierView(props){
    const { classes } = props;
    const [applierInfo, setApplierInfo] = useState([]);
    useEffect(()=>{
        let umounted = false;
      axios.get("http://192.249.18.245:8081/appliers/all").then(
          (res)=>{
            setApplierInfo(res.data)
          }
      )
      .catch(error =>{
        console.log(error)
      })
      
      return ()=>{umounted= true}
    },[])
    return (
      <div className={classes.root}>
        <Grid container spacing={2}>
          {applierInfo.map(applier =>(
              <Grid item xs={2}>
              <Applier applier={applier} key={applier.name}/>
              </Grid>
          ))}
        </Grid>
      </div>
    );

}
export default withStyles(styles)(ApplierView);
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
            <div>
            <h2 className ="detailInfo">지원자 상세정보</h2>
            <div>지원자 성명:{applier.name}</div>
            <div>희망 부서:{applier.group}</div>
            <div>이메일:{applier.email}</div>
            <div>지원 동기:{applier.motive}</div>
            <div>평가란:{applier.comment}</div>
            <div>
                <textarea className="comment-input" onChange={commentHandler} placeholder="지원자 평가란" value={comment} name="comment"></textarea>
            </div>
            <Provider store={store}>
                    <BrowserRouter>
                        <div className='App'>
                            <div className='container'>
                            <Route exact path='/manage_apply' component={()=><Contact applier ={applier}/>} />
                            </div>
                        </div>
                    </BrowserRouter>
                </Provider>
            <form onSubmit={submitHandler}>
            <div>
                합불 여부
            <input
              type="checkbox"
              value="comment"
              checked={pass === true}
              onChange={passHandler}
            />
            </div>
            <button className="submit" type="submit" >저장</button>
            {applier.pass?<div className="pass">합격</div>:<div className="fail">불합격</div>}
            </form>
            </div>
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
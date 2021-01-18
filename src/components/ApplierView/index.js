import React, { Component, useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import './style.css';
import Modal from 'react-modal';


// async function request(){
//   const response = await fetch('http://192.249.18.245:8080/appliers/all',{
//     method:"GET"
//   })
//   const data = await response.json();
//   console.log(data);
// }
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
    const [comment, setComment] = useState('');
    const [pass,setPass] = useState(false);
    const openModal = () => {
        setModalState(true);
    };
    const commentHandler =(e)=>{
        setComment(e.target.value)
      }
    const passHandler =(e)=>{
        setPass(!pass)
    }
    const closeModal = event => {
        event.preventDefault();
        setModalState(false);
    };
    const submitHandler = (e) =>{
        e.preventDefault();
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
            <h1>{applier.name}</h1>
            <h2>{applier.group}</h2>
            <button onClick={openModal}>상세 보기</button>
          </Paper>
        </Grid>
        <Modal isOpen={modalState} onRequestClose={closeModal} contentLabel="Example Modal">
            <h2 className ="detailInfo">지원자 상세정보</h2>
            <div>지원자 성명:{applier.name}</div>
            <div>희망 부서:{applier.group}</div>
            <div>이메일:{applier.email}</div>
            <div>지원 동기:{applier.motive}</div>
            <div>평가란:{applier.comment}</div>
            <form onSubmit={submitHandler}>
            <div>
                <textarea className="comment-input" onChange={commentHandler} placeholder="지원자 평가란" value={comment} name="comment"></textarea>
            </div>
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
            </form>
        </Modal>
      </div>
        
  )
}
function ApplierView(props){
    const { classes } = props;
    const [applierInfo, setApplierInfo] = useState([]);
    useEffect(()=>{
        let umounted = false;
      axios.get("http://192.249.18.245:8080/appliers/all").then(
          (res)=>{
            setApplierInfo(res.data)
          }
      )
      .catch(error =>{
        console.log(error)
      })
      console.log(applierInfo);
      return ()=>{umounted= true}
    },[])
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          {applierInfo.map(applier =>(
              <Applier applier={applier} key={applier.name}/>
          ))}
        </Grid>
      </div>
    );

}
export default withStyles(styles)(ApplierView);
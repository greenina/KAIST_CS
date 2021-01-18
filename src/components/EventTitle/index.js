import React, {useEffect, useState} from 'react'
import './style.css'
import 'react-slideshow-image/dist/styles.css'
import axios from 'axios';
const EventTitle = (props)=>{
    // const { classes } = props;
    const [eventInfo, setEventInfo] = useState({});
    useEffect(()=>{
        let umounted = false;
      axios.get("http://192.249.18.245:8080/event/all").then(
          (res)=>{
            setEventInfo(res.data)
          }
      )
      .catch(error =>{
        console.log(error)
      })
      return ()=>{umounted= true}
    },[])
    console.log(eventInfo);
    return(
        <div id="eventtitle">
            <h1>전산학부 학생회</h1>
        </div>
    )
}

export default EventTitle;
import React, {useEffect, useState} from 'react'
import './style.css'
import 'react-slideshow-image/dist/styles.css'
import axios from 'axios';
import Events from '../Events';

const EventTitle = (props)=>{
    // const { classes } = props;
    const [eventInfo, setEventInfo] = useState({});
    useEffect(()=>{
        let umounted = false;
      axios.get("http://192.249.18.245:8081/event/all").then(
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

    var i =0 , elements = [];
    for(i = 0; i<eventInfo.length; i++) {
      var _title, _desc, _img1, _img2, _link,
        _sdate, _edate, _progress, _article= null;
      _title = eventInfo[i].title;
      _desc = eventInfo[i].description;
      _img1 = eventInfo[i].poster;
      _img2 = eventInfo[i].card;
      _sdate = eventInfo[i].s_date;
      _edate = eventInfo[i].e_date;
      _link = eventInfo[i].facebook;

      var date = new Date(), sdate = new Date(_sdate), edate = new Date(_edate);
      
      if(sdate > date) _progress = '진행 예정';
      else if(date > edate) _progress = '진행 종료';
      else _progress = '진행 중';
      _progress = _progress;
      debugger;
      
      _article = <Events
                  title = {_title}
                  desc = {_desc}
                  src = {_img1}
                  src2 = {_img2}
                  progress = {_progress}
                  facebook = {_link}
                  ></Events>
                  debugger;
     elements.push(_article);
    }
  

    return(
        <div id="eventtitle">
            <h1 className="events" >EVENTS</h1>
            {elements} 
        </div>
    )
}

export default EventTitle;
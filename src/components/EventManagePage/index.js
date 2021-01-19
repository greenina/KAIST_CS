import { Component } from 'react';
import React from 'react'
import './style.css'
import { View } from 'react-native';
import axios from 'axios';
import AdminPage from '../AdminPage';
import { Route, Link, Router } from 'react-router-dom';
import Events from '../Events';
import {useEffect, useState} from 'react'
import EventAddPage from '../EventAddPage';


const EventManagePage = (props)=>{

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
            <h1>학생회 사업</h1>
            {elements}
            <li>
              <Link to="/add_events">Add new event</Link>
            </li>
            <Route path="/add_events" component={EventAddPage}/>
        </div>
    )
}


    
export default EventManagePage;

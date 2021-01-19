import React from 'react'
import './style.css'
import { View } from 'react-native';
import { Component} from 'react';
import axios from 'axios';
import { Route, Link, Redirect } from 'react-router-dom';

class Events extends Component {

    getContent () {
        if(this.props.progress === '진행 종료') return <div className = 'prog_end'><li><a>{this.props.progress}</a></li></div> 
        else if(this.props.progress === '진행 중') return <div className = 'prog_ing'><li><a>{this.props.progress}</a></li></div> 
        else return <div className = 'prog_coming'><li><a>{this.props.progress}</a></li></div> 
    }
    render() {
                
        return(
            <div>
                <View style={{flex: 1, flexDirection: 'row'}} >
                <a target="_blank" href={this.props.facebook}>
                    <img className = 'poster'

                        src = {'http://192.249.18.245:8081/' + this.props.src}
                        onMouseOver={e => 
                            e.target.src = 'http://192.249.18.245:8081/' + this.props.src2
                        }
                        onMouseOut={e => 
                            e.target.src = 'http://192.249.18.245:8081/' + this.props.src
                        }
                        width='200'
                        height='200'>
                        </img>
                    </a>
                    <div className='details'>  
                    <View style={{flex: 1, flexDirection: 'row'}} >
                        <a className = 'title'>{this.props.title}</a> 
                        {this.getContent()}</View>
                        <div className = 'desc' ><a>{this.props.desc}</a></div> 
                    </div> 

                </View>
            </div>
        );
    }
}

export default Events;
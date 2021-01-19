import React from 'react'
import './style.css'
import { View } from 'react-native';
import { Component } from 'react';
import axios from 'axios';

class Events extends Component {

    render() {
        
        return(
            <div>
                <li><a>{this.props.title}</a></li>  
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <img
                        src = {'http://192.249.18.245:8081/' + this.props.src}
                        onMouseOver={e => 
                            e.target.src = 'http://192.249.18.245:8081/' + this.props.src2
                        }
                        onMouseOut={e => 
                            e.target.src = 'http://192.249.18.245:8081/' + this.props.src
                        }
                        width='200'
                        height='200'/>    
                    <div>
                        <li><a>{this.props.desc}</a></li>
                        <li><a>{this.props.progress}</a></li>
                    </div>           
                </View>
            </div>
        );
    }
}

export default Events;
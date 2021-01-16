import React from 'react'
import './style.css'
import { View } from 'react-native';
import { Component } from 'react';

class Events extends Component {
    render() {
        return(
            <div>
                <li><a>{this.props.title}</a></li>  
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <img
                        src={this.props.src}
                        onMouseOver={e => 
                            //console.log(e)
                            e.target.src = this.props.src2
                        }
                        onMouseOut={e => 
                            e.target.src = this.props.src
                        }
                        width='200'
                        height='200'/>    
                    <li><a>{this.props.desc}</a></li>                
                </View>
            </div>
        );
    }
}

export default Events;
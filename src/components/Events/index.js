import React, {useRef}from 'react'
import './style.css'
import { View } from 'react-native';
import { Component } from 'react';

class Events extends Component {
    render() {
        // var _src1, src2 = null;
        // src1 = this.props.src;
        // src2 = this.props.src2;
        return(
            <div>
                <li><a>{this.props.title}</a></li>  
                <View style={{flex: 1, flexDirection: 'row'}}>
                    {/* <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
                    */}
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
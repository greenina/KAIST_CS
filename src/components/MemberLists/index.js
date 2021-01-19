import React from 'react'
import { View } from 'react-native';
import { Component } from 'react';
import './style.css';

class MemberLists extends Component {
    render() {
        return(
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <img className = "profile_photo"
                        src={this.props.src}
                        width='160'
                        height='200'/>
                    <View style={{flex: 1, flexDirection: 'column'}}>
                        <div>{this.props.name}</div>
                        <div>{this.props.dep}</div> 
                    </View>          
                </View>
        );
    }
}

export default MemberLists;
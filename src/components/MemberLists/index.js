import React from 'react'
import { View } from 'react-native';
import { Component } from 'react';

class MemberLists extends Component {
    render() {
        return(
            <div>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <img
                        src={this.props.src}
                        
                        width='160'
                        height='200'/>
                    <View style={{flex: 1, flexDirection: 'column'}}>
                        <li><a>{this.props.name}</a></li>   
                        <li><a>{this.props.dep}</a></li>      
                    </View>          
                </View>
            </div>
        );
    }
}

export default MemberLists;
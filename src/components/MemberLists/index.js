import React from 'react'
import { View } from 'react-native';
import { Component } from 'react';
import './style.css';

class MemberLists extends Component {
    render() {
        return(
                <View style={{flexDirection: 'row'}}>
                    <img className = "profile_photo"
                        src={this.props.src}
                        width='160'
                        height='200'/>
                    <View style={{flexDirection: 'column'}}>
                        <div className = "st_name">{this.props.name}</div>
                        
                <View style={{flexDirection: 'row'}}>
                        <View style={{flexDirection: 'column'}}>
                            <div className = "dep_name">부서  ]</div> 
                            <div className = "tf_name">TF  ]</div> 
                        </View>       
                        <View style={{flexDirection: 'column'}}>
                            <div className = "st_department">{this.props.dep}</div> 
                            <div className = "st_tf">{this.props.tf}</div> 
                        </View>   
                        </View>
                    </View>  
                </View>
        );
    }
}

export default MemberLists;
import { Component, useState } from 'react';
import { View } from 'react-native';
import MemberLists from '../MemberLists'
import './style.css'

class MemberPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode:'visitor_members',
      selected_content_id: 1,
      members: [
        { id:1, name: '김승호', dep: '미디어팀', src: "/images/m1.jpg"},
        { id:2, name: '김시현', dep: '비서실', src: "/images/f1.jpg"},
        { id:3, name: '김주원', dep: '소통부', src: "/images/m2.jpg"},
        { id:4, name: '김지수', dep: '기획및집행부', src: "/images/f2.jpg"},
        { id:5, name: '김하운', dep: '소통부', src: "/images/m3.jpg"},
        { id:6, name: '박동훈', dep: '미디어팀', src: "/images/m4.jpg"},
        { id:7, name: '선주형', dep: '소통부', src: "/images/m5.jpg"},
        { id:8, name: '신정윤', dep: '소통부', src: "/images/m6.jpg"},
        { id:9, name: '이해준', dep: '비서실', src: "/images/m7.jpg"},
        { id:10, name: '장영재', dep: '기획및집행부', src: "/images/m8.jpg"},
        { id:11, name: '정지용', dep: '미디어팀', src: "/images/m9.jpg"},
        { id:12, name: '최설아', dep: '소통부', src: "/images/f3.jpg"},

        { id:13, name: '강지훈', dep: '소통부', src: "/images/m10.jpg"},
        { id:14, name: '김민희', dep: '미디어팀', src: "/images/f4.jpg"},
        { id:15, name: '김서현', dep: '소통부', src: "/images/f5.jpg"},
        { id:16, name: '김송현', dep: '소통부', src: "/images/f6.jpg"},
        { id:17, name: '김수원', dep: '소통부', src: "/images/f8.jpg"},
        { id:18, name: '백두진', dep: '소통부', src: "/images/m11.jpg"},
        { id:19, name: '송인화', dep: '기획및집행부', src: "/images/f7.jpg"},
        { id:20, name: '위준봉', dep: '비서실', src: "/images/m12.jpg"},
        { id:21, name: '유한호', dep: '소통부', src: "/images/m13.jpg"},
        { id:22, name: '윤영준', dep: '비서실', src: "/images/m14.jpg"},
        { id:23, name: '윤태양', dep: '미디어팀', src: "/images/f9.jpg"},
        { id:24, name: '이서희', dep: '비서실', src: "/images/f10.jpg"},
        { id:25, name: '이혜민', dep: '미디어팀', src: "/images/f11.jpg"},
        { id:26, name: '임승재', dep: '소통부', src: "/images/m15.jpg"},
        { id:27, name: '정인호', dep: '소통부', src: "/images/m16.jpg"},
        { id:28, name: '정재령', dep: '기획및집행부', src: "/images/f12.jpg"},
        { id:29, name: '최승연', dep: '소통부', src: "/images/f13.jpg"}
      ]
    }
  }
  getContent(index){
    var _name, _dep, _src, _article = null;
    if(this.state.mode === 'visitor_members') {
      _name = this.state.members[index].name;
      _dep = this.state.members[index].dep;
      _src = this.state.members[index].src;
      _article = <MemberLists
                    name={_name}
                    dep={_dep}
                    src={_src}
                  ></MemberLists>}
    return _article;
  }

  render() {
    return (
      <div className="members">
        <h2>Members Page</h2>
        <h2>18학번 집행위원회</h2>
        <View style={{textAlignVertical: "center",textAlign: "center",flex: 1, flexDirection: 'row'}}>
          {this.getContent(0)}
          {this.getContent(1)}
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          {this.getContent(2)}
          {this.getContent(3)}
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          {this.getContent(4)}
          {this.getContent(5)}
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          {this.getContent(6)}
          {this.getContent(7)}
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          {this.getContent(8)}
          {this.getContent(9)}
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          {this.getContent(10)}
          {this.getContent(11)}
        </View>
          
        <h2>19학번 집행위원회</h2>
        <View style={{flex: 1, flexDirection: 'row'}}>
          {this.getContent(12)}
          {this.getContent(13)}
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          {this.getContent(14)}
          {this.getContent(15)}
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          {this.getContent(16)}
          {this.getContent(17)}
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          {this.getContent(18)}
          {this.getContent(19)}
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          {this.getContent(20)}
          {this.getContent(21)}
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          {this.getContent(22)}
          {this.getContent(23)}
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          {this.getContent(24)}
          {this.getContent(25)}
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          {this.getContent(26)}
          {this.getContent(27)}
        </View>
          {this.getContent(28)}
      </div>
    );
  }
}
  
  export default MemberPage;
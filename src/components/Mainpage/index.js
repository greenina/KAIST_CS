import Header from '../Header'
import Intro from '../Intro'
import Events from '../Events'
import EventTitle from '../EventTitle'
import { Component } from 'react';

class Mainpage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        mode:'visitor_main',
        selected_content_id: 1,
        events: [
          { id:1,
            title: 'Snack Event',
            desc: '시험기간 지친 전산학부 학우분들을 위해 선착순 100명에게 간식을 쏩니다! 공부하는 사진과 응원멘트만 보내주시면 참여 완료! 온라인 강의와 시험 공부에 지친 몸과 마음을 간식으로 위로 받으세요.',
            src: "/images/snack_event.jpg",
            src2: "/images/snack_event_2.jpg"
          },
          { id:2,
            title: 'Career Talk Concert',
            desc: '학업, 취업, 창업 세가지 분야의 선배님들을 연사로 모셔 강연과 질의응답을 나누는 행사입니다. 참여자 전원에게 햄버거를 증정하니 버거도 먹고 진로 고민도 해결하고 가세요!',
            src: "/images/career_concert.jpg",
            src2: "/images/career_concert_2.jpg"
          },
          { id:3,
            title: 'Fall Culture Event',
            desc: '코로나 시국으로 직접 만나지 못해 아쉬운 학우분들을 위한 게임으로 친해지는 문화행사입니다. 개인전으로 진행되며 우승자에게는 소정의 상품이 지급됩니다!',
            src: "/images/culture_event.jpg",
            src2: "/images/culture_event_2.jpg"
          },
          { id:4,
            title: 'Humans of CS',
            desc: '전산학부를 구성하고 있는 다양한 사람들의 이야기를 들려드립니다! 나와 같은 고민을 공유하고 있거나 이미 겪어온 학부생, 대학원생 교수님게서 여러분들에게 전해주는, 전산학부 곳곳에 숨어있는 소중한 이야기들을 만나보세요.',
            src: "/images/humans_of_cs.jpg",
            src2: "/images/humans_of_cs_2.jpg"
          },
          { id:5,
            title: 'Department Presentation',
            desc: '어떤 학과에 진입하면 좋을지 고민이 한창인 새내기들, 전산학부에 대해서 더 알아보고 싶은 KAIST 학우 분들을 위해 전산학부 학과설명회를 준비했습니다. 추첨을 통해 치킨 기프티콘과 카카오 프렌즈 기념품도 준비되어 있다고 하니 많은 관심 부탁드립니다!',
            src: "/images/department.jpg",
            src2: "/images/department_2.jpg"
          }
        ]
      }
    }
  
    getReadContent(){
      var i=0;
        while(i < this.state.events.length) {
          var data = this.state.events[i];
          if(data.id === this.state.selected_content_id) {
            return data;
          }
          i = i+1;
        }
    }
    
    getContent(index){
      var _title, _desc, _src, _src2, _article = null;
      if(this.state.mode === 'visitor_main') {
        _title = this.state.events[index].title;
        _desc = this.state.events[index].desc;
        _src = this.state.events[index].src;
        _src2 = this.state.events[index].src2;
        _article = <Events
                      title={_title}
                      desc={_desc}
                      src={_src}
                      src2={_src2}
                    ></Events>}
      return _article;
    }
  
    render() {
      return (
        <div>
          <Header/>
          <Intro/>
          <EventTitle/>
          <div style={{height:1200}}>
            {this.getContent(0)}
            {this.getContent(1)}
            {this.getContent(2)}
            {this.getContent(3)}
            {this.getContent(4)}
          </div>
          {/* <Members/>
          <li><a href="/members" onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('visitor_members');
          }.bind(this)}>members</a></li>
          <Extra/> */}
        </div>
      );
    }
  }
  
  export default Mainpage;
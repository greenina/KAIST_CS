import { Component } from 'react';
import './style.css'
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

function ApplyPage(){
  // const [applierInfo, setApplierInfo] = useState({
  //   name:'',
  //   studenId:'',
  //   phoneNum:'',
  //   email:'',
  //   group:'',
  //   motive:''
  // })
  // const [submitInfo, setSubmitInfo]=useState({ })
  // const getInfo = e=>{
  //   const {name, value} = e.target;
  //   console.log(name, value);
  // }
  return(
    <div className="recruit">
      <h1>전산학부 학생회 지원서</h1>
      <div className="form-wrapper">
        <div>
          <input className="name-input" type="text" placeholder="이름"/>
        </div>
        <div>
        <input className="studentId-input" type="text" placeholder="학번(예시:20200000)"/>
        </div>
        <div>
        <input className="phoneNum-input" type="text" placeholder="전화번호(예시:01012345678)"/>
        </div>
        <div>
        <input className="email-input" type="text" placeholder="이메일"/>
        </div>
        <div>
        <input className="group-input" type="text" placeholder="희망 부서"/>
        </div>
        <div></div>
        <div>
        <textarea className="motive-input" placeholder="지원동기를 자유롭게 작성해주세요"></textarea>
        </div>
        <button className="submit" >제출</button>
      </div>
    </div>
  )
}
  export default ApplyPage;
import { Component } from 'react';
import ApplierView from '../ApplierView';
import './style.css';

class ApplyManagePage extends Component {
  
    render() {
      return (
        <div className="appliers">
          <h1>지원자 명단</h1>
          <ApplierView/>
        </div>
      );
    }
  }
    
export default ApplyManagePage;
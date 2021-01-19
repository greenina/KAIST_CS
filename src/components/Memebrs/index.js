import React, { Component }  from 'react'
import './style.css'

class Members extends Component{
    
    showMembers = () => {
        document.location.href = "/members"
    }
    applyFor = () => {
      document.location.href = "/apply"
    }

    render() {
      return(
          <div className="members" id="members">
              <h1>MEMBERS</h1>
                  <img className = 'show_members' src = "/images/members.png" width='230px' height='230px' onClick={this.showMembers}></img>
                  <img className = 'apply' src = "/images/apply.png" width='230px' height='230px' onClick={this.applyFor}></img>
          </div>
      )
    }
}

export default Members;
import React from 'react'
import Pic from '/nopic.jpg'

function LateralBar() {
  return (
    <aside style={{position:'absolute', height:'100vh', backgroundColor:'transparent', width:'18%'}}>
      <div>
        <ul>
          <li><img src={Pic} alt="name" style={{height:'40px',width:'40px',borderRadius:'50%'}}/><span>Default User</span></li>
          <li><img src="" alt="" /><span></span></li>
          <li><img src="" alt="" /><span></span></li>
          <li><img src="" alt="" /><span></span></li>
          <li><img src="" alt="" /><span></span></li>
          <li><img src="" alt="" /><span></span></li>
          <li><img src="" alt="" /><span></span></li>
        </ul>
      </div>
    </aside>
  )
}

export default LateralBar

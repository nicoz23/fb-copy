import React from 'react'
import Header from '../../components/Header'
import MarkPic from '/markzuckerber.jpg'

function ZuckerbergProfile() {
  return (
    <>
      <Header />
      <div>
        <div>
          <img src={MarkPic} alt="" />
          <span>Mark Zuckerberg</span>
        </div>
      </div>
    </>
  )
}

export default ZuckerbergProfile

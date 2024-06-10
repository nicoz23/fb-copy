import React from 'react'
import Header from '../../components/Header'
import { changeTitle } from '../../hooks/dynamicTitles'
import profilePic from '/nopic.jpg'

export default function Home() {
	{changeTitle('Home | Facebook')}
  return (
    <div className='bg-[#f0f2f5] h-[100vh] w-full'>
        <Header />
        <div className='w-1/3 mx-auto'>
          <section className='flex flex-col justify-center rounded-md h-fit bg-white'>
            <div className='flex flex-row border-b border-gray-400'>
              <img src={profilePic} alt="" className='h-10 rounded-full'/>
              <input type="text" placeholder='¿Qué estás pensando?'/>
            </div>
            <div className='flex flex-row'>
              <span>
                <img src="" alt="" /> Video en vivo
                </span>
              <span>
                <img src="" alt="" /> Foto/video
              </span>
              <span>
                <img src="" alt="" /> Reel
              </span>
            </div>
          </section>
        </div>
    </div>
  )
}

import Image from 'next/image'
import React, { useContext } from 'react'
import Button from '../atoms/Let\'sTalkButton/Button'
import RotatingIcon from '../atoms/RotatingIcon/RotatingIcon'
import Topbar from '../atoms/Topbar/Topbar'
import { SetMenuState } from '../pages'
const Hero = () => {
  let MenuState = useContext(SetMenuState)
  return (
    <div className='grid justify-center h-screen w-screen'>
      <div className=''>
        <Topbar />
      </div>
      <div className='relative w-full text-center text-white sm:text-xl md:text-4xl lg:text-8xl uppercase'>
        <div className='flex justify-center items-center flex-row gap-12'>
          <span className=''>WHERE</span>
          <span>
            <video src="videoone.mp4" className={`object-cover rounded-xl sm:h-10 sm:w-28 md:h-32 md:w-80 lg:h-40 lg:w-96`} autoPlay loop playsInline muted></video>
          </span>
          <span className={`font-ExtraBold text-[#E6875F]`}>CREATIVITY</span>
        </div>
        <div className='flex justify-center items-center gap-12 pt-6'>
          <div>KNOWS NO BOUNDS</div>
          <Button
            buttonClasses={`relative max-w-fit sm:py-3 sm:px-6 md:py-6 md:px-12 rounded-full border-2 border-white hover:bg-[#E5875F] hover:border-black text-white hover:text-black`}
            textClasses=''
            defaultImage='arrow.svg'
            hoverdImage='arrowtwo.svg'
          />
        </div>
        <div>
          <RotatingIcon />
        </div>
      </div>
      {/* <img src="menu-icon.svg" alt="" className={`${css.menu} cursor-pointer`} onClick={() => MenuState.setMenuState(true)} /> */}
    </div >
  )
}

export default Hero

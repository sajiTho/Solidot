import React, { useContext } from 'react'
import Button from '../atoms/Let\'sTalkButton/Button'
import RotatingIcon from '../atoms/RotatingIcon/RotatingIcon'
import Topbar from '../atoms/Topbar/Topbar'
const Hero = () => {
  return (
    <div className='grid grid-flow-row justify-center h-auto w-screen gap-12'>
      <div>
        <Topbar />
      </div>
      <div className='grid grid-flow-row gap-4 sm:gap-8 md:px-0 text-white text-2xl sm:text-3xl md:text-5xl lg:text-7xl uppercase'>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-0 justify-center justify-items-center items-center'>
          <div>WHERE</div>
          <div className='justify-self-start'>
            <video src="videoone.mp4" className={`object-cover rounded-xl h-20 w-52 sm:w-60 sm:h-24 md:w-80 md:h-32`} autoPlay loop playsInline muted></video>
          </div>
          <div className={`font-ExtraBold text-3xl  md:text-5xl lg:text-7xl text-[#E6875F]`}>CREATIVITY</div>
        </div>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-0 justify-between justify-items-center items-center'>
          <div className='sm:col-span-2 justify-self-end'>KNOWS NO BOUNDS</div>
          <Button
            buttonClasses={`max-w-fit py-4 px-8  sm:py-6 sm:px-12 rounded-full border-2 border-white hover:bg-[#E5875F] hover:border-black text-white hover:text-black`}
            textClasses=''
            defaultImage='arrow.svg'
            hoverdImage='arrowtwo.svg'
          />
        </div>
        <div className='hidden md:block lg:block justify-self-start'>
          <RotatingIcon />
        </div>
      </div>
    </div >
  )
}

export default Hero

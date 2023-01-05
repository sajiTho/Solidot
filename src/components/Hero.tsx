import Image from 'next/image'
import React, { useContext } from 'react'
import Button from '../atoms/Let\'sTalkButton/Button'
import Topbar from '../atoms/Topbar/Topbar'
import { SetMenuState } from '../pages'
const Hero = () => {
  let MenuState = useContext(SetMenuState)
  return (
    <div className='grid grid-flow-row-dense grid-rows-3 justify-center content-between min-h-screen min-w-screen'>
      <div className=''>
        <Topbar />
      </div>
      <div className='relative w-full text-center text-white sm:text-xl md:text-4xl lg:text-8xl uppercase'>
        <div className='flex justify-center items-center flex-row gap-12'>
          <span className=''>WHERE</span>
          <span>
            <video src="videoone.mp4" className={`object-cover rounded-xl h-32 w-80`} autoPlay loop playsInline muted></video>
          </span>
          <span className={`font-bold text-[#E6875F]`}>CREATIVITY</span>
        </div>
        <div className=' flex flex-row justify-center gap-12 pt-6'>
          <span>KNOWS NO BOUNDS</span>
          <span>
            <Button
              buttonClasses={`relative max-w-fit py-6 px-12 rounded-full border-2 border-white hover:bg-[#E5875F] hover:border-black text-white hover:text-black`}
              textClasses=''
              defaultImage='arrow.svg'
              hoverdImage='arrowtwo.svg'
            />
          </span>
        </div>
      </div>
      <div className='flex flex-row'>
        <Image src="/scroll-to-explore.svg" alt='Rotating Icon' height={150} width={150} className='animate-custom_spin' />
      </div>
      {/* <img src="menu-icon.svg" alt="" className={`${css.menu} cursor-pointer`} onClick={() => MenuState.setMenuState(true)} /> */}



    </div>
  )
}

export default Hero

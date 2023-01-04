import React, { useContext, useEffect, useState } from 'react'
import Button from '../atoms/Let\'sTalkButton/Button'
import { SetMenuState } from '../pages'
import css from "../styles/Home.module.css"
// import * as LottiePlayer from "@lottiefiles/lottie-player";
const Hero = () => {
  let MenuState = useContext(SetMenuState)

  const [isHovering, setIsHovered] = useState(false);

  useEffect(() =>
    console.log(isHovering),
    [isHovering]
  )
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <div className='container'>
      <div className={css.logo}>
        <lottie-player
          autoplay
         
          loop
          mode="normal"
          src="/Solidot.json"
          style={{ width: "150px", height: "100px" }}
        >
        </lottie-player>
      </div>
      {/* <img className={css.logos} src="dc4.png" alt="logo" /> */}
      {/* <img src="menu-icon.svg" alt="" className={`${css.menu} cursor-pointer`} onClick={() => MenuState.setMenuState(!MenuState.MenuState)} /> */}
      <div className={css.tittle}>
        <span className={css.one}>WHERE</span>
        <div className={` ${css.maskgroup}`}>
          <video src="videoone.mp4" className={` ${css.videos}`} autoPlay loop playsInline muted></video>
        </div>
        <span className={css.two}>CREATIVITY</span>
        <span className={css.three}>KNOWS NO BOUNDS</span>
        {/* <button onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className={`${} flex justify-center`}>
          <span className='flex-initial text-2xl text-white my-auto pr-2  '>Let's Talk</span>
          <img src={isHovering ? 'arrowtwo.svg' : 'arrow.svg'} className={'flex-end h-4 my-auto'} />
        </button> */}

        <Button
          buttonClasses={`${css.btn} relative rounded-full border-2 border-white hover:bg-[#E5875F] hover:border-black text-white hover:text-black`}
          textClasses=''
          defaultImage='arrow.svg'
          hoverdImage='arrowtwo.svg'
        />
        <img src="scroll-to-explore.svg" alt="" className={`sm:hidden ${css.explore}`} />
      </div>



    </div>
  )
}

export default Hero

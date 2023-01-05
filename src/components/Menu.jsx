import React, { useContext, useEffect } from 'react'
import { SetMenuState } from '../pages'
import css from '../styles/Home.module.css'

const Menu = () => {
  let MenuState = useContext(SetMenuState)
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <div className={css.topslide}>
      <lottie-player
        autoplay
        className={` ${css.logo}`}
        loop
        mode="normal"
        src="/Solidot.json"
        style={{ width: "150px", height: "100px", }}
      >
      </lottie-player>
      <img src="menuframe.svg" alt="" className={`${css.menuframe} cursor-pointer`} onClick={() => MenuState.setMenuState(false)} />
      <div className={css.firstdivs}>
        <span className={css.leftheading}>SOMTHING IN MIND?</span>
        <span className={css.leftheadingone}>Wehere@solidot.com</span>
        <span className={css.leftheadingtwo}>+123 583 4848</span>

        <div className={css.baa}>
          <img src="fb.svg" alt="" className={css.fb} />
          <img src="db.svg" alt="" className={css.fb} />
          <img src="be.svg" alt="" className={css.fb} />
          <img src="tw.svg" alt="" className={css.fb} />
        </div>

        <div className={css.divthree}>
          <span className={css.spanone}>About Us</span>
          <span className={css.spanone}>Services</span>
          <span className={css.spanone}>Case Studies</span>
          <span className={css.spanone}>Archived</span>
          <span className={css.spanone}>Chat</span>
        </div>

      </div>
    </div>
  )
}

export default Menu

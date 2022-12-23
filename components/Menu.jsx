import React,{useContext} from 'react'
import { SetMenuState } from '../pages'
import css from '../styles/Home.module.css'

const Menu = () => {
    let MenuState = useContext(SetMenuState)
  return (
    <div className={css.topslide}>
        <img src="logo.svg" alt="" className={css.logo} />
        <img src="framemenu.svg" alt="" className={css.framemenu} />
        <img src="menuframe.svg" alt="" className={css.menuframe} onClick={()=>MenuState.setMenuState(false)}/>
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

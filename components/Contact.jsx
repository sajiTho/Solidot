import React from 'react'
import css from '../styles/Home.module.css'

const Contact = () => {
  return (
    <div className={css.harry}>
      <div className={css.branding}>
        <span className={css.defination}>What We Do</span>

        <div className={css.firsttpart}>
        <span className={css.brands}>Branding</span>
          <span className={css.social}>Brand Strategy</span>
          <span className={css.social}>Social Media</span>
          <span className={css.social}>Marketing Assets</span>
          <span className={css.social}>Presentations</span>
          <span className={css.social}>Pitch Deck</span>
        </div>

        <div className={css.secondpart}>
        <span className={css.brands}>Illustrations</span>
          <span className={css.social}>Story Board</span>
          <span className={css.social}>Hand Sketch</span>
          <span className={css.social}>NFT Arts</span>
          <span className={css.social}>Digital Art</span>
          
        </div>
        <div className={css.thirdpart}>
        <span className={css.brands}>UX UI Design</span>
          <span className={css.social}>User Interface</span>
          <span className={css.social}>User Experience</span>
          <span className={css.social}>Design System</span>
          <span className={css.social}>Website and Mobile Apps</span>
          <span className={css.social}>IOS and Android</span>
        </div>
        <div className={css.fourthpart}>
        <span className={css.brands}>Development</span>
          <span className={css.social}>Frontend Development</span>
          <span className={css.social}>Backend Development</span>
          <span className={css.social}>Android (Kotlin, Flutter)</span>
          <span className={css.social}>Post Delivery Support</span>
        
        </div>
      </div>
      <div className={css.imagecomponent}>
        <img src="group-23.svg" alt="" className={css.group23} />
      </div>
      <div className={css.trustedby}>
        <img src="TRUSTEDBY.svg" alt="" />
        <div className={css.content}>

        <img src="TheDegens.svg" alt="" className={css.gorilla} />
        <img src="Gorillainu.svg" alt="" className={css.gorilla} />
        <img src="Cryptor.svg" alt="" className={css.gorilla} />
        <img src="ChadVerse.svg" alt="" className={css.gorilla} />
        </div>
      </div>

      <div className={css.commentsection}>
        <span className={css.numberone}>Asking questions are free</span>
       <span className={css.numbertwo}>What is this name “solidot”?
       <img src="addbuton.svg" alt="" className={css.addbutton} />
       </span>
       <span className={css.numbertwo}>What is this name “solidot”?
       <img src="addbuton.svg" alt="" className={css.addbutton} />
       </span>
       <span className={css.numbertwo}>What is this name “solidot”?
       <img src="addbuton.svg" alt="" className={css.addbutton} />
       </span>
       <span className={css.numbertwo}>What is this name “solidot”?
       <img src="addbuton.svg" alt="" className={css.addbutton} />
       </span>
       <span className={css.numbertwo}>What is this name “solidot”?
       <img src="addbuton.svg" alt="" className={css.addbutton} />
       </span>
      </div>


    </div>

  )
}

export default Contact

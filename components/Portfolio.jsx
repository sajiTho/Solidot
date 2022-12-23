import React from 'react'
import css from '../styles/Home.module.css'

const portfolio = () => {
  return (
    <div className={css.designing}>
      <div>
        <marquee width="100%" direction="left" height="130px" scrollamount="30" hspace="0%">
          <span className={css.textfour}>FEATURED CASE STUDIES </span>
        </marquee>
        <marquee width="100%" direction="right" height="130px" scrollamount="30">
          <span className={css.textfive}>RECENT CASE STUDIES</span>
        </marquee>
      </div>
      <div className={css.divimages}>
        <div className={css.firstone}>
          <img src="imageone.svg" alt="1" className={css.imageone} />
          <span className={css.nameone}>Dayhour</span>
          <span className={css.nameonedesc}>Web Portal</span>
        </div>
        <div className={css.secondone}>
          <img src="imagetwo.svg" alt="2" className={css.imagetwo} />
          <span className={css.nameone}>E-Kapray</span>
          <span className={css.nameonedesc}>Mobile App</span>
        </div>
        <div className={css.thirdone}>
          <img src="imagethree.svg" alt="3" className={css.imagethree} />
          <span className={css.nameone}>Safe Pal</span>
          <span className={css.nameonedesc}>Blockchain Wallet</span>

        </div>

        <div className={css.fourthone}>
          <img src="imagefour.svg" alt="4" className={css.imagefour} />
          <span className={css.nameone}>Audiojungle</span>
          <span className={css.nameonedesc}>Blockchain Wallet</span>

        </div>
      </div>
      <div className={css.button}>
        <div className={css.circlebutton}>
          
          <span className={css.moree}>VIEW MORE</span>
        </div>
        {/* <img src="" alt="button" className={css.circlebutton} /> */}
      </div>
    </div>
  )
}

export default portfolio

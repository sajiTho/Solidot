import Image from 'next/image'
import React from 'react'
import css from '../styles/Home.module.css'

const portfolio = () => {
  return (
    <div name='portfolio' className={css.designing}>
      <div>
        <marquee width="100%" direction="left" height="140px" scrollamount="10" hspace="0%" Behavior='Alternate'>
          <span className={css.textfour}>FEATURED CASE STUDIES FEATURED CASE STUDIES </span>
        </marquee>
        <marquee width="100%" direction="left" height="140px" scrollamount="10" Behavior='Alternate'>
          <span className={css.textfive}>RECENT CASE STUDIES RECENT CASE STUDIES</span>
        </marquee>
      </div>
      <div className={css.divimages}>

        <div className={`${css.firstone}`}>
          <span className={`hover:text-[#E6875F] ${css.nameone}`}>Dayhour</span>
          <span className={css.nameonedesc}>Web Portal</span>
          <div className={css.innerdiv}>
            <div className={css.imgdiv}></div>
          </div>
        </div>

        <div className={css.secondone}>
          <span className={`hover:text-[#E6875F] ${css.nameone}`}>E-Kapray</span>
          <span className={css.nameonedesc}>Mobile App</span>
          <div className={css.innerdivss}>
            <div className={css.imgdivss}></div>
          </div>
        </div>

        <div className={css.thirdone}>
          <span className={`hover:text-[#E6875F] ${css.nameone}`}>Safe pal</span>
          <span className={css.nameonedesc}>Blockchain Wallet</span>
          <div className={css.innerdivsss}>
            <div className={css.imgdivsss}></div>
          </div>
        </div>
        <div className={css.fourthone}>
          <span className={`hover:text-[#E6875F] ${css.nameone}`}>Audiojungle</span>
          <span className={css.nameonedesc}>Blockchain Wallet</span>
          <div className={css.innerdivs}>
            <div className={css.imgdivs}></div>
          </div>
        </div>
      </div>
      <div className={css.button}>
        <div className={css.circlebutton}>

          <span className={css.moree}>VIEW MORE</span>
        </div>
      </div>
    </div>
  )
}

export default portfolio

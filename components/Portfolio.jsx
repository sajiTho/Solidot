import Image from 'next/image'
import React from 'react'
import css from '../styles/Home.module.css'

const portfolio = () => {
  return (
    <div name='portfolio' className={css.designing}>
      <div>
        <marquee width="100%" direction="left" height="140px" scrollamount="10" hspace="0%"  Behavior ='Alternate'>
          <span className={css.textfour}>FEATURED CASE STUDIES FEATURED CASE STUDIES </span>
        </marquee>
        <marquee width="100%" direction="left" height="140px" scrollamount="10"   Behavior ='Alternate'>
          <span className={css.textfive}>RECENT CASE STUDIES RECENT CASE STUDIES</span>
          {/* <img src='empty.svg' /> */}
        </marquee>
      </div>
      <div className={css.divimages}>

        <div className={css.firstone}>
          <img src="imageone.svg" alt="1" className={`transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300`} />
          <span className={`hover:text-[#E6875F] ${css.nameone}`}>Dayhour</span>
          <span className={css.nameonedesc}>Web Portal</span>
        </div>
        
        <div className={css.secondone}>
          <img src="imagetwo.svg" alt="2" className={`transition ease-in-out delay-150 hover:-translate-y-1 hover:rotate-[-13deg] duration-300`} />
          <span className={`hover:text-[#E6875F] ${css.nameone}`}>E-Kapray</span>
          <span className={css.nameonedesc}>Mobile App</span>
        </div>
        <div className={css.thirdone}>
          <img src="imagethree.svg" alt="3" className={`transition ease-in-out delay-150 hover:-translate-y-1 hover:rotate-[-13deg] duration-300`}  />
          <span className={`hover:text-[#E6875F] ${css.nameone}`}>Safe Pal</span>
          <span className={css.nameonedesc}>Blockchain Wallet</span>

        </div>

        <div className={css.fourthone}>
          <img src="imagefour.svg" alt="4" className={`transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300`} />
          <span className={`hover:text-[#E6875F]${css.nameone}`}>Audiojungle</span>
          <span className={css.nameonedesc}>Blockchain Wallet</span>

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

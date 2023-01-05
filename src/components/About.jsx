import React from 'react'
import css from '../styles/Home.module.css'

const about = () => {
  return (
    <div name='about' className={css.solidot}>
      <div className={css.cutpiece}></div>
        <div className={css.seconddiv}>
            <h1 className={css.headings}>WHY SOLIDOT?</h1>
            <span className={css.description}>Solidot has the unusual talent for simplifying and elevating complicated concepts into beautiful designs!</span>
            <span className={css.desc}>Designing has been our playground. We are a studio that designs and builds loved-based adventures.</span>
            <span className={css.descone}>Dribble</span>
            <span className={css.desctwo}>Behance</span>
            <span className={css.descthree}>Instagram</span>
        </div>

    </div>
  )
}

export default about

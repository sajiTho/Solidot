import React, { useState } from 'react'
import Button from '../atoms/Let\'sTalkButton/Button'
import css from '../styles/Home.module.css'


const Footer = () => {

    return (
        <div className={css.footer}>
            <div className={css.maincomponent}>
                <div className={css.secondcomponent}>
                    <span className={css.footerheadingone}>
                        Your search for a design partner ends here.
                    </span>
                    <span className={css.footerheadingtwo}>
                        SO, HOW CAN WE HELP?
                    </span>

                    <Button
                        buttonClasses={`${css.bton} absolute border-black hover:bg-black text-black hover:text-white`}
                        textClasses=''
                        defaultImage='arrowtwo.svg'
                        hoverdImage='arrow.svg'
                    />
                </div>
                <div className={css.thirdcomponent}>
                    <img src="componentI.svg" alt="" className={css.components} />
                    <img src="componentII.svg" alt="" className={css.componentII} />
                    <img src="componentIII.svg" alt="" className={css.componentIII} />
                    <img src="componentIV.svg" alt="" className={css.componentIIIV} />
                </div>
            </div>
        </div>
    )
}

export default Footer

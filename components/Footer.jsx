import React, { useState } from 'react'
import Button from '../atoms/Let\'sTalkButton/Button'
import css from '../styles/Home.module.css'


const Footer = () => {

    let socialImages = [{
        src: 'componentI.svg',
        className: css.components
    }, {
        src: 'componentII.svg',
        className: css.componentII
    }, {
        src: 'componentIII.svg',
        className: css.componentIII
    }, {
        src: 'componentIV.svg',
        className: css.componentIIIV
    }]
    return (
        <div name='footer' className={css.footer}>
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
                    {socialImages.map((social, i) =>
                        <img key={i} src={social.src} alt="Social Icon" className={`${social.className} rounded-lg hover:bg-[#ff976b]`} />)}
                </div>
            </div>
        </div>
    )
}

export default Footer

import Image from 'next/image';
import React, { Fragment, useState } from 'react'
import Brands from '../atoms/Brands/Brands'
import QuestionAnswers from '../atoms/FAQ\'s/QuestionAnswers';
import css from '../styles/Home.module.css'
import AccordionType from '../atoms/Accordion/AccordionType';




import {
  Accordion,
  AccordionHeader,
  AccordionBody,

} from "@material-tailwind/react";
let BrandData = [{
  defaultImage: 'TheDegens.svg',
  hoverdImage: 'one.svg'
}, {
  defaultImage: 'Gorillainu.svg',
  hoverdImage: 'two.svg'
}, {
  defaultImage: 'Cryptor.svg',
  hoverdImage: 'three.svg'
}, {
  defaultImage: 'ChadVerse.svg',
  hoverdImage: 'Four.svg'
}, {
  defaultImage: 'Group2520.svg',
  hoverdImage: 'Group2520.svg'
}, {
  defaultImage: 'witness.png',
  hoverdImage: 'witness.png'
},]
export default function Contact() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value)
  }
  return (
    <div name='contact' className={css.harry}>
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
          {
            BrandData.map((data, i) =>
              <Brands
                key={i}
                BrandClasses={` ${css.gorilla}`}
                defaultImage={data.defaultImage}
                hoverdImage={data.hoverdImage}
              />
            )
          }
        </div>
      </div>
      <div className={css.Fragments}>
        <Fragment>
          <div className={`my-10 ${css.numberone}`}>
            Asking questions are free
          </div>
          <Accordion open={open === 1}>
            <AccordionHeader className={css.accordion__question} onClick={() => handleOpen(1)}>
              What is this name “solidot”?
            </AccordionHeader>
            <AccordionBody className={css.accordion__answer}>
              It’s bit off right? well, solidot stands for it unity. The studio is based on two words; Solid” and “Dots” where solid represents an ellipse (jargon to impress you) and dots are the small atoms 
              that connects together to make it an ellipse (okay, circle)
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 2}>
            <AccordionHeader className={css.accordion__question} onClick={() => handleOpen(2)}>
              How much will it costs me?
            </AccordionHeader>
            <AccordionBody className={css.accordion__answer}>
              FREE FREE FREE

              We’re joking. But yes, our quality work and immersive experience designs is in your pocket. Projects and clients are different in terms of scope and sizing and therefore the investment packages are customized to the clients needs, as there is no one-size-fits-all solution to pricing. Contact us (that’s also FREE)
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 3}>
            <AccordionHeader className={css.accordion__question} onClick={() => handleOpen(3)}>
              Can I get the design next week?
            </AccordionHeader>
            <AccordionBody className={css.accordion__answer}>
              GOOD design, takes time. The designs we all love and see out there were the results of tons of research, craft, customized strategy, thousands of sketches and iterations. The quickest time frame to get your business equipped with the basics is estimated a week but depends on your requirements. 
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 4}>
            <AccordionHeader className={css.accordion__question} onClick={() => handleOpen(4)}>
              What if I need help after my project ends? 
            </AccordionHeader>
            <AccordionBody className={css.accordion__answer}>
            There are 2 ways we can continue to work together
             Retainer We can arrange a certain number of hours per week or month, or we can create a task-based schedule, depending on your exact needs. Hourly If your brand support needs aren’t systematic yet, We’re happy to work on an hourly basis 
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 5}>
            <AccordionHeader className={css.accordion__question} onClick={() => handleOpen(5)}>
              Once we’re in, what’s the next step? 
            </AccordionHeader>
            <AccordionBody className={css.accordion__answer}>
            YOU, Netflix and chill

            SOLIDOT, After the agreement is done, you can send your detailed requirements and we’ll send a detailed project timeline and will
            dive right into the process with the Brand Discovery Questionnaire.This is fundamental for our work as it has customized questions
            that really narrow down your brand/business vision, details and goals. 
            </AccordionBody>
          </Accordion>
        </Fragment>
      </div>
    </div>
  )
}
import { Fragment, FC, useState } from 'react'
import { ForFragmentItems, ForQuestionAnswers } from './QuestionAnswersTypes'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

const FragmentItems: ForFragmentItems[] = [
    {
        AccordionHeader: 'What is this name “solidot”?',
        AccordionBody: "It’s bit off right? well, solidot stands for it unity. The studio is based on two words; Solid” and “Dots” where solid represents an ellipse (jargon to impress you) and dots are the small atoms that connects together to make it an ellipse (okay, circle)"
    }, {
        AccordionHeader: 'How much will it costs me?',
        AccordionBody: " FREE FREE FREE We’re joking.But yes, our quality work and immersive experience designs is in your pocket.Projects and clients are different in terms of scope and sizing and therefore the investment packages are customized to the clients needs, as there is no one- size - fits - all solution to pricing.Contact us(that’s also FREE)"
    }, {
        AccordionHeader: 'Can I get the design next week?',
        AccordionBody: "GOOD design, takes time. The designs we all love and see out there were the results of tons of research, craft, customized strategy, thousands of sketches and iterations. The quickest time frame to get your business equipped with the basics is estimated a week but depends on your requirements."
    }, {
        AccordionHeader: 'What if I need help after my project ends?',
        AccordionBody: "There are 2 ways we can continue to work together Retainer We can arrange a certain number of hours per week or month, or we can create a task - based schedule, depending on your exact needs.Hourly If your brand support needs aren’t systematic yet, We’re happy to work on an hourly basis"
    }, {
        AccordionHeader: 'Once we’re in, what’s the next step?',
        AccordionBody: "YOU, Netflix and chill SOLIDOT, After the agreement is done, you can send your detailed requirements and we’ll send a detailed project timeline and will dive right into the process with the Brand Discovery Questionnaire.This is fundamental for our work as it has customized questions that really narrow down your brand / business vision, details and goals."
    }
]


const QuestionAnswers: FC<ForQuestionAnswers> = ({ }) => {
    const [open, setOpen] = useState(1);
    const handleOpen = (value: React.SetStateAction<number>) => {
        setOpen(open === value ? 0 : value)
    }
    return (


        <div className={`text-white mx-auto w-8/12 pt-28`}>
            <div className={`my-10 text-6xl font-bold`}>
                Asking questions are free
            </div>
            <Fragment>
                {
                    FragmentItems.map((item, i) =>
                        <Accordion key={i} open={open === i + 1}>
                            <AccordionHeader className={`text-3xl py-10 text-white`} onClick={() => handleOpen(i + 1)}>
                                {item.AccordionHeader}
                            </AccordionHeader>
                            <AccordionBody className={`opacity-10 text-md text-[#858484]`}>
                                {item.AccordionBody}
                            </AccordionBody>
                        </Accordion>
                    )
                }
            </Fragment>
        </div>
    )
}

export default QuestionAnswers

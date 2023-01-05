import React, { FC, useState } from 'react'
import { ForQuestionAnswers } from './QuestionAnswersTypes'
import css from './ForQustionAnswersStyles.module.css'
import Image from 'next/image'
const QuestionAnswers: FC<ForQuestionAnswers> = ({ question, answer, }) => {
    let [isExpanded, setIsExpended] = useState<Boolean>(false)
    return (

       
        <div className={css.accordion__question}>{question}
            <img style={{position: 'relative',display:'inline', left:'100px'}} onClick={() => setIsExpended(current => !current)} src="addbuton.svg" alt="" className={`relative inline ${css.addbutton}`} />
            {
                isExpanded &&
                <div className={css.accordion__answer}>{answer}</div>
            }
            <img src='Divider.svg' className={css.Divider}/>

        </div>
    )
}

export default QuestionAnswers

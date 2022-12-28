import React, { FC, useState } from 'react'
import { ForQuestionAnswers } from './QuestionAnswersTypes'
import css from './ForQustionAnswersStyles.module.css'
const QuestionAnswers: FC<ForQuestionAnswers> = ({ question, answer }) => {
    let [isExpanded, setIsExpended] = useState<Boolean>(false)
    return (
        <div className={css.accordion__question}>{question}
            <img  onClick={() => setIsExpended(current => !current)} src="addbuton.svg" alt="" className={css.addbutton} />
            {
                isExpanded &&
                <span className={css.accordion__answer}>{answer}</span>
            }

        </div>
    )
}

export default QuestionAnswers

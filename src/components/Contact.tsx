import Brands from '../atoms/Brands/Brands'
import WhatWeDo from '../atoms/WhatWeDo/WhatWeDo';
import Showcase from '../atoms/Showcase/Showcase';
import QuestionAnswers from '../atoms/FAQ\'s/QuestionAnswers';
export default function Contact() {

  return (
    <div id='contact'>
      <WhatWeDo />
      <Showcase />
      <Brands />
      <QuestionAnswers />
    </div >
  )
}
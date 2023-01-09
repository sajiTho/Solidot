import { FC } from 'react'
import { ForWhatWeDoItems } from './WhatWeDoTypes'
const WhatWeDoItems: ForWhatWeDoItems[] = [
    {
        title: 'Branding',
        children: ['Brand Strategy', 'Social Media', 'Marketing Assets', 'Presentations', 'Pitch Deck']
    }, {
        title: 'Illustrations',
        children: ['Story Board', 'Hand Sketch', 'NFT Arts', 'Presentations', 'Digital Art']
    }, {
        title: 'UX UI Design',
        children: ['User Interface', 'Marketing Assets', 'Website and Mobile Apps', 'User Experience', 'IOS and Android']
    }, {
        title: 'Development',
        children: ['Frontend Development', 'Backend Development', 'Android (Kotlin, Flutter)', 'Post Delivery Support']
    },
]
const WhatWeDo: FC = () => {
    return (
        <div className=' relative justify-center items-center row-auto grid grid-rows-2 '>
            <div className="font-bold text-5xl text-white ">
                What We Do
            </div>
            <div className='grid grid-flow-col col-auto gap-20'>
                {WhatWeDoItems.map((item, i) =>
                    <div key={i} className='font-bold text-4xl text-white'>
                        {item.title}
                        <div className='font-thin text-base leading-10'>
                            {item.children.map((child, j) =>
                                <div key={j}>{child}</div>)}
                        </div >
                    </div>)}
            </div>
        </div>
    )
}

export default WhatWeDo

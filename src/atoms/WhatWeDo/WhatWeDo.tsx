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
        <div className='justify-center items-center pb-5 grid grid-rows-auto text-white'>
            <div className="font-bold text-2xl lg:text-5xl sm:text-xl mx-auto py-10">
                What We Do
            </div>
            <div className= 'grid grid-cols-2 text-center md:text-left md:grid-cols-4 gap-20 mx-auto  '>
                {WhatWeDoItems.map((item, i) =>
                    <div key={i} className=' text-lg font-bold lg:text-4xl sm:text-lg '>
                        {item.title}
                        <div className='lg:font-thin lg:text-lg text-xs leading-10 sm:text-xs'>
                            {item.children.map((child, j) =>
                                <div key={j}>{child}</div>)}
                        </div >
                    </div>)}
            </div>
        </div>
    )
}

export default WhatWeDo

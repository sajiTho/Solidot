import Image from 'next/image';
import { FC, useState } from 'react'
import { ForButton } from './ButtonTypes'

const Button: FC<ForButton> = ({ buttonClasses, textClasses, defaultImage, hoverdImage }) => {
    const [isHovering, setIsHovered] = useState(false);
    return (
        <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className={`flex justify-center rounded-full cursor-pointer border-2 hover:border-black ${buttonClasses}`}>
            <span className={`flex-initial text-2xl my-auto pr-2 ${textClasses}`}>Let's Talk</span>
            <Image
                src={isHovering ? `/${hoverdImage}` : `/${defaultImage}`}
                className={'flex-end h-4 my-auto'}
                width={30}
                height={10}
                alt='Arrow Icon'
            />
        </div>
    )
}

export default Button

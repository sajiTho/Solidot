import Image from 'next/image';
import { FC, useState } from 'react'
import { ForButton } from './ButtonTypes'
const Button: FC<ForButton> = ({ buttonClasses, textClasses, defaultImage, hoverdImage }) => {
    const [isHovering, setIsHovered] = useState(false);
    return (
        <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className={`flex justify-center lg:gap-3 items-center rounded-full cursor-pointer border-2 lg:h-20 lg:w-72 sm:px-8 py-4 sm:m-2  sm:gap-3 hover:border-black ${buttonClasses}`}>
            <span className={`lg:flex-initial lg:text-2xl  sm:text-2xl ${textClasses}`}>Let's Talk</span>
            <span className={'flex-end'}>
                <Image
                    
                    src={isHovering ? `/${hoverdImage}` : `/${defaultImage}`}
                    width={30}
                    height={10}
                    alt='Arrow Icon'
                />
            </span>
        </div>)
}
export default Button
import Image from 'next/image';
import { FC, useState } from 'react'
import { ForButton } from './ButtonTypes'
const Button: FC<ForButton> = ({ buttonClasses, textClasses, defaultImage, hoverdImage }) => {
    const [isHovering, setIsHovered] = useState(false);
    return (
        <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className={`flex justify-center gap-4 items-center rounded-full cursor-pointer border-2 hover:border-black ${buttonClasses}`}>
            <span className={`flex-initial text-2xl ${textClasses}`}>Let's Talk</span>
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
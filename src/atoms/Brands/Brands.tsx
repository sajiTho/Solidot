import Image from 'next/image';
import { FC, useState } from 'react'
import { ForBrands } from './BrandTypes'

const Brands: FC<ForBrands> = ({ brandClasses, textClasses, defaultImage, hoverdImage }) => {
    const [isHovering, setIsHovered] = useState(false);
    return (
        <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className={` ${brandClasses}`}>

            <Image
            //  onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className={` ${brandClasses}`}
                src={isHovering ? `/${hoverdImage}` : `/${defaultImage}`}
                // className={'flex-end h-4 my-auto'}
                width={240}
                height={144}
                alt='Image'
            />
      </div>
    )
}

export default Brands
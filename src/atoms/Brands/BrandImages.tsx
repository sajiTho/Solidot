import Image from 'next/image';
import { FC, useState } from 'react'
import { ForBrandImages } from './BrandTypes';


const BrandImages: FC<ForBrandImages> = ({ data }) => {
    const [isHovering, setIsHovered] = useState(false);
    return (
        <>
            <Image
                onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
                src={isHovering ? `/${data.hoverdImage}` : `/${data.defaultImage}`}
                width={240}
                height={144}
                alt='Image'
            />
        </>
    )
}

export default BrandImages

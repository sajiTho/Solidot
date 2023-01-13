import Image from "next/image"
import { FC } from 'react'
const RotatingIcon: FC = () => {
    return (
        <div className='p-4 max-w-fit bg-center bg-no-repeat lg:bg-[length:50px_60px] sm:bg-[lenght:25px_35px] bg-[url("/arrowtop.svg")]'>
            <Image src="/scroll-to-explore.png" alt='Rotating Icon' height={150} width={150} className='animate-custom_spin lg:h-36 lg:w-36 lg:content-center sm:h-20 sm:w-20' />
        </div>
    )
}

export default RotatingIcon

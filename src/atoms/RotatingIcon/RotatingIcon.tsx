import Image from "next/image"
import { FC } from 'react'
const RotatingIcon: FC = () => {
    return (
        <div className='p-4 max-w-fit bg-center bg-no-repeat bg-[length:50px_60px] bg-[url("/arrowtop.svg")]'>
            <Image src="/scroll-to-explore.svg" alt='Rotating Icon' height={150} width={150} className='animate-custom_spin' />
        </div>
    )
}

export default RotatingIcon

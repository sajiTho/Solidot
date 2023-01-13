import Image from "next/image"
import { FC } from 'react'
import Scroll from "../Icons/scroll"
const RotatingIcon: FC = () => {
    return (
        <div className='p-4 max-w-fit bg-center bg-no-repeat lg:bg-[length:50px_60px] sm:bg-[lenght:25px_35px] bg-[url("/arrowtop.svg")]'>
           <div
           className='animate-custom_spin lg:h-36 lg:w-36 lg:content-center sm:h-20 sm:w-20'
           >

           <Scroll  height={150} width={150} />
           </div>
        </div>
    )
}

export default RotatingIcon

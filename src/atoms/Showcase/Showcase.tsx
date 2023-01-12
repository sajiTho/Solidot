import { FC } from 'react'



const Showcase: FC = () => {
    return (
        <div className='grid grid-flow-row lg:text-6xl gap-10 lg:pt-28 sm:text-xl sm:gap-5 sm:pt-14'>
            {/* <marquee behavior="sAlternate" direction="left" overflow="hidden"> */}
                <div className={`grid grid-flow-col justify-around items-center text-white border-y-2 border-white/[0.2] -rotate-3 lg:py-12  sm:p-2`}>
                    <div>We are your magic wand </div>
                    <div className={`bg-[url('/diceWhite.svg')] bg-cover lg:w-[70px] lg:h-[70px] sm:h-[30px] sm:w-[30px]`}></div>
                    <div>Wonders happen </div>
                </div>
            {/* </marquee> */}

            {/* <marquee behavior="Alternate" direction="right"> */}
                <div className='grid grid-cols-1 w-full bg-[#1e1e1e] border-y-2 border-white/[0.2] lg:py-12  sm:py-2 rotate-3'>
                    <div className='bg-[url("/showcaseImages.svg")] bg-contain w-screen lg:h-[100px] sm:h-8'></div>
                </div>
            {/* </marquee> */}

            {/* <marquee behavior="Alternate" direction="left"> */}
                <div className={`grid grid-flow-col justify-around items-center bg-[#E5875F] text-[#1e1e1e] border-y-2 border-white/[0.2] -rotate-3 lg:py-12  sm:p-2 `}>
                    <div>We are your magic wand </div>
                    <div className={`bg-[url('/diceBlack.svg')] bg-cover lg:w-[70px] lg:h-[70px] sm:h-[30px] sm:w-[30px]`}></div>
                    <div>Wonders happen </div>
                </div>
            {/* </marquee> */}
        </div>
    )
}

export default Showcase

import { FC } from 'react'

const Showcase: FC = () => {
    return (
        <div className='grid grid-flow-row text-6xl gap-10 pt-28'>
            <div className='grid grid-flow-col justify-around items-center text-white border-y-2 border-white/[0.2] -rotate-3 py-12'>
                <div>We are your magic wand</div>
                <div className={`bg-[url('/diceWhite.svg')] bg-cover w-[70px] h-[70px]`}></div>
                <div>Wonders happen</div>
            </div>

            <div className='grid grid-cols-1 w-full bg-[#1e1e1e] border-y-2 border-white/[0.2] py-12 rotate-3'>
                <div className='bg-[url("/showcaseImages.svg")] bg-contain w-screen h-[100px]'></div>
            </div>

            <div className='grid grid-flow-col justify-around items-center bg-[#E5875F] text-[#1e1e1e] border-y-2 border-white/[0.2] -rotate-3 py-12'>
                <div>We are your magic wand</div>
                <div className={`bg-[url('/diceBlack.svg')] bg-cover w-[70px] h-[70px]`}></div>
                <div>Wonders happen</div>
            </div>
        </div>
    )
}

export default Showcase

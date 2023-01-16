import { FC } from 'react'



const Showcase: FC = () => {
    return (
        <div className=' grid grid-flow-row lg:text-6xl gap-4 pt-5 lg:pt-28 sm:text-xl sm:gap-5 sm:pt-14'>
          
                <div className={` whitespace-nowrap grid grid-flow-col justify-around items-center text-white border-y-2 border-white/[0.2] -rotate-3 lg:py-12  p-6`}>
                
                    <div>We are your magic wand </div>
                    <div className={`bg-[url('/diceWhite.svg')] bg-cover lg:w-[70px] lg:h-[70px] h-[25px] w-[25px]`}></div>
                    <div>Wonders happen </div>
                  
                </div>
            
           
                <div className='grid grid-cols-1 w-full bg-[#1e1e1e] border-y-2 border-white/[0.2] lg:py-12  py-6 rotate-3'>
            
                    <div className='bg-repeat bg-[url("/showcaseImages.svg")] bg-contain  w-auto lg:h-[100px] h-14 '></div>
                     
                  
                </div>
          

                <div className={` grid grid-flow-col justify-around items-center bg-[#E5875F] text-[#1e1e1e] border-y-2 border-white/[0.2] -rotate-3 lg:py-12  p-6 `}>
                
                    <div>We are your magic wand </div>
                    <div className={`bg-[url('/diceBlack.svg')] bg-cover lg:w-[70px] lg:h-[70px] sm:h-[35px] sm:w-[35px]`}></div>
                    <div>Wonders happen </div>
                   
                    

                </div> 
          
        </div>
    )
}

export default Showcase

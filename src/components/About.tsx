import { FC } from 'react'

const About: FC = () => {
  return (
    <div id='about' className='grid grid-rows-auto justify-center items-center text-center bg-white  '>
      <div className='self-start -mt-1 border-0 outline-none border-t-[70px] sm:border-t-[100px] border-t-[#1e1e1e] border-r-[100vw] border-r-white py-2 '>
      </div>
      <div className='text-[#E6875F] md:py-20 sm:self-start sm:h-3 text-4xl font-ExtraBold lg:text-5xl sm:font-bold sm:text-3xl py-2'>
        WHY SOLIDOT?
      </div>
      <div className='w-3/4 mx-auto py-5 md:py-10 text-2xl lg:text-6xl font-Bold text-[#1A1A1A] lg:self-center sm:self-start tracking-wide sm:text-2xl sm:font-semibold'>
        Solidot has the unusual talent for simplifying and elevating complicated concepts into beautiful designs!
      </div>
      <div className='lg:text-basepy-2 py-5 md:py-10 sm:self-start lg:font-Bold w-2/3 lg:w-1/2 mx-auto sm:text-lg sm:font-thin'>
        Designing has been our playground. We are a studio that designs and builds loved-based adventures.
      </div>
      <div className='lg:grid py-6 leading-[4rem] text-3xl sm:block grid-cols-3 font-Bold  lg:text-base sm:w-2/3 text-[#E6875F] w-2/4 mx-auto self-start'>
        <div>Dribbble</div>
        <div>Behance</div>
        <div>Instagram</div>
      </div>
    </div>
  )
}

export default About

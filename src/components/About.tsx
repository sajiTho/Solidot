import { FC } from 'react'

const About: FC = () => {
  return (
    <div id='about' className='grid grid-rows-auto justify-center items-center text-center bg-white  h-screen w-screen '>
      <div className='self-start border-t-[100px] sm-my-auto border-t-[#1e1e1e] border-r-[100vw] border-r-white'>
      </div>
      <div className='text-[#E6875F] sm:self-start sm:h-3 lg:font-ExtraBold lg:text-5xl sm:font-bold sm:text-3xl self-end'>
        WHY SOLIDOT?
      </div>
      <div className='w-3/4 mx-auto lg:text-6xl lg:font-Bold text-[#1A1A1A] lg:self-center sm:self-start tracking-wide sm:text-2xl sm:font-semibold'>
        Solidot has the unusual talent for simplifying and elevating complicated concepts into beautiful designs!
      </div>
      <div className='lg:text-base sm:self-start lg:font-Bold lg:w-1/2 mx-auto sm:text-lg sm:font-thin'>
        Designing has been our playground. We are a studio that designs and builds loved-based adventures.
      </div>
      <div className='lg:grid sm:block grid-cols-3 font-Bold  lg:text-base sm:w-2/3 text-[#E6875F] w-2/4 mx-auto self-start'>
        <div>Dribbble</div>
        <div>Behance</div>
        <div>Instagram</div>
      </div>
    </div>
  )
}

export default About

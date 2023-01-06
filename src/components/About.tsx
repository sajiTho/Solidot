import { FC } from 'react'

const About: FC = () => {
  return (
    <div id='about' className='grid grid-rows-auto justify-center items-center text-center bg-white h-screen w-screen '>
      <div className='self-start border-t-[100px] border-t-[#1e1e1e] border-r-[100vw] border-r-white'>
      </div>
      <div className='text-[#E6875F] font-ExtraBold text-5xl self-end'>
        WHY SOLIDOT?
      </div>
      <div className='w-3/4 mx-auto text-6xl font-Bold text-[#1A1A1A] self-center tracking-wide'>
        Solidot has the unusual talent for simplifying and elevating complicated concepts into beautiful designs!
      </div>
      <div className='text-base font-Bold w-1/2 mx-auto'>
        Designing has been our playground. We are a studio that designs and builds loved-based adventures.
      </div>
      <div className='grid grid-cols-3 font-Bold text-base text-[#E6875F] w-2/4 mx-auto self-start'>
        <div>Dribble</div>
        <div>Behance</div>
        <div>Instagram</div>
      </div>
    </div>
  )
}

export default About

import Image from 'next/image';
import Headline from '../atoms/Headline/Headlines'
export interface ForPortfolioItems {
  title: string;
  desc: string;
  imagePath: string;
}
const portfolioItems: ForPortfolioItems[] = [
  {
    title: 'Dayhour',
    desc: 'Web Portal',
    imagePath: 'imageone.svg'
  }, {
    title: 'E-Kapray',
    desc: 'Mobile App',
    imagePath: 'imagetwo.svg'
  }, {
    title: 'Safe pal',
    desc: 'Blockchain Wallet',
    imagePath: 'imagethree.svg'
  }, {
    title: 'Audiojungle',
    desc: 'Blockchain Wallet',
    imagePath: 'imagefour.svg'
  },
]
const portfolio = () => {
  return (
    <div id='portfolio' className='bg-white '>
      <Headline />
      <div className='lg:grid grid-cols-2 justify-center align-baseline lg:py-24 sm:py-8 sm:px-0 sm:block sm:mx-auto'>
        {portfolioItems.map((item: ForPortfolioItems, i: number) =>
          <div key={i} className={`grid grid-rows-auto h-fit justify-center even:py-24 sm:p-0 cursor-pointer`}>
            <div className={`lg:h-[360px] lg:w-[480px] overflow-hidden sm:h-[250px] sm:w-[350px]`}>
              <div className={`ease-in-out duration-500 h-full w-full ${i % 2 !== 0 ? 'scale-125 hover:scale-150 hover:rotate-0 rotate-12' : 'hover:scale-125'}`}>
                <Image
                  src={`/${item.imagePath}`}
                  height={360}
                  width={480}
                  alt={'Image'}
                />

              </div>
            </div>
            <div className={`lg:font-Bold lg:text-4xl hover:text-[#E6875F] hover:underline`}>{item.title}</div>
            <div className='text-[#1e1e1e] text-xl'>{item.desc}</div>
          </div>)}
      </div>
      <div className='grid grid-row-1 justify-center pb-16 lg:text-2xl  '>
        <div className='text-black hover:bg-[#E6875F] hover:text-white cursor-pointer border-2 lg:rounded-full lg:text-2xl sm:rounded-full lg:px-[52px] lg:py-24 sm:py-10  sm:px-[12px] sm:text-xs'>VIEW MORE</div>
      </div>
    </div >)
}
export default portfolio

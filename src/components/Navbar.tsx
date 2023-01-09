import Link from 'next/link';
import { FC, useState, useEffect } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';

let menuItems = [{
  link: '#about',
  name: 'About Us'
}, {
  link: '#portfolio',
  name: 'Case studies'
}, {
  link: '#contact',
  name: 'Archived'
}, {
  link: '#footer',
  name: 'Services'
}, {
  link: '#footer',
  name: 'Chat'
}]


const Navbar: FC = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('none');

  const handleNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  useEffect(() => {
    const changeColor = () => {
      window.scrollY >= 90 ? setColor('black') : setColor('none')
    };
    window.addEventListener('scroll', changeColor);
  }, []);
  return (
    <div className="fixed w-full bottom-5 z-50 hidden md:block lg:block">
      <div className={`flex justify-center max-w-fit bg-${color} mx-auto text-white relative tracking-widest items-center gap-4 px-8 py-3 z-10 ease-in duration-300 rounded-full`} >
        <div>
          <lottie-player
            autoplay
            loop
            mode="normal"
            src="/SolidotIcon.json"
            style={{ width: "45px", height: "45px" }}
          >
          </lottie-player>
        </div>
        {
          menuItems.map((item, i) =>
            <Link key={i} href={item.link}>
              <div className='p-3 font-bold rounded-full hover:bg-[#E6875F]  '>
                {item.name}
              </div>
            </Link>
          )
        }
        <div className='p-3 rounded-full bg-[#E6875F] '>
          <Link href="/">
            <AiOutlineArrowUp size={25} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

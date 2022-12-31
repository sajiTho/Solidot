import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose, AiOutlineArrowUp } from 'react-icons/ai';
import Hero from './Hero';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparentm');
  const [textColor, setTextColor] = useState('white');

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#000000');
        setTextColor('#ffffff');
      } else {
        setColor('transparent');
        setTextColor('#ffffff');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

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
  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className='fixed left-[497px] bottom-5 right-[500px] items-center justify-center z-10 ease-in duration-300 rounded-full'
    >
      <div className='max-w-[1240px] m-auto flex  space-x-14  p-1 text-black '>

        <ul style={{ color: `${textColor}` }} className='flex items-center gap-2'>
          <lottie-player
            className="gap-4 justify-start"
            autoplay

            loop
            mode="normal"
            src="/SolidotIcon.json"
            style={{ width: "45px", height: "45px" }}
          >
          </lottie-player>

          {
            menuItems.map(item =>
              <Link href={item.link}>
                <li className='p-2 gap-20 font-bold rounded-full hover:bg-[#E6875F]  '>
                  {item.name}
                </li>
              </Link>
            )
          }
          <li className='p-3 gap-5 rounded-full bg-[#E6875F] '>
            <Link href="/">
              <AiOutlineArrowUp size={25} className="  rounded-full " style={{ color: `${textColor}` }} />
            </Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className='block sm:hidden z-10'>
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }
        >
          <ul>
            <li onClick={handleNav} className='p-4 text-4xl hover:bg-[#E6875F] '>
              <Link href='/'>Home</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:bg-[#E6875F] '>
              <Link href='/portfolio'>Portfolio</Link>
            </li>
            {/* <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/'>Work</Link>
            </li> */}
            <li onClick={handleNav} className='p-4 text-4xl hover:bg-[#E6875F] '>
              <Link href='/contact'>Contact</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:bg-[#E6875F] '>
              <Link href='/about'>About</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

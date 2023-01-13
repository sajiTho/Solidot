import Link from 'next/link';
import { FC, useState, useEffect } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';

export enum NavLinks {
  HOME = '#',
  ABOUT = '#about',
  PORTFOLIO = '#portfolio',
  CONTACT = '#contact',
  FOOTER = '#footer'
}
export enum NavItems {
  ABOUT = 'About Us',
  PORTFOLIO = 'Case Studies',
  CONTACT = 'Archived',
  FOOTER = 'Services'
}

export interface ForMenuItems {
  link: NavLinks;
  name: NavItems;
}
let menuItems: ForMenuItems[] = [{
  link: NavLinks.ABOUT,
  name: NavItems.ABOUT
}, {
  link: NavLinks.PORTFOLIO,
  name: NavItems.PORTFOLIO
}, {
  link: NavLinks.CONTACT,
  name: NavItems.CONTACT
}, {
  link: NavLinks.FOOTER,
  name: NavItems.FOOTER
}]


const Navbar: FC = () => {
  const [menuItem, setMenuItem] = useState<ForMenuItems['name']>(NavItems.ABOUT)
  const [highlightItem, setHighlightItem] = useState<ForMenuItems['link']>(NavLinks.HOME)
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  useEffect(() => {
    const changeColor = () => {
      (window.scrollY > 680 && window.scrollY < 1600)
        ? (setHighlightItem(NavLinks.ABOUT), setMenuItem(NavItems.ABOUT))
        : (window.scrollY > 1600 && window.scrollY < 3350)
          ? (setHighlightItem(NavLinks.PORTFOLIO), setMenuItem(NavItems.PORTFOLIO))
          : (window.scrollY > 3350 && window.scrollY < 5200)
            ? (setHighlightItem(NavLinks.CONTACT), setMenuItem(NavItems.CONTACT))
            : window.scrollY > 5200
              ? (setHighlightItem(NavLinks.FOOTER), setMenuItem(NavItems.FOOTER))
              : (setHighlightItem(NavLinks.HOME), setMenuItem(NavItems.ABOUT))

    };
    window.addEventListener('scroll', changeColor);
  }, []);
  return (
    <div className="fixed w-full bottom-5 z-50">
      <div className={`flex justify-center max-w-fit bg-black mx-auto text-white relative tracking-widest items-center px-8 py-3 z-10 ease-in duration-300 rounded-full`} >
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
              <div className={`p-3 font-bold rounded-full hover:bg-[#E6875F] hidden sm:block ${item.link === highlightItem && 'bg-[#E6875F]'} `}>
                {item.name}
              </div>
            </Link>
          )
        }{
          <Link href={highlightItem}>
            <div className={`p-3 font-bold rounded-full hover:bg-[#E6875F] sm:hidden block`}>
              {menuItem}
            </div>
          </Link>
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

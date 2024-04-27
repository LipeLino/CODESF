import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { useState, useEffect } from "react";
import React from "react";

import { logocodesf2 } from "../assets";
import { navigation } from "../constants";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const [showNav, setShowNav] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNav(prevScrollPos > currentScrollY || currentScrollY <= 0);
      setPrevScrollPos(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-1000 max-lg:h-[5rem] max-lg:border max-lg:border-color-ivory max-lg:bg-n-8/50 max-lg:backdrop-blur-sm${
        openNavigation ? "bg-transparent" : "bg-transparent"
      } ${showNav ? "opacity-100 visible" : "opacity-0 invisible"}`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-20 max-lg:py-1">
        <a className="max-lg:py-2 max-lg:w-[9rem] w-[12rem] h-[4.5rem] lg:mx-5 xl:mr-8 pl-2 md:border md:rounded-extra-3xl md:border-color-ivory md:backdrop-blur-lg transition-all duration-1000  md:bg-n-8/30 box-sizing:border-box items-center justify-center" href="#hero">
          <img src={logocodesf2} width={160} height={30} alt="Logo CODESF" />
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] bottom-0 left-0 right-0 lg:static lg:flex lg:mx-auto backdrop-blur-lg`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row lg:border rounded-extra-3xl border-color-ivory my-4 lg:bg-n-8/30 lg:backdrop-blur-lg"> 
            {navigation.map((item, index) => (          
              <React.Fragment key={item.id} className="hidden lg:flex">
                <a
                  href={item.url}
                  onClick={handleClick}
                  className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                    item.onlyMobile ? "lg:hidden" : ""
                  } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-base lg:font-semibold ${
                    item.url === pathname.hash
                      ? "z-2 lg:text-n-1"
                      : "lg:text-n-1/50"
                  } lg:leading-none lg:hover:text-n-1 xl:px-12 `}
                > 
                  {item.title} 
                </a>
                {index !== navigation.length - 1 && (
                  <div className="hidden lg:flex"><div className="h-10 w-px bg-gradient-to-b from-transparent via-color-ivory to-transparent last:hidden"></div></div>
                )}
              </React.Fragment>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        <div className="pr-8">
          <button className="hidden lg:flex w-[12rem] h-[4.5rem] md:border md:rounded-extra-3xl md:border-color-ivory md:backdrop-blur-lg transition-all duration-1000  md:bg-n-8/30 box-sizing:border-box items-center justify-center" href="#login">
            ENTRAR
          </button>
        </div>

        <button
          className="ml-auto lg:hidden pr-4"      
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </button>
      </div>
    </div>
  );
};

export default Header;

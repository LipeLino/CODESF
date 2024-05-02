import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { useState, useEffect } from "react";
import React from "react";

import { logo } from "../assets";
import { navigation } from "../constants";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import '../index.css';

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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-1000 max-lg:h-[5rem] max-lg:border-b max-lg:border-color-ivory max-lg:bg-n-8/50
      ${openNavigation ? "" : ""
        } ${showNav ? "opacity-100" : "opacity-0 invisible"}`}
    >
      <div className="lg:hidden empty-content backdrop-hack outer"></div>
      <div className="flex items-center px-8 lg:px-14 xl:px-20 max-lg:py-1">
        <a className="group flex justify-start py-1 max-lg:w-[9rem] w-[12rem] h-[4rem] px-5 pl-2 lg:border lg:rounded-extra-3xl lg:border-color-ivory lg:backdrop-blur-lg transition-all duration-1000 lg:bg-n-8/30 box-sizing:border-box" href="#hero">
          <img src={logo} alt="Logo CODESF" className="w-auto h-full object-contain" />
          <div className="px-2 flex items-center justify-center">
            <p className="text-center text-2xl font-semibold text-shadow
            bg-gradient-to-r bg-clip-text  text-transparent from-color-russianviolet via-color-yaleblue to-color-russianviolet group-hover:from-codesf-verde group-hover:via-codesf-amarelo group-hover:to-codesf-azul to-90% animate-text">
              CODESF
            </p>
          </div>
        </a>
        <nav
          className={`${openNavigation ? "flex" : "hidden"
            } max-lg:inner fixed top-[5rem] bottom-0 left-0 right-0 lg:static lg:flex lg:mx-auto items-center`}
        >
          <div className="lg:hidden empty-content backdrop-hack outer"></div>
          <div className="lg:backdrop-blur-lg relative lg:h-[4rem] z-2 flex flex-col items-center justify-center m-auto lg:flex-row lg:border rounded-extra-3xl border-color-ivory my-4 lg:bg-n-8/30">
            {navigation.map((item, index) => (
              <div key={item.id}>
                <div className="flex items-center"> {/* Add a parent div to contain both item.title and the div */}
                  <a
                    href={item.url}
                    onClick={handleClick}
                    className={`block relative font-code text-2xl font-semibold uppercase text-n-1 transition-colors hover:text-color-1 ${item.onlyMobile ? "lg:hidden" : ""
                      } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-base lg:font-semibold ${item.url === pathname.hash
                        ? "z-2 lg:text-n-1"
                        : "lg:text-n-1/70"
                      } lg:leading-none lg:hover:text-n-1 xl:px-12 `}
                  >
                    {item.title}
                  </a>
                  {(index !== 3 && index !== 4) && (
                    <div className="max-lg:hidden"><div className="h-10 w-px bg-gradient-to-b from-transparent via-color-ivory to-transparent"></div></div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <HamburgerMenu />
        </nav>

        <div>
          <button className="group hidden lg:flex w-[12rem] h-[4rem] border rounded-extra-3xl border-color-ivory backdrop-blur-lg transition-all duration-1000  bg-n-8/30 box-sizing:border-box items-center justify-center" href="#login">
            <p className="bg-gradient-to-r bg-clip-text  text-transparent opacity-70 group-hover:opacity-100
            from-color-russianviolet via-color-yaleblue to-color-russianviolet animate-text">
              ENTRAR
            </p>
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
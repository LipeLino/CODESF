import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock"

import { brainwave } from "../assets";
import {navigation} from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

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
    if(!openNavigation) return;

    enablePageScroll(); 
    setOpenNavigation(false);
  }

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full border-b border-n-6 lg:bg-n-8/90 inset-0 backdrop-blur-2xl lg:backdrop-blur-none
    inset-x-0 mb-[-49px] flex flex-col transition duration-300 ease-out md:mb-[-65px] lg:mb-[-76px]
    ${openNavigation ? 'bg-n-8/90' : 'bg-n-8/90 backdrop-blur-sm'}`}
    >
        <div className="relative flex w-full items-center justify-between border-b border-t-0 border-[var(--border-base)] bg-[var(--bg-translucent)] px-4 py-2 md:px-6 md:py-4 lg:border-0 lg:bg-transparent lg:px-8">
            <a className="block w-[12rem] xl:mr-8" href="#hero">
                <img src={brainwave} width={190} height={40}
                alt="Logo da CODESF: três prédios, verde, amarelo e azul"/>
            </a>
            <nav className={`${openNavigation ? 'flex' : "hidden"}
            relative hidden rounded-full p-1.5 lg:flex before:absolute before:inset-0 before:-z-10 before:rounded-full before:border before:border-[var(--border-base)] before:bg-[var(--bg-translucent)] before:backdrop-blur-2xl`}
            >
                <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
                    {navigation.map((item) => (
                        <a key={item.id} href={item.url} onClick={handleClick}
                        className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 
                        ${item.onlyMobile ? 'lg:hidden' : ''} px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold
                        ${item.url === pathname.hash ? 'z-2 lg:text-n-1' : 'lg:text-n-1/50'
                    }   lg:leading-5 lg:hover:text-n-1 xl:px-12
                    flex h-8 select-none items-center justify-center rounded-full border px-4 text-sm font-medium transition duration-100 ease-out focus:ring-2 focus:ring-[var(--label-title)] border-transparent bg-transparent text-[var(--label-base)]  hover:border-[var(--border-base)] hover:bg-[var(--bg-translucent)] hover:text-[var(--label-title)] focus:text-[var(--label-title)] focus:outline-none cursor-default`}
                        >
                            {item.title}
                        </a>
                    ))}
                </div>
                <HamburgerMenu />
            </nav>  
            <Button className="hidden lg:flex" href="#login">
                Entrar
            </Button>

            <Button className="ml-auto lg:hidden" px="px-3"
            onClick={toggleNavigation}>
                <MenuSvg openNavigation={openNavigation}/>
            </Button>
        </div>
    </div>
  );
};

export default Header;

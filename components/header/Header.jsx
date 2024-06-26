import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../button/Button'
import Style from '../../styles/header/header.module.css'
import { useRouter } from "next/router";
import { useIntl } from "react-intl";

export default function Header() {

  const [openSubMenu, setOpenSubMenu] = useState("a")
  const [openLanMenu, setOpenLanMenu] = useState(0)
  const [openLanMenuRes, setOpenLanMenuRes] = useState(0)
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [winWidth, setWinWidth] = useState(0);
  const [activeMobileSubMenu, setActiveMobileSubMenu] = useState();
  const [back, setBack] = useState();
  const [isFixed, setIsFixed] = useState(0);

  useEffect(() => {
    const headerElement = document.querySelector('header .mainHeader');

    if (headerElement) {
      const height = headerElement.offsetHeight;
      setHeaderHeight(height);
    }
    window.addEventListener('resize', function () {
      setWinWidth(window.innerWidth);
      setIsMenuOpen(false)
      setOpenSubMenu("a")
      setIsFixed(0)
    })
    const mainSections = document.querySelector('main');

    mainSections.addEventListener('click', function () {
      setIsMenuOpen(false);
      setActiveMobileSubMenu();
      setOpenLanMenuRes(0)
    })


  }, [headerHeight, winWidth, isMenuOpen, openSubMenu, isFixed, activeMobileSubMenu, openLanMenuRes])

  const subMenuProrperty =
  {
    top: `${headerHeight}px`,
  }

  const showSubManu = (e, i) => {
    setOpenSubMenu(i)
  }
  const hideMenu = (e, val) => {
    setOpenSubMenu("h")
  }
  const showLan = (val) => {
    setOpenLanMenu(val);
  }
  const hideLan = (val) => {
    setOpenLanMenu(val)
  }
  const showMenuRes = (e, i) => {
    if (winWidth <= 1024) {
      e.preventDefault();
      e.stopPropagation()
      setActiveMobileSubMenu(i);
      setBack()
    }
  }
  const showLangRes = (val) => {
    if(openLanMenuRes === 0) {
      setOpenLanMenuRes(1)
      setIsMenuOpen(false);
      setActiveMobileSubMenu();
    } else {
      setOpenLanMenuRes(0)
    }

  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveMobileSubMenu();
    (isFixed === 0) ? setIsFixed(1) : setIsFixed(0);
    setOpenLanMenuRes(0)
  }
  const backBtn = (val) => {
    setBack(val)
  }

  const closeMenu = () => {
      setIsMenuOpen(false);
      setActiveMobileSubMenu();
  }
 
  const { locales } = useRouter();
  const intl = useIntl();
  const headerData = intl?.messages?.headerData;

  return (
    <header>
      <div className={`${Style.header} header bg-blue ipad:py-[20px] sm:py-[10px] `}> {/* ${isFixed === 1 ? 'fixed z-[99] w-full ' : ''} */}
        <div className={`container`}>
          <div className={`mainHeader ${Style.mainHeader} flex items-center justify-between`}>
            <div className="logoWrap max-w-[200px] ipad:max-w-[150px] sm:max-w-[100px] relative">
              <Link href={'/'} className='emptyLink' onClick={() => closeMenu()}>.</Link>
              <Image loading="eager" src={'/logo/logo.png'} alt='Logo' width={334} height={140} />
            </div>
            <div className={`main-nav flex items-center ipad:flex-wrap ipad:justify-start justify-end ipad:absolute ipad:top-[62px] sm:top-[42px] ipad:w-full ipad:bg-blue ipad:z-[99] ipad:p-[20px] ipad:pt-0 transition-all duration-700 ease-in-out ${isMenuOpen ? 'ipad:left-0 ipad:opacity-1 ipad:visible' : 'ipad:left-[-100%] ipad:opacity-0 ipad:invisible'}`}>
              <div className="nav mr-[20px]">
                <ul className='flex pt-[42px] ipad:flex-wrap ipad:pt-[20px] ml-[20px] ipad:ml-0'>
                  {
                    headerData?.map((item, i) => {
                      return (
                        <li key={item?.id + i} className='mr-[30px] pb-[42px] ipad:w-full ipad:pb-[20px] laptop-portrait:mr-[10px] last:mr-0' onMouseEnter={(e) => showSubManu(e, i)} onMouseLeave={(e) => hideMenu(e, i)}>
                          {item?.subMenu ?
                            <span className={`text-white ${item?.subMenu ? Style.arrow : ''} cursor-pointer pr-[20px] ipad:pr-[30px] ${item?.subMenu && openSubMenu === i ? Style.show : ''} `} onClick={(e) => showMenuRes(e, i)}>{item?.nav}</span>
                            :
                            <Link href={item?.url} className={`text-white ${item?.subMenu ? Style.arrow : ''} pr-[20px] ipad:pr-[30px] ${item?.subMenu && openSubMenu === i ? Style.show : ''} `} onClick={() => closeMenu()}>{item?.nav}</Link>
                          }
                          <div className={`subMenu ${Style.subMenu} ${openSubMenu == i && item?.subMenu ? 'ipad-up:block' : 'ipad-up:hidden'} absolute bottom-0 ${back != 'x' && activeMobileSubMenu === i ? 'ipad:left-0' : 'ipad:left-[-100%]'} transition-all duration-700 ease-in-out bg-white h-fit ipad:h-full ipad:w-full ipad:!top-[0] p-[20px] z-[99]`} style={subMenuProrperty}>
                            <div className={`${Style.backBtn} backBtn relative cursor-pointer text-[20px] mb-[20px] ipad:mb-[25px] pl-[30px] hidden ipad:inline-block`} onClick={() => backBtn('x')}></div>
                            <ul className='ipad:mt-[40px]'>
                              {
                                item?.subMenu?.map((val, i) => {
                                  return (
                                    <li key={i} className='mb-[10px] last:mb-0'>
                                      <Link href={val?.url} className='text-blue' onClick={() => closeMenu()}>{val?.subNav}</Link>
                                    </li>
                                  )
                                })
                              }
                            </ul>
                          </div>
                        </li>
                      )
                    })
                  }
                  <li onMouseEnter={(e) => showLan(1)} onMouseLeave={(e) => hideLan(0)} className='pr-[30px] pb-[42px] laptop-portrait:mr-[10px] ipad:hidden'>
                    <div className="iconWrap ">
                      <span className='cursor-pointer'>
                        <Image loading="eager" src={'/icons/language_icon.svg'} alt="Language Icons" width={20} height={20} />
                      </span>
                    </div>
                    <div className={`subMenu ${Style.subMenu} ${openLanMenu == 1 ? 'ipad-up:block' : 'ipad-up:hidden'} absolute bottom-0 ${back != 'x' && activeMobileSubMenu === 1 ? 'ipad:left-0' : 'ipad:left-[-100%]'} transition-all duration-700 ease-in-out bg-white h-fit ipad:h-full ipad:w-full p-[20px] z-[99]`} style={subMenuProrperty}>
                      <ul>
                        {[...locales].sort().map((locale) => (
                          <li key={locale} className='mb-[10px] last:mb-0'>
                            <Link href="/" locale={locale} className='text-blue'>{locale === 'en' ? 'English' : 'Ukrain'}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </li>
                </ul>
              </div>
              <div className="socialLinkWithBtn ipad:w-full">
                <div className="socialIcon relative">
                  <Link href={'/'} className='emptyLink'>.</Link>
                </div>
                <div className="btnWrap ipad:mt-[50px]" onClick={() => closeMenu()}>
                  <Button buttonText="Donate" buttonClass="default" url={'/donate'} />
                </div>
              </div>

            </div>
            <div className="humburgerWithLanguage flex">
              <div className="languageWrap ipad-up:hidden">
                <div className='mr-[20px] laptop-portrait:mr-[10px]'>
                  <div className="iconWrap" onClick={(e) => showLangRes(1)}>
                    <span className='cursor-pointer relative sm:top-[-2px]'>
                      <Image loading="eager" src={'/icons/language_icon.svg'} alt="Language Icons" width={20} height={20} className='sm:w-[18px] sm:h-[18px]' />
                    </span>
                  </div>
                  <div className={`subMenu ${Style.subMenu} absolute bottom-0 ${openLanMenuRes === 1 ? 'block' : 'hidden'} transition-all duration-700 ease-in-out bg-white h-fit right-[20px] sm:!top-[43px] ipad:!top-[69px] p-[20px] z-[99]`} style={subMenuProrperty}>
                    <ul>
                      {[...locales].sort().map((locale) => (
                        <li key={locale} className='mb-[10px] last:mb-0'>
                          <Link href="/" locale={locale} className='text-blue'>{locale === 'en' ? 'English' : 'Ukrain'}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <button aria-label="first link" className={`menu-toggle w-9 h-[25px] relative transition-transform duration-500 cursor-pointer sm:w-[22px] sm:h-[12px] laptop-portrait:hidden xl-up:hidden ${isMenuOpen ? 'menu-open' : ''}`} onClick={toggleMenu}>
                <ul>
                  <li className={`h-0.5 absolute w-full transition-all duration-300 ease-in-out bg-white ${isMenuOpen ? 'menu-open transform rotate-[135deg] top-3 sm:top-[6px]' : 'top-0'}`}></li>
                  <li className={`h-0.5 absolute w-full transition-all duration-300 ease-in-out bg-white ${isMenuOpen ? 'menu-open opacity-0 left-[-60px] ' : 'top-[11px] left-0 sm:top-[6px]'}`}></li>
                  <li className={`h-0.5 absolute w-full transition-all duration-300 ease-in-out bg-white ${isMenuOpen ? 'menu-open transform rotate-[-135deg] top-3 sm:top-[6px]' : 'top-[22px] sm:top-[12px]'}`}></li>
                </ul>
              </button>
            </div>

          </div>
        </div>
      </div>
    </header>
  )
}

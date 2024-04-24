import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HeaderData, headerData } from '../../public/data/headerData'
import Button from '../button/Button'
import Style from '../../styles/header/header.module.css'

export default function Header() {

  const [openSubMenu, setSubMenu] = useState("a")
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [winWidth, isWinWidth] = useState(0);
  const [ActiveMobileSubMenu, setActiveMobileSubMenu] = useState();
  const [back, setBack] = useState();

  useEffect(() => {
    const headerElement = document.querySelector('header .mainHeader');

    if (headerElement) {
      const height = headerElement.offsetHeight;
      setHeaderHeight(height);
    }
    window.addEventListener('resize', function () {
      isWinWidth(window.innerWidth);
      setIsMenuOpen(false)
      setSubMenu("a")
    })
  })

  const subMenuProrperty =
  {
    top: `${headerHeight - 6}px`,
  }

  const showSubManu = (e, i) => {
    setSubMenu(i)
  }
  const hideMenu = (e, val) => {
    setSubMenu("h")
  }
  const showMenuRes = (e, i) => {
  if(winWidth <= 1024) {
    e.preventDefault();
    e.stopPropagation()
    setActiveMobileSubMenu(i);
    setBack()
  }
  }
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveMobileSubMenu();
  }
  const backBtn = (val) => {
    setBack(val)
  }

  return (
    <header>
      <div className={`${Style.header} header bg-blue ipad:py-[20px] sm:py-[10px]`}>
        <div className={`container`}>
          <div className={`mainHeader ${Style.mainHeader} flex items-center justify-between`}>
            <div className="logoWrap max-w-[200px] ipad:max-w-[150px] sm:max-w-[100px] relative">
              <Link href={'/'} className='emptyLink'>.</Link>
              <Image src={'/logo/logo.png'} alt='Logo' width={334} height={140} />
            </div>
            <div className={`main-nav flex items-center ipad:flex-wrap ipad:justify-start justify-end ipad:absolute ipad:top-[62px] sm:top-[43px] ipad:w-full ipad:bg-blue ipad:z-[99] ipad:p-[20px] ipad:pt-0 transition-all duration-700 ease-in-out ${isMenuOpen ? 'ipad:left-0 ipad:opacity-1 ipad:visible' : 'ipad:left-[-100%] ipad:opacity-0 ipad:invisible'}`}>
              <div className="nav mr-[20px]">
                <ul className='flex pt-[42px] ipad:flex-wrap ipad:pt-[20px] ml-[20px]'>
                  {
                    headerData.map((item, i) => {
                      return (
                        <li key={i} className='mr-[30px] pb-[42px] ipad:w-full ipad:pb-[20px] laptop-portrait:mr-[10px] last:mr-0' onMouseEnter={(e) => showSubManu(e, i)} onMouseLeave={(e) => hideMenu(e, i)}>
                          { item?.subMenu ? 
                              <span className={`text-white ${item?.subMenu ? Style.arrow : ''} cursor-pointer pr-[20px] ${ item?.subMenu && openSubMenu === i ? Style.show : ''} `} onClick={(e) => showMenuRes(e, i)}>{item.nav}</span>
                            : 
                            <Link href={item.url} className={`text-white ${item?.subMenu ? Style.arrow : ''} pr-[20px] ${ item?.subMenu && openSubMenu === i ? Style.show : ''} `}>{item.nav}</Link>
                          }
                          <div className={`subMenu ${Style.subMenu} ${openSubMenu == i && item?.subMenu ? 'ipad-up:block' : 'ipad-up:hidden'} absolute bottom-0 ${back != 'x' && ActiveMobileSubMenu === i ? 'ipad:left-0' : 'ipad:left-[-100%]'} transition-all duration-700 ease-in-out bg-white h-full ipad:w-full ipad:!top-[0] p-[20px] z-[99]`} style={subMenuProrperty}>
                            <div className={`${Style.backBtn} backBtn relative cursor-pointer text-[20px] mb-[20px] ipad:mb-[25px] pl-[30px] hidden ipad:inline-block`} onClick={() => backBtn('x')}></div>
                            <ul className='ipad:mt-[40px]'>
                              {
                                item?.subMenu?.map((val, i) => {
                                  return (
                                    <li key={i} className='mb-[10px]'>
                                      <Link href={val.url} className='text-blue'>{val.subNav}</Link>
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
                </ul>
              </div>
              <div className="socialLinkWithBtn">
                <div className="socialIcon relative">
                  <Link href={'/'} className='emptyLink'>.</Link>
                  {/* <svg viewBox="23 23 64 64">
                    <use xlink:href="#linkedin-unauth-icon" width="110" height="110"></use>
                  </svg> */}
                </div>
                <div className="btnWrap ipad:mt-[50px]">
                  <Button buttonText="Donate" buttonClass="default" url={'/donate'} />
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
    </header>
  )
}

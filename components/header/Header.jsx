import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HeaderData, headerData } from '../../public/header/headerData'
import Button from '../button/Button'
import Style from '../../styles/header/header.module.css'

export default function Header() {

  const [openSubMenu, setSubMenu] = useState("a")
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const headerElement = document.querySelector('header .mainHeader');

    if (headerElement) {
      const height = headerElement.offsetHeight;
      setHeaderHeight(height);
    }

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

  return (
    <header>
      <div className={`${Style.header} header bg-blue ipad:py-[20px]`}>
        <div className={`container`}>
          <div className={`mainHeader ${Style.mainHeader} flex items-center justify-between`}>
            <div className="logoWrap max-w-[200px] ipad:max-w-[150px] relative">
              <Link href={'/'} className='emptyLink'>.</Link>
              <Image src={'/logo/logo.png'} alt='Logo' width={334} height={140} />
            </div>
            <div className="main-nav flex items-center justify-end ipad:hidden">
              <div className="nav mr-[20px]">
                <ul className='flex pt-[42px]'>
                  {
                    headerData.map((item, i) => {
                      return (
                        <li key={i} className='mr-[30px] pb-[42px]' onMouseEnter={(e) => showSubManu(e, i)} onMouseLeave={(e) => hideMenu(e, i)}>
                          <Link href={item.url} className={`text-white`} >{item.nav}</Link>
                          <div className={`subMenu ${Style.subMenu} ${openSubMenu == i ? 'block' : 'hidden'} ${item?.subMenu ? 'block' : 'hidden'} absolute bottom-0 bg-white h-full p-[20px] z-[99]`} style={subMenuProrperty}>
                            <ul>
                              {
                                item?.subMenu?.map((val, i) => {
                                  return (
                                    <li className='mb-[10px]'>
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
                <div className="btnWrap">
                    <Button buttonText="Donate" buttonClass="default" url={'/donate'} />
                </div>
              </div>
             
            </div>
            <button aria-label="first link" className={`menu-toggle w-9 h-[25px] relative transition-transform duration-500 cursor-pointer sm:w-[22px] sm:h-[12px] laptop-portrait:hidden xl-up:hidden `} >
                <ul>
                    <li className={`h-0.5 absolute w-full transition-all duration-300 ease-in-out bg-white top-0`}></li>
                    <li className={`h-0.5 absolute w-full transition-all duration-300 ease-in-out bg-white top-[11px] left-0 sm:top-[6px]`}></li>
                    <li className={`h-0.5 absolute w-full transition-all duration-300 ease-in-out bg-white top-[22px] sm:top-[12px]`}></li>
                </ul>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

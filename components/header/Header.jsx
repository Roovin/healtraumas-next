import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HeaderData, headerData } from '../../public/header/headerData'
import Button from '../button/Button'

export default function Header() {
  return (
    <header>
      <div className="header">
        <div className="container">
          <div className="mainHeader flex items-center">
            <div className="logoWrap max-w-[334px] relative">
              <Link href={'/'} className='emptyLink'>.</Link>
              <Image src={'/logo/logo.png'} alt='Logo' width={334} height={140} />
            </div>
            <div className="main-nav flex items-center">
              <div className="nav mr-[20px]">
                <ul className='flex'>
                  {
                    headerData.map((item, i) => {
                      return (
                        <li key={i}>
                          <Link href={item.url}>{item.nav}</Link>
                          <div className="subMenu">
                            <ul>
                              {

                              }
                              <li>
                                <Link href={'/'}></Link>
                              </li>
                            </ul>
                          </div>
                        </li>
                      )
                    })
                  }

                </ul>
              </div>
              <div className="btnWrap">
                  <Button buttonText="Donate" buttonClass="default" url={'/donate'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

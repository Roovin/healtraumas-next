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
          <div className="mainHeader flex">
            <div className="logoWrap">
              <Image src={'/logo/logo.png'} alt='Logo' width={334} height={140} />
            </div>
            <div className="main-nav">
              <div className="nav">
                <ul>
                  {
                    headerData.map((item, i) => {
                      return (
                        <li>
                          <Link href={item.url}>{item.nav}</Link>
                          {/* <div className="subMenu">
                            <ul>
                              <li>
                                <Link></Link>
                              </li>
                            </ul>
                          </div> */}
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

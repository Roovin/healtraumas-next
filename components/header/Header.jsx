import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <header>
      <div className="header">
        <div className="container">
          <div className="mainHeader">
            <div className="logoWrap">
              <Image src={'/logo/logo.png'} alt='Logo' width={334} height={140} />
            </div>
            <div className="main-nav">
              <div className="nav">
                <ul>
                  <li>
                    <Link href="#">About Us</Link>
                    {/* <div className="subMenu">
                      <ul>
                        <li>
                          <Link></Link>
                        </li>
                      </ul>
                    </div> */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

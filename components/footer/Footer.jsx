import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Style from '../../styles/footer/footer.module.css'

export default function Footer() {
  // useEffect (() => {
  //   const scrollHandler = () => {

  //   }

  //   document.addEventListener('scroll', scrollHandler);
  // })
  return (
    <footer>
      <div className={`footer relative ${Style.footer} padding-medium`}>
        <div className={`bgImg ${Style.bgImg} absolute top-0 left-0 w-full h-full`}>
          <Image src={'/footer/footer-bg.jpg'} alt="footer Image" width={1920} height={400} className='object-cover'/>
        </div>
        <div className="container">
          <div className="row flex justify-between border-b-[1px] border-white pb-[20px] md:flex-wrap">
            <div className="logoWrapWithLinks">
              <div className={`logoWrap ${Style.logoWrap} relative`}>
                <Link href="/" className='emptyLink'>.</Link>
                <Image src={'/logo/footer_logo.png'} alt='Logo' width={250} height={200} />
              </div>
              <div className="socialLink">
              </div>
            </div>
            <div className="contentWrap max-w-[500px] tablet:max-w-[350px] md:max-w-[300px] sm:max-w-full sm:mt-[40px]">
              <div className="description">
                <p className='text-white'>Heal Ukraine Trauma is an initiative of Heal Traumas International, Inc, a U.S. based 501(c)(3) nonprofit. All donations are tax deductible to the fullest extent allowed by law. Tax ID Number: 88-2231121.</p>
              </div>
            </div>
            <div className={`${Style.linksWrap} linksWrap md:w-full md:mt-[40px] `}>
              <ul>
                <li className='mb-[20px]'>
                  <Link href="/our-work" className='text-yellow pb-[5px]'>Our Work</Link>
                </li>
                <li className='mb-[20px]'>
                  <Link href="/our-mission" className='text-yellow pb-[5px]'>Our Mission</Link>
                </li>
                <li className='mb-[20px]'>
                  <Link href="/our-team" className='text-yellow pb-[5px]'>Our Team</Link>
                </li>
                <li className='mb-[20px]'>
                  <Link href="/contact-us" className='text-yellow pb-[5px]'>Contact Us</Link>
                </li>
                <li className='mb-[20px]'>
                  <Link href="/privacy-policy" className='text-yellow pb-[5px]'>Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footerCopyWithSocialLinks pt-[20px]">
            <div className="row flex justify-between">
              <p className='text-white'>Copyright 2024 - Heal Traumas International, Inc.</p>
              <div className="socialWrap relative group">
                <Link href='https://www.linkedin.com/company/healtraumas/' className='emptyLink'>.</Link>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="desktop:h-full desktop:w-full">
                  <g id="Social / Linkedin">
                    <path id="Vector" d="M25.3125 2.8125H4.6875C4.19022 2.8125 3.71331 3.01004 3.36167 3.36167C3.01004 3.71331 2.8125 4.19022 2.8125 4.6875V25.3125C2.8125 25.8098 3.01004 26.2867 3.36167 26.6383C3.71331 26.99 4.19022 27.1875 4.6875 27.1875H25.3125C25.8098 27.1875 26.2867 26.99 26.6383 26.6383C26.99 26.2867 27.1875 25.8098 27.1875 25.3125V4.6875C27.1875 4.19022 26.99 3.71331 26.6383 3.36167C26.2867 3.01004 25.8098 2.8125 25.3125 2.8125ZM25.3125 25.3125H4.6875V4.6875H25.3125V25.3125ZM11.25 13.125V20.625C11.25 20.8736 11.1512 21.1121 10.9754 21.2879C10.7996 21.4637 10.5611 21.5625 10.3125 21.5625C10.0639 21.5625 9.8254 21.4637 9.64959 21.2879C9.47377 21.1121 9.375 20.8736 9.375 20.625V13.125C9.375 12.8764 9.47377 12.6379 9.64959 12.4621C9.8254 12.2863 10.0639 12.1875 10.3125 12.1875C10.5611 12.1875 10.7996 12.2863 10.9754 12.4621C11.1512 12.6379 11.25 12.8764 11.25 13.125ZM21.5625 16.4062V20.625C21.5625 20.8736 21.4637 21.1121 21.2879 21.2879C21.1121 21.4637 20.8736 21.5625 20.625 21.5625C20.3764 21.5625 20.1379 21.4637 19.9621 21.2879C19.7863 21.1121 19.6875 20.8736 19.6875 20.625V16.4062C19.6875 15.7846 19.4406 15.1885 19.001 14.749C18.5615 14.3094 17.9654 14.0625 17.3438 14.0625C16.7221 14.0625 16.126 14.3094 15.6865 14.749C15.2469 15.1885 15 15.7846 15 16.4062V20.625C15 20.8736 14.9012 21.1121 14.7254 21.2879C14.5496 21.4637 14.3111 21.5625 14.0625 21.5625C13.8139 21.5625 13.5754 21.4637 13.3996 21.2879C13.2238 21.1121 13.125 20.8736 13.125 20.625V13.125C13.1262 12.8954 13.2116 12.6741 13.365 12.5033C13.5185 12.3325 13.7293 12.2239 13.9575 12.1981C14.1857 12.1724 14.4154 12.2313 14.603 12.3637C14.7906 12.4961 14.9231 12.6928 14.9754 12.9164C15.6096 12.4862 16.349 12.2368 17.1142 12.1951C17.8795 12.1534 18.6416 12.321 19.3188 12.6798C19.996 13.0385 20.5626 13.575 20.9579 14.2315C21.3532 14.8881 21.5622 15.6399 21.5625 16.4062ZM11.7188 9.84375C11.7188 10.1219 11.6363 10.3938 11.4818 10.625C11.3272 10.8563 11.1076 11.0365 10.8506 11.143C10.5937 11.2494 10.3109 11.2772 10.0382 11.223C9.76537 11.1687 9.5148 11.0348 9.31813 10.8381C9.12146 10.6415 8.98753 10.3909 8.93327 10.1181C8.87901 9.84531 8.90686 9.56256 9.01329 9.3056C9.11973 9.04864 9.29997 8.82902 9.53123 8.6745C9.76249 8.51997 10.0344 8.4375 10.3125 8.4375C10.6855 8.4375 11.0431 8.58566 11.3069 8.84938C11.5706 9.1131 11.7188 9.47079 11.7188 9.84375Z" fill="white" className="group-hover:fill-[#f2dd30]">
                    </path>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Style from '../../styles/footer/footer.module.css'

export default function Footer() {
  // const [scrollPosition, setScrollPosition] = useState(0);
  // const [scale, setScale] = useState(1);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const height =
  //     document.documentElement.scrollHeight -
  //     document.documentElement.clientHeight;

  //     const windowScroll = document.documentElement.scrollTop;

  //   const scrolled = (windowScroll / height) * 100;
  //   console.log(scrolled);
  //   setScrollPosition(scrolled);
  //   };

  //   if(scrollPosition == 100 ) {
  //     setScale(1)
  // } else if(scrollPosition < 100) { 
  //       setScale(scrollPosition * 1)
  // }
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);




  return (
    <footer>
      <div className={`footer relative ${Style.footer} padding-medium`}>
        <div className={`bgImg ${Style.bgImg} absolute top-0 left-0 w-full h-full`}>
          <Image src={'/footer/footer-bg.jpg'} alt="footer Image" width={1920} height={400} className='object-cover' />
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
              <div className="socialWrap relative flex">
                <div className="item relative mr-[10px] group">
                  <Link href='https://www.linkedin.com/company/healtraumas/' className='emptyLink' target='_blank'>.</Link>
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="desktop:h-full desktop:w-full">
                    <g id="Social / Linkedin">
                      <path id="Vector" d="M25.3125 2.8125H4.6875C4.19022 2.8125 3.71331 3.01004 3.36167 3.36167C3.01004 3.71331 2.8125 4.19022 2.8125 4.6875V25.3125C2.8125 25.8098 3.01004 26.2867 3.36167 26.6383C3.71331 26.99 4.19022 27.1875 4.6875 27.1875H25.3125C25.8098 27.1875 26.2867 26.99 26.6383 26.6383C26.99 26.2867 27.1875 25.8098 27.1875 25.3125V4.6875C27.1875 4.19022 26.99 3.71331 26.6383 3.36167C26.2867 3.01004 25.8098 2.8125 25.3125 2.8125ZM25.3125 25.3125H4.6875V4.6875H25.3125V25.3125ZM11.25 13.125V20.625C11.25 20.8736 11.1512 21.1121 10.9754 21.2879C10.7996 21.4637 10.5611 21.5625 10.3125 21.5625C10.0639 21.5625 9.8254 21.4637 9.64959 21.2879C9.47377 21.1121 9.375 20.8736 9.375 20.625V13.125C9.375 12.8764 9.47377 12.6379 9.64959 12.4621C9.8254 12.2863 10.0639 12.1875 10.3125 12.1875C10.5611 12.1875 10.7996 12.2863 10.9754 12.4621C11.1512 12.6379 11.25 12.8764 11.25 13.125ZM21.5625 16.4062V20.625C21.5625 20.8736 21.4637 21.1121 21.2879 21.2879C21.1121 21.4637 20.8736 21.5625 20.625 21.5625C20.3764 21.5625 20.1379 21.4637 19.9621 21.2879C19.7863 21.1121 19.6875 20.8736 19.6875 20.625V16.4062C19.6875 15.7846 19.4406 15.1885 19.001 14.749C18.5615 14.3094 17.9654 14.0625 17.3438 14.0625C16.7221 14.0625 16.126 14.3094 15.6865 14.749C15.2469 15.1885 15 15.7846 15 16.4062V20.625C15 20.8736 14.9012 21.1121 14.7254 21.2879C14.5496 21.4637 14.3111 21.5625 14.0625 21.5625C13.8139 21.5625 13.5754 21.4637 13.3996 21.2879C13.2238 21.1121 13.125 20.8736 13.125 20.625V13.125C13.1262 12.8954 13.2116 12.6741 13.365 12.5033C13.5185 12.3325 13.7293 12.2239 13.9575 12.1981C14.1857 12.1724 14.4154 12.2313 14.603 12.3637C14.7906 12.4961 14.9231 12.6928 14.9754 12.9164C15.6096 12.4862 16.349 12.2368 17.1142 12.1951C17.8795 12.1534 18.6416 12.321 19.3188 12.6798C19.996 13.0385 20.5626 13.575 20.9579 14.2315C21.3532 14.8881 21.5622 15.6399 21.5625 16.4062ZM11.7188 9.84375C11.7188 10.1219 11.6363 10.3938 11.4818 10.625C11.3272 10.8563 11.1076 11.0365 10.8506 11.143C10.5937 11.2494 10.3109 11.2772 10.0382 11.223C9.76537 11.1687 9.5148 11.0348 9.31813 10.8381C9.12146 10.6415 8.98753 10.3909 8.93327 10.1181C8.87901 9.84531 8.90686 9.56256 9.01329 9.3056C9.11973 9.04864 9.29997 8.82902 9.53123 8.6745C9.76249 8.51997 10.0344 8.4375 10.3125 8.4375C10.6855 8.4375 11.0431 8.58566 11.3069 8.84938C11.5706 9.1131 11.7188 9.47079 11.7188 9.84375Z" fill="white" className="group-hover:fill-[#f2dd30]">
                      </path>
                    </g>
                  </svg>
                </div>
                <div className="item relative mr-[10px] group">
                  <Link href='https://www.facebook.com/healtraumas/' className='emptyLink' target='_blank'>.</Link>
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="desktop:h-full desktop:w-full">
                    <g id="Social / FB">
                      <path id="Vector" d="M15 2.8125C12.5895 2.8125 10.2332 3.52728 8.22899 4.86646C6.22477 6.20564 4.66267 8.10907 3.74022 10.336C2.81778 12.563 2.57643 15.0135 3.04668 17.3777C3.51694 19.7418 4.67769 21.9134 6.38214 23.6179C8.08659 25.3223 10.2582 26.4831 12.6223 26.9533C14.9865 27.4236 17.437 27.1822 19.664 26.2598C21.8909 25.3373 23.7944 23.7752 25.1335 21.771C26.4727 19.7668 27.1875 17.4105 27.1875 15C27.1841 11.7687 25.899 8.67076 23.6141 6.3859C21.3292 4.10104 18.2313 2.81591 15 2.8125ZM15.9375 25.2691V17.8125H18.75C18.9986 17.8125 19.2371 17.7137 19.4129 17.5379C19.5887 17.3621 19.6875 17.1236 19.6875 16.875C19.6875 16.6264 19.5887 16.3879 19.4129 16.2121C19.2371 16.0363 18.9986 15.9375 18.75 15.9375H15.9375V13.125C15.9375 12.6277 16.135 12.1508 16.4867 11.7992C16.8383 11.4475 17.3152 11.25 17.8125 11.25H19.6875C19.9361 11.25 20.1746 11.1512 20.3504 10.9754C20.5262 10.7996 20.625 10.5611 20.625 10.3125C20.625 10.0639 20.5262 9.8254 20.3504 9.64959C20.1746 9.47377 19.9361 9.375 19.6875 9.375H17.8125C16.8179 9.375 15.8641 9.77009 15.1609 10.4733C14.4576 11.1766 14.0625 12.1304 14.0625 13.125V15.9375H11.25C11.0014 15.9375 10.7629 16.0363 10.5871 16.2121C10.4113 16.3879 10.3125 16.6264 10.3125 16.875C10.3125 17.1236 10.4113 17.3621 10.5871 17.5379C10.7629 17.7137 11.0014 17.8125 11.25 17.8125H14.0625V25.2691C11.4197 25.0279 8.9716 23.7771 7.22747 21.7769C5.48334 19.7767 4.57743 17.1812 4.69819 14.5301C4.81894 11.879 5.95706 9.37659 7.8758 7.54325C9.79454 5.70991 12.3462 4.68684 15 4.68684C17.6538 4.68684 20.2055 5.70991 22.1242 7.54325C24.043 9.37659 25.1811 11.879 25.3018 14.5301C25.4226 17.1812 24.5167 19.7767 22.7725 21.7769C21.0284 23.7771 18.5803 25.0279 15.9375 25.2691Z" fill="white" className="group-hover:fill-[#f2dd30]">
                      </path>
                    </g>
                  </svg>
                </div>
                <div className="item relative group">
                  <Link href='https://www.instagram.com/healtraumas/' className='emptyLink' target='_blank'>.</Link>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="desktop:h-full desktop:w-full">
                      <g id="Social / Instagram">
                          <path id="Vector" d="M15 9.375C13.8875 9.375 12.7999 9.7049 11.8749 10.323C10.9499 10.9411 10.2289 11.8196 9.80318 12.8474C9.37744 13.8752 9.26604 15.0062 9.48308 16.0974C9.70013 17.1885 10.2359 18.1908 11.0225 18.9775C11.8092 19.7641 12.8115 20.2999 13.9026 20.5169C14.9938 20.734 16.1248 20.6226 17.1526 20.1968C18.1804 19.7711 19.0589 19.0501 19.677 18.1251C20.2951 17.2001 20.625 16.1125 20.625 15C20.6234 13.5086 20.0303 12.0788 18.9758 11.0242C17.9212 9.96968 16.4914 9.37655 15 9.375ZM15 18.75C14.2583 18.75 13.5333 18.5301 12.9166 18.118C12.2999 17.706 11.8193 17.1203 11.5355 16.4351C11.2516 15.7498 11.1774 14.9958 11.3221 14.2684C11.4667 13.541 11.8239 12.8728 12.3483 12.3483C12.8728 11.8239 13.541 11.4667 14.2684 11.3221C14.9958 11.1774 15.7498 11.2516 16.4351 11.5355C17.1203 11.8193 17.706 12.2999 18.118 12.9166C18.5301 13.5333 18.75 14.2583 18.75 15C18.75 15.9946 18.3549 16.9484 17.6516 17.6516C16.9484 18.3549 15.9946 18.75 15 18.75ZM20.625 2.8125H9.375C7.63509 2.81436 5.96697 3.50636 4.73667 4.73667C3.50636 5.96697 2.81436 7.63509 2.8125 9.375V20.625C2.81436 22.3649 3.50636 24.033 4.73667 25.2633C5.96697 26.4936 7.63509 27.1856 9.375 27.1875H20.625C22.3649 27.1856 24.033 26.4936 25.2633 25.2633C26.4936 24.033 27.1856 22.3649 27.1875 20.625V9.375C27.1856 7.63509 26.4936 5.96697 25.2633 4.73667C24.033 3.50636 22.3649 2.81436 20.625 2.8125ZM25.3125 20.625C25.3125 21.8682 24.8186 23.0605 23.9396 23.9396C23.0605 24.8186 21.8682 25.3125 20.625 25.3125H9.375C8.1318 25.3125 6.93951 24.8186 6.06044 23.9396C5.18136 23.0605 4.6875 21.8682 4.6875 20.625V9.375C4.6875 8.1318 5.18136 6.93951 6.06044 6.06044C6.93951 5.18136 8.1318 4.6875 9.375 4.6875H20.625C21.8682 4.6875 23.0605 5.18136 23.9396 6.06044C24.8186 6.93951 25.3125 8.1318 25.3125 9.375V20.625ZM22.5 8.90625C22.5 9.18438 22.4175 9.45626 22.263 9.68752C22.1085 9.91878 21.8889 10.099 21.6319 10.2055C21.3749 10.3119 21.0922 10.3397 20.8194 10.2855C20.5466 10.2312 20.296 10.0973 20.0994 9.90062C19.9027 9.70395 19.7688 9.45338 19.7145 9.1806C19.6603 8.90781 19.6881 8.62506 19.7945 8.3681C19.901 8.11114 20.0812 7.89152 20.3125 7.737C20.5437 7.58247 20.8156 7.5 21.0938 7.5C21.4667 7.5 21.8244 7.64816 22.0881 7.91188C22.3518 8.1756 22.5 8.53329 22.5 8.90625Z" fill="white" className="group-hover:fill-[#f2dd30]">
                        </path>
                      </g>
                    </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

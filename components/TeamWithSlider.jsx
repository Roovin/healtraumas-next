import React, {useState, useRef, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import IntroWithCta from './IntroWithCta'
import { operatingTeamDataIntro } from '../public/data/ourTeamPageData'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Style from '../styles/teamWithSlider.module.css'

export default function TeamWithSlider({ data }) {
    const [overlay, setOverlay] = useState(false);
    const [slider, setSlider] = useState();
    const scrollContainerRef = useRef(null);
	const slickSliderRef = useRef(null);
    const [activeTab, setActiveTab] = useState(0);
    const prevRef = useRef(null);
	const nextRef = useRef(null);

    const clickOverlay = (index) => {
        console.log(index);
		setOverlay((prevOverlay) => !prevOverlay);
		setSlider(index);
        setActiveTab(index);
	};

    const removeOverlay = () => {
		setOverlay((prevOverlay) => !prevOverlay);
	};
    const settings = {
		dots: false,
		centerMode: true,
		centerPadding: '367px',
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: slider,
		responsive: [
			{
				breakpoint: 2499,
				settings: {
					centerPadding: '200px',
				},
			},
			{
				breakpoint: 1600,
				settings: {
					centerPadding: '167px',
				},
			},
			{
				breakpoint: 1500,
				settings: {
					centerPadding: '100px',
				},
			},
			{
				breakpoint: 1200,
				settings: {
					centerPadding: '0',
				},
			},
		],
	};
    const handleNext = () => {
		if (nextRef.current) {
			nextRef.current.click();
		}
	};
    const handlePrev = () => {
		if (prevRef.current) {
			prevRef.current.click();
		}
	};
    useEffect(() => {
		prevRef.current = document.querySelector(
			'.team .slick-initialized .slick-prev',
		);
		nextRef.current = document.querySelector(
			'.team .slick-initialized .slick-next',
		);
	}, [slider]);
    return (
        <>
            <section className={`teamWithSlider ${data.sectionClass}`}>
                <div className="container">
                    <div className="intro text-center mb-[40px] max-w-[1050px] mx-auto">
                        <h2 className={` ${data.sectionClass === 'bg-blue' ? 'text-white' : 'text-blue'} mb-[20px]`}>{data.title}</h2>
                        {
                            data.title && (
                                <p>{data.description}</p>
                            )
                        }
                    </div>
                    <div className="cardWrapper flex flex-wrap w-full">
                        {data?.team?.map((item, index) => {
                            return (
                                <div key={index} className={`card relative group w-[calc(25%-30px)] mx-[15px] sm:w-full sm:mx-0 phablet:w-[calc(50%-20px)] phablet:mx-[10px] tablet:w-[calc(33%-20px)] tablet:mx-[10px] bg-white mb-[30px] border-black border-[2px] rounded-[10px] hover:shadow-xl`} onClick={() => clickOverlay(index)}>
                                    <span className='emptyLink'>.</span>
                                    <div className="imgWrap max-w-full overflow-hidden max-h-[300px] h-full">
                                        <Image src={item.imageUrl} alt={item.alt} width={300} height={300} className='w-full scale-1 group-hover:scale-[1.1] transition-all ease-in-out duration-300 sm:h-[300px] object-cover h-full' />
                                    </div>
                                    <div className="contentWrap px-[15px] py-[20px] relative h-[200px] sm:h-[150px]">
                                        <span className='font-bold '>{item.authorDesignation}</span>
                                        <h4 className='mt-[10px]'>{item.authorName}</h4>
                                        <div className="btnWrap absolute bottom-[20px] ">
                                            <span>Read More</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>	
            {overlay === true ? (
				<div
					className={`overlay team transition-all duration-300 xl-up:w-full desktop:w-[calc(100%-244px)] wide-nav-screen:max-w-[2500px] wide-nav-screen:mx-auto  fixed w-screen h-screen z-[9999] ${Style.overlay}`}
				>
					<div
						className={`${Style.overlaycardsWrap} relative top-[50%] tablet-landscape:top-0 md:top-0 lg:pb-[50px] pt-[70px]`}
					>
						<div
							className={`${Style.cross} w-[40px] h-[40px] cursor-pointer absolute right-[179px] top-[35px] xxl-up:right-[215px] lg:right-[15px] lg:top-[40px] wide-screen:right-[385px] ${Style.logoWrap} z-[9999]`}
							onClick={() => removeOverlay()}
						>
							<svg
								width="40"
								height="40"
								viewBox="0 0 40 40"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M26.8802 15.1879L22.0663 20L26.8802 24.8121C27.016 24.9479 27.1237 25.1091 27.1972 25.2865C27.2707 25.464 27.3085 25.6541 27.3085 25.8461C27.3085 26.0382 27.2707 26.2283 27.1972 26.4058C27.1237 26.5832 27.016 26.7444 26.8802 26.8802C26.7444 27.016 26.5832 27.1237 26.4058 27.1972C26.2284 27.2707 26.0382 27.3085 25.8462 27.3085C25.6541 27.3085 25.464 27.2707 25.2865 27.1972C25.1091 27.1237 24.9479 27.016 24.8121 26.8802L20 22.0662L15.1879 26.8802C15.0521 27.016 14.8909 27.1237 14.7135 27.1972C14.536 27.2707 14.3459 27.3085 14.1539 27.3085C13.9618 27.3085 13.7717 27.2707 13.5942 27.1972C13.4168 27.1237 13.2556 27.016 13.1198 26.8802C12.984 26.7444 12.8763 26.5832 12.8028 26.4058C12.7293 26.2283 12.6915 26.0382 12.6915 25.8461C12.6915 25.6541 12.7293 25.464 12.8028 25.2865C12.8763 25.1091 12.984 24.9479 13.1198 24.8121L17.9338 20L13.1198 15.1879C12.8456 14.9136 12.6915 14.5417 12.6915 14.1538C12.6915 13.766 12.8456 13.394 13.1198 13.1198C13.3941 12.8456 13.766 12.6915 14.1539 12.6915C14.5417 12.6915 14.9136 12.8456 15.1879 13.1198L20 17.9337L24.8121 13.1198C24.9479 12.984 25.1091 12.8763 25.2865 12.8028C25.464 12.7293 25.6541 12.6915 25.8462 12.6915C26.0382 12.6915 26.2284 12.7293 26.4058 12.8028C26.5832 12.8763 26.7444 12.984 26.8802 13.1198C27.016 13.2556 27.1237 13.4168 27.1972 13.5942C27.2707 13.7716 27.3085 13.9618 27.3085 14.1538C27.3085 14.3459 27.2707 14.536 27.1972 14.7135C27.1237 14.8909 27.016 15.0521 26.8802 15.1879ZM39 20C39 23.7578 37.8857 27.4313 35.7979 30.5558C33.7102 33.6804 30.7428 36.1156 27.271 37.5537C23.7992 38.9918 19.9789 39.368 16.2933 38.6349C12.6077 37.9018 9.22218 36.0922 6.56498 33.435C3.90778 30.7778 2.09821 27.3924 1.36509 23.7067C0.631969 20.0211 1.00823 16.2008 2.4463 12.729C3.88436 9.25722 6.31964 6.28982 9.44417 4.20208C12.5687 2.11433 16.2422 1 20 1C25.0375 1.00532 29.8671 3.00881 33.4292 6.57085C36.9912 10.1329 38.9947 14.9625 39 20ZM36.0769 20C36.0769 16.8203 35.134 13.712 33.3675 11.0681C31.6009 8.4243 29.09 6.36368 26.1524 5.14686C23.2147 3.93004 19.9822 3.61166 16.8636 4.23199C13.7449 4.85232 10.8803 6.3835 8.63191 8.6319C6.38351 10.8803 4.85233 13.7449 4.232 16.8635C3.61167 19.9822 3.93004 23.2147 5.14687 26.1524C6.36369 29.09 8.42431 31.6009 11.0681 33.3675C13.712 35.134 16.8203 36.0769 20 36.0769C24.2624 36.0721 28.3488 34.3767 31.3628 31.3628C34.3767 28.3488 36.0721 24.2624 36.0769 20Z"
									fill="white"
								/>
							</svg>
						</div>
						<Slider ref={slickSliderRef} {...settings}>
							{data?.team?.map((card, index) => {
								return (
									<div key={index} className="py-[10px] md:pb-0">
										<div
											className={`${Style.cardWrap} group xl:py-[20px] px-[70px] bg-white py-[40px] md:px-[20px] tablet-landscape:pb-[60px] xxl-up:min-h-[460px] bg-skyblue mx-[16px] flex md:flex-wrap relative card w-[calc(100%-28px)] h-full transition-all duration-[0.3s] my-[20px] border-[2px] border-white rounded-[16px] overflow-hidden`}
										>
											<div className="colTwo md:h-full w-[38%] xxl-up:w-fit pr-[14px] xxl-up:pb-[45px] md:w-full md:pr-0">
												<div className="imgwrap max-h-[312px] md:max-h-full xxl-up:h-[400px] xxl-up:w-[400px] h-full w-full max-w-[297px] overflow-hidden rounded-[16px] mb-[20px] mx-auto">
													<Image
														className="w-full h-full object-cover"
														width={297}
														height={312}
														src={card.imageUrl}
														alt="card image"
													/>
												</div>
											</div>
											<div className="colTwo w-[62%] xxl-up:w-fit pl-[10px] xxl-up:pl-[30px] md:w-full md:mt-[10px] md:pl-0">
												<div className="content md:pb-0 h-full">
													<div className="text-black mb-[30px] md:mb-0 max-w-[95%] md:text-center">
														<h3 className=" mb-[4px]">{card.authorName}</h3>
														<span className=" text-[16px] mb-[8px] font-[700] uppercase tracking-[1.65px]">
															{card.authorDesignation}
														</span>
														<p className=" mt-[30px] xxl:text-[14px] md:mt-[10px]"  dangerouslySetInnerHTML={{ __html: card.description }} />
													</div>
												</div>
											</div>
										</div>
									</div>
								);
							})} 
						</Slider>
						<div className="flex items-center justify-center mt-[0] ml-[8px] xxl:pb-[35px] z-[10]">
							<button
								className={` mr-[30px] ${Style.prevBtn}`}
								onClick={handlePrev}
							>
								<svg
									width="40"
									height="40"
									viewBox="0 0 40 40"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M20.0001 1.00195C30.4767 1.00195 39 9.52543 39 20.002C39 30.4785 30.4767 39.002 20.0001 39.002C9.52346 39.002 1 30.4785 1 20.002C1 9.52543 9.52346 1.00195 20.0001 1.00195ZM20.0001 36.401C29.0425 36.401 36.399 29.0445 36.3992 20.002C36.3992 10.9596 29.0427 3.60307 20.0001 3.6029C10.9576 3.60307 3.60117 10.9596 3.60117 20.0022C3.60117 29.0443 10.9576 36.401 20.0001 36.401Z"
										fill="white"
									/>
									<path
										d="M17.4485 11.8642C17.9564 11.3565 18.7799 11.3567 19.2876 11.8642C19.7956 12.3723 19.7956 13.1955 19.2874 13.7036L14.29 18.7007L28.7614 18.7021C29.4797 18.7023 30.0618 19.2844 30.0618 20.0029C30.0616 20.7211 29.4795 21.303 28.7613 21.303L14.2893 21.3016L19.2879 26.2998C19.7958 26.8077 19.7958 27.6313 19.2879 28.139C19.0339 28.3929 18.7012 28.52 18.3682 28.52C18.0355 28.52 17.7027 28.3929 17.4487 28.1392L10.2302 20.921C9.98626 20.6772 9.84927 20.3466 9.84927 20.0015C9.84945 19.6565 9.98643 19.326 10.2304 19.0816L17.4485 11.8642Z"
										fill="white"
									/>
								</svg>
							</button>
							<button className={Style.nextBtn} onClick={handleNext}>
								<svg
									width="40"
									height="40"
									viewBox="0 0 40 40"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M19.9999 1.00195C9.52328 1.00195 1 9.52543 1 20.002C1 30.4785 9.52328 39.002 19.9999 39.002C30.4765 39.002 39 30.4785 39 20.002C39 9.52543 30.4765 1.00195 19.9999 1.00195ZM19.9999 36.401C10.9575 36.401 3.60099 29.0445 3.60082 20.002C3.60082 10.9596 10.9573 3.60307 19.9999 3.6029C29.0424 3.60307 36.3988 10.9596 36.3988 20.0022C36.3988 29.0443 29.0424 36.401 19.9999 36.401Z"
										fill="white"
									/>
									<path
										d="M22.5515 11.8642C22.0436 11.3565 21.2201 11.3567 20.7124 11.8642C20.2044 12.3723 20.2044 13.1955 20.7126 13.7036L25.71 18.7007L11.2386 18.7021C10.5203 18.7023 9.93823 19.2844 9.93823 20.0029C9.9384 20.7211 10.5205 21.303 11.2387 21.303L25.7107 21.3016L20.7121 26.2998C20.2042 26.8077 20.2042 27.6313 20.7121 28.139C20.9661 28.3929 21.2988 28.52 21.6318 28.52C21.9645 28.52 22.2973 28.3929 22.5513 28.1392L29.7698 20.921C30.0137 20.6772 30.1507 20.3466 30.1507 20.0015C30.1506 19.6565 30.0136 19.326 29.7696 19.0816L22.5515 11.8642Z"
										fill="white"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			) : (
				''
			)}
        </>
    )
}

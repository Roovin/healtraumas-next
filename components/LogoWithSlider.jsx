import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
// import styles from 'LogoSlider.module.css'; // We'll define the styles next
// import styles from '../styles/LogoSlider.module.css'
// import { Autoplay } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import 'swiper/css/autoplay';

import { useKeenSlider } from 'keen-slider/react';
import KeenSlider from 'keen-slider'
import 'keen-slider/keen-slider.min.css';


const LogoSlider = ({ logos = [] }) => {
    //   const sliderRef = useRef(null);

    //   useEffect(() => {
    //     const slider = sliderRef.current;

    //     let scrollAmount = 0;
    //     let speed = 1; // Speed of the slider

    //     const animateSlider = () => {
    //       scrollAmount += speed;
    //       if (slider) {
    //         slider.scrollLeft = scrollAmount;

    //         // If we've scrolled past the width of one set of logos, reset to 0
    //         if (scrollAmount >= slider.scrollWidth / 2) {
    //           scrollAmount = 0;
    //         }
    //       }
    //       requestAnimationFrame(animateSlider);
    //     };

    //     animateSlider(); // Start the animation
    //   }, []);
    // const autoplaySpeed = 3000; 
    //   const [sliderRef, instanceRef] = useKeenSlider({
    //     defaultAnimation: {
    //       duration: 1500,
    //     },
    //     loop: true,
    //     autoplay: true,
    //     slides: {
    //       spacing: 32,
    //     },
       
    //   })
    const animation = { duration: 30000, easing: (t) => t }
    const [sliderRef, slider] = useKeenSlider({
        loop: true,
        renderMode: "performance",
        drag: false,
        created(s) {
        s.moveToIdx(5, true, animation)
        },
        updated(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
        animationEnded(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
        slides: {
            perView: 5, // Show 5 slides at a time
            spacing: 30 // Set spacing if needed
          },
      });

    
    return (

        <div ref={sliderRef} className="keen-slider">
            {logos.concat(logos).map((logo, index) => (
                <div className="keen-slider__slide" key={index}>
                    <img
                        src={logo.mediaItemUrl}
                        alt={logo.altText || `Logo ${index}`}
                        width={150}
                        height={80}
                    />
                </div>
            ))}
        </div>
     
    );
};

export default LogoSlider;

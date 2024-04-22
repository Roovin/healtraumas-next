import React from "react";
import Link from "next/link";
import Slider from "react-slick";

const testimonialSliderData = [
  {
    id: 1,
    quote:
      "Ukrainian children are proving to be exceptionally resilient in what is the bloodiest war in Europe since the Second World War. Their stories of survival and overcoming trauma are both heartbreaking and uplifting. Some children, however, need support. We know how to support them. <span>Helping now prevents a lot of suffering in the future.</span> ",
    author:
      ", MBBS, PhD, Professor of Child and Adolescent Psychiatry, Heal Ukraine Trauma Advisory Board Member",
  },
  {
    id: 2,
    quote:
      "Ukrainian children are proving to be exceptionally resilient in what is the bloodiest war in Europe since the Second World War. Their stories of survival and overcoming trauma are both heartbreaking and uplifting. Some children, however, need support. We know how to support them. <span>Helping now prevents a lot of suffering in the future.</span> ",
    author:
      ", MBBS, PhD, Professor of Child and Adolescent Psychiatry, Heal Ukraine Trauma Advisory Board Member",
  },
];

export default function Testimonial() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <section className="testimonial relative w-full padding-large bg-skyBlue ">
      <div className="container">
        <div className="testimonial_content_wrap relative w-full  max-w-[1050px] mx-auto flex overflow-hidden ">
          <Slider {...settings}>
            {testimonialSliderData.map((testimonialSlider) => (
              <div
                className="testimonial_content relative w-full text-center "
                key={testimonialSlider}
              >
                <p className=" mb-4">
                  <q
                    dangerouslySetInnerHTML={{
                      __html: testimonialSlider.quote,
                    }}
                  />
                </p>
                <p>
                  -{" "}
                  <Link href="/" className=" underline ">
                    Dennis Ougrin
                  </Link>
                  {testimonialSlider.author}
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

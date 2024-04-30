import React from "react";
import Link from "next/link";

const testimonialSliderData = [
  {
    id: 1,
    quote:
      "&ldquo;Ukrainian children are proving to be exceptionally resilient in what is the bloodiest war in Europe since the Second World War. Their stories of survival and overcoming trauma are both heartbreaking and uplifting. Some children, however, need support. We know how to support them. <span>Helping now prevents a lot of suffering in the future.</span>&ldquo; ",
    authorName: "Dennis Ougrin",
    author:
      ", MBBS, PhD, Professor of Child and Adolescent Psychiatry, Heal Ukraine Trauma Advisory Board Member",
  },
];

export default function Testimonial() {
  return (
    <section className="testimonial relative w-full bg-skyBlue ">
      <div className="container">
        <div className="testimonial_content_wrap relative w-full  max-w-[1050px] mx-auto flex overflow-hidden ">
          {testimonialSliderData.map((testimonialSlider) => (
            <div
              className="testimonial_content relative w-full text-center "
              key={testimonialSlider}
            >
              <blockquote>
                <p
                  className=" mb-4"
                  dangerouslySetInnerHTML={{
                    __html: testimonialSlider.quote,
                  }}
                />
              </blockquote>
              <p>
                -{" "}
                <Link href="/our-team" className=" underline ">
                  {testimonialSlider.authorName}
                </Link>
                {testimonialSlider.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

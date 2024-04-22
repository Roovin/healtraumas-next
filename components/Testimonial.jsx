import React from "react";
import Link from "next/link";

export default function Testimonial() {
  return (
    <section className="testimonial relative w-full padding-large bg-skyBlue ">
      <div className="container">
        <div className="testimonial_content_wrap relative w-full  max-w-[1050px] mx-auto text-center ">
          <p className=" mb-4">
            <q>
              Ukrainian children are proving to be exceptionally resilient in
              what is the bloodiest war in Europe since the Second World War.
              Their stories of survival and overcoming trauma are both
              heartbreaking and uplifting. Some children, however, need support.
              We know how to support them.{" "}
              <b className=" font-bold ">
                Helping now prevents a lot of suffering in the future.
              </b>
            </q>
          </p>

          <p>
            - <Link href="/">Dennis Ougrin</Link>, MBBS, PhD, Professor of Child
            and Adolescent Psychiatry, Heal Ukraine Trauma Advisory Board Member
          </p>
        </div>
      </div>
    </section>
  );
}

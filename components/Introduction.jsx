import React from "react";

export default function Introduction() {
  return (
    <section className=" introduction  padding-large relative w-full ">
      <div className="container">
        <div className="intro relative w-full max-w-[817px] mx-auto text-center ">
          <h2 className=" text-blue  mb-8 ">The Need</h2>
          <p className=" text-blue ">
            The ongoing war has subjected Ukraine’s population of{" "}
            <b className=" font-bold ">44 million</b> to widespread traumatic
            stress. The WHO estimates that{" "}
            <b className=" font-bold ">1 in 4 Ukrainians</b> are at risk of
            developing a severe mental health condition such as PTSD,
            depression, or anxiety as a result of the war. By healing trauma
            now, we can improve long-term mental health outcomes for millions of
            Ukrainians.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

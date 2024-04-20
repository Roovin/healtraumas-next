import React from "react";
import Button from "./button/Button";

export default function IntroWithContent() {
  return (
    <section className=" introWith_Content bg-[#cbe8fa]  padding-large relative w-full ">
      <div className="container">
        <div className="content relative w-full max-w-[1050px] mx-auto ">
          <h2 className=" text-center text-blue mb-8 ">What We Do</h2>
          <p className=" text-[#134fc3] mb-4 ">
            We work with international trauma experts and Ukrainian partners to
            scale existing evidence-based programs and pilot innovative
            solutions for:{" "}
          </p>
          <p className=" text-[#134fc3] mb-4 ">
            1) <b className=" font-bold ">Veterans</b> - Supporting the
            introduction of novel therapies to improve outcomes for those with
            severe mental health conditions.{" "}
          </p>
          <p className=" text-[#134fc3] ">
            2) <b className=" font-bold ">Children</b> – Implementing effective
            programs to address traumatic stress and reduce the risk of
            long-term mental health conditions.{" "}
          </p>
          <div className="button_wrap flex justify-center items-center mt-8 ">
            <Button
              buttonText="How We Help"
              buttonClass="default"
              url={"/our-work"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

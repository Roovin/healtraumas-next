import React, { useState, useEffect } from "react";
import Button from "./button/Button";
import { useForm, ValidationError } from "@formspree/react";

export default function FooterCta() {
  const [state, handleSubmit] = useForm("xeqyvnlk");
  const [formsuccess, setformsuccess] = useState(false);

  useEffect(() => {
    const clearForm = () => {
      const inputs = document.querySelectorAll(".contactForm form input");
      inputs.forEach((input) => {
        input.value = "";
      });
    };
    return clearForm;
  }, []);

  if (state.succeeded && !formsuccess) {
    alert("Thank You");
    setformsuccess(true);
  }
  return (
    <section className="FooterCta relative w-full bg-blue">
      <div className="container">
        <div className="intro text-center w-full  max-w-[1050px] mx-auto z-[2] ">
          <h2 className=" text-yellow mb-4">
            Download our &ldquo;Mental Health in Ukraine&ldquo; report
          </h2>
          <p className="text-white">
            Sign up with your email address to download our report on mental
            health in Ukraine.
          </p>
        </div>
        <div className="formWrap relative w-full  max-w-[1200px] mx-auto mt-8 z-[2]  ">
          <form
            onSubmit={handleSubmit}
            className="w-[calc(100%+16px)] ml-[-8px] flex lg:flex-wrap md:mx-auto md:inline-grid md:w-full" 
          >
            <label htmlFor="firstName" className=" text-[0] ">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              placeholder="First Name"
              className="relative w-full py-[22px] wrap max-w-[315px] sm:max-w-full mx-2 md:mx-auto mb-4 px-8 laptop:p-5 lg:p-4 rounded-none bg-white border-none outline-none transition duration-300 ease-in-out focus:outline-solid focus:outline-white focus:outline-[2px]"
            />
            <ValidationError
              prefix="FirstName"
              field="firstName"
              errors={state.errors}
            />
            <label htmlFor="LastName" className=" text-[0] ">
              Last Name
            </label>
            <input
              id="LastName"
              type="text"
              name="LastName"
              placeholder="Last Name"
              className="relative w-full py-[22px] wrap max-w-[315px] sm:max-w-full mx-2 md:mx-auto mb-4 px-8 laptop:p-5 lg:p-4 rounded-none bg-white border-none outline-none transition duration-300 ease-in-out focus:outline-solid focus:outline-white focus:outline-[2px]"
            />
            <ValidationError
              prefix="LastName"
              field="LastName"
              errors={state.errors}
            />
            <label htmlFor="email" className=" text-[0]  ">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email Address"
              className="relative w-full py-[22px] wrap max-w-[315px] sm:max-w-full mx-2 md:mx-auto mb-4 px-8 laptop:p-5 lg:p-4 rounded-none bg-white border-none outline-none transition duration-300 ease-in-out focus:outline-solid focus:outline-white focus:outline-[2px]"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <button
              type="submit"
              className="default h-full md:max-w-[150px] min-w-[150px] md:mx-auto"
              disabled={state.submitting}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}


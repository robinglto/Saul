import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contactos = () => {
  const form: any = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_u8f3zgp",
        "template_rmj43qr",
        form.current,
        "biN4YSFwO6XAWOsR5"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };

  return (
    <section className=" body-font relative ">
      <form ref={form} onSubmit={sendEmail}>
        <div className="container px-5  mx-auto ">
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="sm:text-xl text-xl font-medium title-font text-gray-200">
              Get In Touch
            </h1>
            <p className="text-gray-500 sm:w-2/4 w-3/4 mx-auto leading-relaxed text-base">
              My inbox is always open for new opportunities.
            </p>
          </div>
          <div className="lg:w-1/3 sm:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="leading-7 text-sm text-neutral-400/90">
                    Name
                  </label>
                  <input
                    required
                    minLength={2}
                    autoComplete="off"
                    aria-labelledby="name"
                    type="text"
                    id="name"
                    name="user_name"
                    className="w-full focus:bg-neutral-800 bg-neutral-800 bg-opacity-50   border-transparent  rounded-lg border-2 focus:ring-2   focus:ring-neutral-700 text-base outline-none text-gray-400/90 py-1 px-3 resize-none  transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="leading-7 text-sm text-neutral-400/90">
                    Email
                  </label>
                  <input
                    required
                    // pattern="[a-z0-9._%+-]+@(gmail|hotmail|yahoo|protonmail|outlook|pm|duck|dominio.com|dominio.me)+\.[a-z]{2,}$"
                    pattern="[a-z0-9._%+-]+@(gmail.com|protonmail.com|duck.com| hotmail.com |outlook.com |pm.me)"
                    autoComplete="off"
                    aria-labelledby="email"
                    type="email"
                    id="email"
                    name="user_email"
                    className="w-full focus:bg-neutral-800 bg-neutral-800 bg-opacity-50   border-transparent rounded-lg border-2 focus:ring-2 focus:ring-neutral-700  text-base outline-none text-gray-400/90 py-1 px-3 resize-none  transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label className="leading-7 text-sm text-neutral-400/90">
                    Message
                  </label>
                  <textarea
                    required
                    minLength={2}
                    autoComplete="off"
                    aria-labelledby="message"
                    id="message"
                    name="message"
                    className="w-full bg-neutral-800 bg-opacity-50   border-transparent rounded-lg border-2 focus:ring-2  focus:ring-neutral-700  h-32 text-base outline-none text-gray-400/90 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="w-full">
                <div className="flex justify-center">
                  <button
                    type="submit"
                    value="Send"
                    className="border-2 border-neutral-800 rounded-xl hover:rounded-md py-1 px-3 text-md  text-neutral-400/90 bg-neutral-800 hover:border-neutral-700 hover:bg-neutral-800/70 transition duration-500 ease-in-out cursor-pointer mt-2 -mb-1"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

import React from "react";
import Image from "next/image";
import Profile from "../public/profiletwo.jpeg";

export default function About() {
  return (
    <section id="/" className="mb-28 mt-28">
      <div className="subpixel-antialiased flex justify-center space-x-10 md:mx-10  mx-10 mb-10 mt-6">
        <div className="2xl:w-3/12 xl:w-2/5 lg:w-2/4 md:w-2/3 w-full sm:mx-10 ">
          <h2 className="subpixel-antialiased text-gray-100/90 text-3xl text-center">
            Hi, I'm Saul
          </h2>
          <p className="subpixel-antialiased text-lg text-gray-300/90 mb-4 text-center">
            Software Developer
          </p>
          <p className="text-gray-500 text-center">
            {/* I am passionate about technology and I am learning new things every
            day. I write about things in technology every day. */}
            I am a front-end engineer based in the Dominican Republic. I am
            focused on building accessible and human-centered products.
          </p>
        </div>
      </div>
      <div>
        <div className="flex justify-center space-x-6 mb-2  ">
          <Image
            className="rounded-full shadow-lg shadow-neutral-700 
             h-36 w-36  p-0.5 bg-neutral-800"
            src={Profile}
            alt="Profile"
            priority
          />
        </div>
      </div>
    </section>
  );
}

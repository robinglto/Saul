import React from "react";
import Image from "next/image";
import Profile from "../public/profiletwo.jpeg";

export default function About() {
  return (
    <section id="/">
      <div className="flex justify-center mb-2">
        <Image
          className="rounded-full shadow-lg shadow-neutral-700 
             h-40 w-40 mt-8 p-0.5 bg-neutral-800"
          src={Profile}
          alt="Profile"
          priority
        />
      </div>
      <div className="subpixel-antialiased flex justify-center    space-x-10 mx-10  text-center mb-36">
        <div>
          <h2 className="subpixel-antialiased text-gray-100/90 text-2xl">
            Hi, I am Saul
          </h2>
          <p className="subpixel-antialiased text-lg text-gray-300/90 mb-4">
            Software Developer
          </p>
          <p className="text-gray-500">
            I am a front-end engineer based in the Dominican Republic. I am{" "}
            <br className="sm:block hidden" />
            focused on building accessible and human-centered products.
          </p>
        </div>
      </div>
    </section>
  );
}

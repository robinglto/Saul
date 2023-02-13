import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function NavBar() {
  const router = useRouter();
  console.log(router.pathname);

  return (
    <div className="flex justify-around mt-12 mb-20 ">
      <div className=" ">
        <ul className="flex space-x-3">
          <li
            className={`hover:text-white subpixel-antialiased text-lg cursor-pointer transition duration-500 ease-in-out ${
              router.pathname === "/" ? "text-white" : "text-gray-500"
            }`}
          >
            <Link href={"/"}>Home</Link>
          </li>
          {/* <li
            className={`hover:text-white subpixel-antialiased text-lg cursor-pointer transition duration-500 ease-in-out ${
              router.pathname === "/contact" ? "text-white" : "text-gray-500"
            }`}
          >
            <Link href={"/blog"}>Blog</Link>
          </li> */}
          <li
            className={`hover:text-white subpixel-antialiased text-lg cursor-pointer transition duration-500 ease-in-out ${
              router.pathname === "/snippets" ? "text-white" : "text-gray-500"
            }`}
          >
            <Link href={"/snippets"}>Snippets</Link>
          </li>

          <li
            className={`hover:text-white subpixel-antialiased text-lg cursor-pointer transition duration-500 ease-in-out ${
              router.pathname === "/contact" ? "text-white" : "text-gray-500"
            }`}
          >
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

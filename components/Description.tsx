import React from "react";

export default function Description() {
  return (
    <div>
      <div className="subpixel-antialiased flex justify-center space-x-10 mx-10">
        <div>
          <h2 className="subpixel-antialiased text-2xl mb-4 text-gray-200">
            Code Blocks
          </h2>
          <p className="text-gray-500 mb-8">
            Here are some code snippets that can help you in different ways, be{" "}
            <br className="sm:block hidden" />
            it file configurations, css or how some hooks work.
          </p>
        </div>
      </div>
    </div>
  );
}

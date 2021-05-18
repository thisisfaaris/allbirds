import React from "react";

export default function index() {
  return (
    <div>
      /** msg01 */
      <div className="bg-lime px-4 py-1">
        <p className="text-white font-normal text-sm text-center">
          We're raising prices on all products by $1 today in support of the
          planet.
          <a href="#" className="underline cursor-pointer">
            Learn More.
          </a>
        </p>
      </div>
      /** msg02 */
      <div className="flex items-center space-x-4 bg-green-700 bg-opacity-20 px-8 py-3">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-14 w-14 transform rotate-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={0.5}
              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
            />
          </svg>
        </div>
        <div>
          <div className="flex space-x-2">
            <h2 className="text-sm font-medium text-gray-900">
              Pay It The Planet
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p className="mt-1 text-sm font-light text-gray-900 text-opacity-90">
            Every Black Friday purchase supports Fridays For Future
          </p>
        </div>
      </div>
    </div>
  );
}

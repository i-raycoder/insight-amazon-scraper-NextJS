"use client";
import React from "react";
import Image from "next/image";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [flyer, setFlyer] = React.useState(false);
  const [flyerTwo, setFlyerTwo] = React.useState(false);

  return (
    <header class="fixed top-0 w-full clearNav z-50">
      <div class="max-w-5xl mx-auto flex flex-wrap p-5 flex-col md:flex-row">
        <div class="flex flex-row items-center justify-between p-3 md:p-1">
          <a href="/" class="flex text-3xl text-white font-medium mb-4 md:mb-0">
            Insight.
          </a>
          <button
            class="text-white pb-4 cursor-pointer leading-none px-3 py-1 md:hidden outline-none focus:outline-none content-end ml-auto"
            type="button"
            aria-label="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              class="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        <div
          class={
            "md:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
        >
          <div class="md:ml-auto md:mr-auto font-4 pt-1 md:pl-14 pl-1 flex flex-wrap items-center md:text-base text-1xl md:justify-center justify-items-start">
            <a class="mr-11 pr-2 cursor-pointer text-gray-300 hover:text-white font-semibold tr04">
              Features
            </a>
            <div class="relative">
              <button
                type="button"
                class="
                   group rounded-md text-gray-300 inline-flex items-center text-base font-medium focus:outline-none pb-8'
                  "
                onMouseEnter={() => (setFlyer(!flyer), setFlyerTwo(false))}
              >
                <span class="tr04">Projects</span>
                <svg
                  class={
                    flyer === true
                      ? "transform rotate-180 ml-3 h-5 w-5 transition ease-out duration-200"
                      : "ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                  }
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                onMouseLeave={() => setFlyer(false)}
                class={
                  flyer
                    ? "opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 g327 border transform px-2 w-screen max-w-sm sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                    : "hidden opacity-0 translate-y-1 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                }
              >
                <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div class="relative grid gap-6 bg-black px-2 py-6 sm:gap-8 ">
                    <a
                      href="/"
                      class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-800 tr04"
                    >
                      <div class="ml-4">
                        <p class="text-base font-medium text-white">
                          Pantrastic.
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          Pantry Tracking App.
                        </p>
                      </div>
                    </a>
                    <a
                      href="/"
                      class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-800 tr04"
                    >
                      <div class="ml-4">
                        <p class="text-base font-medium text-white">
                          Crayo - Ai
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          Personalized Chat-Bot.
                        </p>
                      </div>
                    </a>
                    <a
                      href="/"
                      class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-800 tr04"
                    >
                      <div class="ml-4">
                        <p class="text-base font-medium text-white">
                          GameFlip.
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          Flashcard And Quiz App For Gamers.
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <a class="mr-12 md:ml-11 ml-0 cursor-pointer text-gray-300 hover:text-white font-semibold tr04">
              Get started
            </a>
            <a class="mr-5 cursor-pointer text-gray-300 hover:text-white font-semibold tr04">
              About me
            </a>
          </div>

          <a
            href="https://www.linkedin.com/in/muhammad-rayan-30604b252/" // Replace with your LinkedIn profile URL
            rel="noopener noreferrer"
            target="_blank"
            class="pl-7 invisible md:visible"
          >
            <svg
              width="30"
              height="30" // Adjust height to maintain aspect ratio
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              title="LinkedIn logo"
              class="linkedin-link--logo"
            >
              <path
              data-v-54e46119=""
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.447 20.453h-3.63v-5.74c0-1.371-.025-3.141-1.918-3.141-1.919 0-2.214 1.507-2.214 3.058v5.823H10.474V10.228h3.47v1.572h.05c.483-.914 1.665-1.881 3.428-1.881 3.672 0 4.354 2.418 4.354 5.568v4.966zM6.242 8.029c-1.189 0-2.153.971-2.153 2.186s.967 2.186 2.153 2.186c1.183 0 2.152-.971 2.152-2.186-.016-1.215-.969-2.186-2.152-2.186zm1.816 12.423H4.443V10.228h3.615v10.224zM20.447 4.446h-3.63v1.572h3.63v-1.572zM20.447 4.446h-3.63v1.572h3.63v-1.572zM20.447 4.446h-3.63v1.572h3.63v-1.572z"
                fill="white"
              />
            </svg>
          </a>

          <a
            data-v-54e46119=""
            href="https://github.com/i-raycoder"
            rel="noopener noreferrer"
            target="_blank"
            class="pl-7 invisible md:visible"
          >
            <svg
              data-v-54e46119=""
              width="30"
              height="20"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              title="GitHub logo"
              class="github-link--logo"
            >
              <path
                data-v-54e46119=""
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.3019 0C5.50526 0 0 5.50526 0 12.3019C0 17.7392 3.52669 22.3458 8.4127 23.977C9.0244 24.0902 9.25095 23.7126 9.25095 23.3804C9.25095 23.0858 9.2434 22.3156 9.23585 21.2885C5.81488 22.0286 5.08991 19.6422 5.08991 19.6422C4.53108 18.2225 3.72304 17.8373 3.72304 17.8373C2.60537 17.0746 3.80611 17.0897 3.80611 17.0897C5.03705 17.1803 5.69405 18.3584 5.69405 18.3584C6.78906 20.2388 8.57129 19.6951 9.27361 19.3779C9.38688 18.585 9.70406 18.0412 10.0514 17.7316C7.32524 17.4295 4.45556 16.3723 4.45556 11.66C4.45556 10.3158 4.93132 9.22074 5.72426 8.35984C5.59588 8.04266 5.17298 6.79662 5.83754 5.10501C5.83754 5.10501 6.87213 4.77274 9.22074 6.36616C10.2025 6.0943 11.2522 5.95837 12.3019 5.95082C13.344 5.95837 14.4013 6.0943 15.383 6.36616C17.7316 4.77274 18.7662 5.10501 18.7662 5.10501C19.4383 6.79662 19.0154 8.05021 18.887 8.35984C19.6724 9.22074 20.1482 10.3158 20.1482 11.66C20.1482 16.3874 17.271 17.422 14.5297 17.7316C14.9677 18.1092 15.3679 18.8644 15.3679 20.0123C15.3679 21.6586 15.3528 22.9801 15.3528 23.3879C15.3528 23.7202 15.5718 24.0978 16.1986 23.977C21.0846 22.3458 24.6038 17.7392 24.6038 12.3094C24.6038 5.50526 19.0985 0 12.3019 0Z"
                fill="white"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}

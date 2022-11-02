import React, { useState } from "react";
import { Transition } from "@headlessui/react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="sticky top-0">
      <nav className="bg-divcol outline outline-1 outline-purple-300 drop-shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                <div className="flex">

                    <div className="flex-shrink-0 cursor-pointer pt-1">
                        <img
                        className="h-8 w-8"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                        alt="Workflow"
                        />
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">

                        <a
                            href="#"
                            className="text-gray-300 hover:bg-purple-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Projects
                        </a>

                        <a
                            href="#"
                            className="text-gray-300 hover:bg-purple-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Calendar
                        </a>

                        <a
                            href="#"
                            className="text-gray-300 hover:bg-purple-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Reports
                        </a>


                        {/* this is the search bar breo */}
                        <div class="mx-auto max-w-16 place-self: end ">
                        <form className="max-w-sm px-4 ">
                              <div className="relative ">
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                  >
                                      <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                      />
                                  </svg>
                                  <input
                                      type="text"
                                      placeholder="Search"
                                      className="w-full py-2 pl-12 pr-4 text-white border rounded-md outline-none bg-gr hover:bg-divcol hover:border-purple-600
                                       focus:bg-divcol focus:border-purple-600"
                                  />
                              </div>
                          </form>
                        </div>


                        </div>
                    </div>
                </div>

                <div className="-mr-2 flex md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white
                         hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        aria-controls="mobile-menu"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        {!isOpen ? (
                        <svg
                            className="block h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                        ) : (
                        <svg
                            className="block h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                        )}
                    </button>
                </div>
            </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">

                
                {/* this is the search bar breo */}
                <div class="mx-auto max-w-16 place-self: end">
                    <form action="" class="relative mx-3 w-max">
                        <input type="search" 
                            class="peer cursor-pointer relative z-10 h-9 w-12 rounded-full border bg-transparent pl-12 outline-none 
                            focus:w-full focus:cursor-text focus:border-gray-700 focus:pl-16 focus:pr-4" />
                        <svg xmlns="http://www.w3.org/2000/svg" class="absolute inset-y-0 my-auto h-6 w-12 border-r 
                        border-transparent stroke-gray-500 px-3.5 peer-focus:border-gray-700 peer-focus:stroke-gray-900" 
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </form>
                </div>


                

                <a
                  href="#"
                  className="text-gray-300 hover:bg-purple-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Projects
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-purple-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Calendar
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-purple-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Reports
                </a>

              </div>

            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
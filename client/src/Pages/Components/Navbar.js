import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../Authentication/AuthContext";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const auth = useContext(AuthContext);

  const onLogout = () => {
    auth.logout();
  };

  return (
    <nav className="fixed top-0 z-50 w-full shadow-sm bg-divcol shadow-purple-500/50">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex ">
        
        <div className="">
          <div className="flex items-center justify-between py-4 md:block">
            
            <div className="md:hidden">
              <button className="p-2 text-purple-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => {
                  setNavbar(!navbar);
                  setSidebar(false);
                }}>

                {/* left side dropdown button*/}  
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>

            <Link to="/">
              <h2 className="text-2xl font-bold text-purple-100">GAMEIT</h2>
            </Link>
            
            {/* right side dropdown button*/}
            <div className="md:hidden">
              <button
                className="p-2 text-purple-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => {
                  setSidebar(!sidebar);
                  setNavbar(false);
                }}
              >
                {sidebar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>

          </div>
        </div>
        
        <div>
          
          {/* left side wala */}
          <div className={`flex-1 justify-self-center pb-3 mt-1 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}>
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {auth.isLoggedIn ? (
                <>
                  <li className="text-gray-500 hover:text-purple-600">
                    <Link to="/profile">Profile</Link>
                  </li>
                  <li className="text-gray-500 hover:text-purple-600">
                    <Link to="/post/new">New Post</Link>
                  </li>
                  <li className="text-gray-500 hover:text-purple-600">
                    <Link to="/help">Help</Link>
                  </li>
                  <li className="text-gray-600 hover:text-purple-600">
                    <Link to="/" onClick={auth.logout}>
                      Logout
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="text-gray-500 hover:text-purple-600">
                    <Link to="/login">Login</Link>
                  </li>
                  <li className="text-gray-500 hover:text-purple-600">
                    <Link to="/help">Help</Link>
                  </li>
                </>
              )}
            </ul>
          </div>

          
          {/* right side wala menu */}
          <div className={`flex-1 justify-self-center text-gray-500 pb-3 mt-1 md:hidden ${sidebar ? "block" : "hidden"}`}>
            Hello
          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;

/*
// import React, { useState } from "react";
// import { Transition } from "@headlessui/react";

// function Nav() {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div className="sticky top-0">
//       <nav className="bg-divcol outline outline-1 outline-purple-300 drop-shadow-md">
//         <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <div className="flex">

//               <div className="flex-shrink-0 pt-1 cursor-pointer">
//                 <img
//                   className="w-8 h-8"
//                   src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
//                   alt="Workflow"
//                 />
//               </div>

//               <div className="hidden md:block">
//                 <div className="flex items-baseline ml-10 space-x-4">

//                   <a
//                     href="/login"
//                     className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-purple-700 hover:text-white"
//                   >
//                     Login
//                   </a>

//                   <a
//                     href="#"
//                     className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-purple-700 hover:text-white"
//                   >
//                     Calendar
//                   </a>

//                   <a
//                     href="#"
//                     className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-purple-700 hover:text-white"
//                   >
//                     Reports
//                   </a>
//                   <div class="mx-auto max-w-16 place-self: end ">
//                     <form className="max-w-sm px-4 ">
//                       <div className="relative ">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                           />
//                         </svg>
//                         <input
//                           type="text"
//                           placeholder="Search"
//                           className="w-full py-2 pl-12 pr-4 text-white border rounded-md outline-none bg-gr hover:bg-divcol hover:border-purple-600 focus:bg-divcol focus:border-purple-600"
//                         />
//                       </div>
//                     </form>
//                   </div>

//                 </div>
//               </div>
//             </div>

//             <div className="flex -mr-2 md:hidden">
//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 type="button"
//                 className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-900 rounded-md hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
//                 aria-controls="mobile-menu"
//                 aria-expanded="false"
//               >
//                 <span className="sr-only">Open main menu</span>
//                 {!isOpen ? (
//                   <svg
//                     className="block w-6 h-6"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M4 6h16M4 12h16M4 18h16"
//                     />
//                   </svg>
//                 ) : (
//                   <svg
//                     className="block w-6 h-6"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>

//         <Transition
//           show={isOpen}
//           enter="transition ease-out duration-100 transform"
//           enterFrom="opacity-0 scale-95"
//           enterTo="opacity-100 scale-100"
//           leave="transition ease-in duration-75 transform"
//           leaveFrom="opacity-100 scale-100"
//           leaveTo="opacity-0 scale-95"
//         >
//           {(ref) => (
//             <div className="md:hidden" id="mobile-menu">
//               <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">

//                 <div class="mx-auto max-w-16 place-self: end">
//                   <form action="" class="relative mx-3 w-max">
//                     <input type="search"
//                       class="peer cursor-pointer relative z-10 h-9 w-12 rounded-full border bg-transparent pl-12 outline-none
//                             focus:w-full focus:cursor-text focus:border-gray-700 focus:pl-16 focus:pr-4" />
//                     <svg xmlns="http://www.w3.org/2000/svg" class="absolute inset-y-0 my-auto h-6 w-12 border-r
//                         border-transparent stroke-gray-500 px-3.5 peer-focus:border-gray-700 peer-focus:stroke-gray-900"
//                       fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
//                       <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                     </svg>
//                   </form>
//                 </div>

//                 <a
//                   href="#"
//                   className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-purple-700 hover:text-white"
//                 >
//                   Projects
//                 </a>

//                 <a
//                   href="#"
//                   className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-purple-700 hover:text-white"
//                 >
//                   Calendar
//                 </a>

//                 <a
//                   href="#"
//                   className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-purple-700 hover:text-white"
//                 >
//                   Reports
//                 </a>

//               </div>

//             </div>
//           )}
//         </Transition>
//       </nav>
//     </div>
//   );
// }

// export default Nav; */

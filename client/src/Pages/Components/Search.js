import React, { useContext, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function Search(){

    const [dropdown, setDropdown] = useState(false);
    const [type, setType] = useState("Post");
    const searchRef = useRef(document.createElement("input"));

    const _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const searchedstring = searchRef.current.value
            console.log({searchedstring, type})
        }
    }

    const onSearch = (e) => { 
        e.preventDefault();
        const searchedstring = searchRef.current.value
        console.log({searchedstring, type})
    }

    return (
        
        <form>
        <div className="flex">
            
            <div className="relative">

                {/*flter selector button*/}
                <button className={`flex items-center justify-between py-2.5 px-4 w-40
                text-sm font-medium text-center text-white
                bg-gr border border-gr
                ${dropdown? "rounded-tl-lg " : "rounded-l-lg hover:bg-gray-600"} `}
                onClick={(e) => {
                    e.preventDefault();
                    setDropdown(!dropdown);
                }}>

                    {type}

                    <svg
                        aria-hidden="true"
                        className="ml-1 w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                        />
                    </svg>

                </button>

                {/* option to choose from, droupdown interface */}
                <div className={`z-10 w-40
                absolute top-10 left-0
                rounded-b-lg
                shadow
                bg-gr 
                ${dropdown ? "block" : "hidden"}`}>
                    <ul className="py-1 text-sm text-gray-200">

                        <li>
                        <button className="inline-flex py-2 px-4 w-full hover:bg-gray-600 "
                        onClick={(e) => {
                            e.preventDefault();
                            setType("Community");
                            setDropdown(false);
                        }}>
                            Community
                        </button>
                        </li>

                        <li>
                        <button 
                        onClick={(e) => {
                            e.preventDefault();
                            setType("Post");
                            setDropdown(false);
                        }}
                        className="inline-flex rounded-b-lg py-2 px-4 w-full hover:bg-gray-600 ">
                            Post
                        </button>
                        </li>
                        
                    </ul>
                </div>

            </div>
            
            {/*search box input and button*/}
            <div className="relative w-full">
                
                <input
                    onKeyDown={_handleKeyDown}
                    type="search"
                    ref={searchRef}
                    id="search-dropdown"
                    className="block p-2.5 w-full z-20 text-sm bg-gr
                     rounded-r-lg 
                     border-l-2 border border-l-purple-900 border-gr placeholder-gray-400 text-white "
                    placeholder="Search Mockups, Logos, Design Templates..."
                    required=""
                />


                <button onClick={onSearch}
                className="absolute top-0 right-0 
                p-2.5 
                text-sm font-medium text-white 
                rounded-r-lg border border-purple-700 focus:outline-none bg-purple-600 hover:bg-purple-700 ">
                    
                    <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                    </svg>
                </button>


            </div>

        </div>
        </form>

    );

}



// {/* option to choose from, droupdown interface */}
// <div className={`z-10 w-44  rounded-b-lg divide-y divide-gray-100 shadow bg-gray-700 ${dropdown ? "block" : "hidden"}`}>
// <ul
//     className="py-1 text-sm text-gray-700 dark:text-gray-200"
//     aria-labelledby="dropdown-button"
// >
//     <li>
//     <button
//         type="button"
//         className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//     >
//         Post
//     </button>
//     </li>
//     <li>
//     <button
//         type="button"
//         className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//     >
//         Community
//     </button>
//     </li>
    
// </ul>
// </div>



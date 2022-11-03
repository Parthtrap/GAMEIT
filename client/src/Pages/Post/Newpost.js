import React, { useEffect, useState } from "react";


function Newpost() {

    const CommList = [
        {
            imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80",
            name: "BadAssAF",
        },
        {
            imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80",
            name: "Random",
        },
    ];

    const [countries, setCountries] = useState(null);
    const [inputValue, setInputValue] = useState("");
    const [selected, setSelected] = useState("");
    const [selectedUrl, setSelectedUrl] = useState("");
    const [open, setOpen] = useState(false);

    useEffect(() => {
        fetch("https://restcountries.com/v2/all?fields=name")
        .then((res) => res.json())
        .then((data) => {
            setCountries(CommList);
        });
    }, []);


    return (
        <div className="p-6 pt-16 bg-black grow h-screen ">
            
            <div classname="">
                <h1 className="text-center text-gray-300 font-medium">Create a post</h1>
                <br />
            </div>

            <div className="bg-divcol p-4 rounded-lg ">
                <form>

                    <div classname="m-4">
                        <input
                            required=""
                            className="w-full px-4 py-3 mb-2 rounded text-purple-100 focus:outline focus:outline-white bg-gr "
                            placeholder="Title"
                        />
                    </div>

                    <div className="w-full mb-4 rounded-lg bg-divcol ">

                        <textarea
                            required=""
                            className="w-full px-4 py-3 mb-2 text-sm rounded  text-purple-100 
                            resize-y 
                            focus:outline focus:outline-white bg-gr "
                            placeholder="Write  comment..."
                            rows="4"
                        />






                        
                        {/* add the dreop down here */ }
                        
                        <div className="w-72 font-medium h-80 mt-4">
                            <div
                                onClick={() => setOpen(!open)}
                                className={`bg-gr w-full p-2 flex items-center justify-between text-purple-100 rounded ${
                                !selected && "text-purple-100 "
                                }`}
                            >
                                <div className="flex items-center text-gray-400">
                                    <img class="w-10 h-10 rounded-full pr-12" src={selected?.imageUrl } ></img>
                                    {selected
                                    ? selected?.length > 25
                                        ? selected?.substring(0, 25) + "..."
                                        : selected
                                    : "Select Communtiy"}
                                </div>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" rotate-180 w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                </svg>
                        
                                {/* <BiChevronDown size={20} className={`${open && "rotate-180"}`} /> */}

                            </div>

                            <ul
                                className={`bg-gr mt-2 outline outline-1 outline-white overflow-y-auto ${
                                open ? "max-h-60" : "max-h-0"
                                } `}
                            >
                                <div className="flex items-center px-2 sticky top-0 bg-gr">
                                    
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>

                                {/*<AiOutlineSearch size={18} className="text-gray-700" />*/}
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value.toLowerCase())}
                                    placeholder="Enter community name"
                                    className="placeholder:text-gray-400 text-gray-400 bg-gr p-2 outline-none"
                                />
                                </div>

                                {countries?.map((country) => (
                                <li
                                    key={country?.name}
                                    className={`p-2 text-sm text-white hover:bg-purple-800 
                                    ${
                                    country?.name?.toLowerCase() === selected?.toLowerCase() &&
                                    "bg-purple-600 text-white"
                                    }
                                    ${
                                    country?.name?.toLowerCase().startsWith(inputValue)
                                        ? "block"
                                        : "hidden"
                                    }`}
                                    onClick={() => {
                                    if (country?.name?.toLowerCase() !== selected.toLowerCase()) {
                                        setSelected(country?.name);
                                        setSelectedUrl(country?.imageUrl);
                                        setOpen(false);
                                        setInputValue("");
                                    }
                                    }}
                                >
                                    <div className="flex items-center">
                                    <img class="w-10 h-10 rounded-full pr-12" src={country?.imageUrl} ></img>
                                    {country?.name}
                                    </div>
                                </li>
                                ))}

                            </ul>
                            </div>












                        <div className="flex items-center justify-between px-3 py-2 border-t border-gray-600 bg-divcol">
                            
                            <button type="submit" className="inline-flex items-center 
                            py-2.5 px-4 
                            text-xs font-medium text-center text-white
                            rounded-lg 
                            bg-purple-700
                            focus:ring-4 focus:ring-purple-900 
                            hover:bg-purple-800">
                                Post comment
                            </button>

                            <div className="flex pl-0 space-x-1 sm:pl-2">

                                <button type="button"
                                    className="inline-flex justify-center p-2 text-gray-400 rounded cursor-pointer hover:text-white hover:bg-purple-600">
                                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 
                                    0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </button>

                            </div>
                        </div>
                    </div>




                </form>
            </div>
        </div>
    );
}

export default Newpost;


import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AuthContext from "../Authentication/AuthContext";


function Newpost() {

    const [communityList, setCommunityList] = useState([]);
    const [selectedCommunity, setSelectedCommunity] = useState({});
    const [inputValue, setInputValue] = useState("");
    const [open, setOpen] = useState(false);
    const [userInfo, setUserInfo] = useState({ username: "" });
    const titleRef = useRef(document.createElement('imput'));
    const contentRef = useRef(document.createElement('imput'));
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    async function onPostSubmit(e) {
        e.preventDefault();
        const title = titleRef.current.value;
        const content = contentRef.current.value;

        if (title === "" || content === "") {
            toast.error("Please Fill all the Fields")
        }
        else if (selectedCommunity.name == null) {
            toast.error("Please Select a Community")
        }
        else {
            try {
                const postData = JSON.stringify({
                    title: title,
                    content: content,
                    community: selectedCommunity.name,
                    ownerId: auth.userEmail,
                    ownerUserName: userInfo.username
                });

                const response = await fetch("http://localhost:5000/api/post/new", {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: postData,
                });

                const responseData = await response.json();

                // Email Password Matches => Login
                if (response.status === 201) {
                    toast.success("Post Made Successfully", { theme: "dark" })
                    navigate("/");
                } else {
                    console.log(responseData.error);
                }
            } catch (err) {
                console.log(err);
                toast.error("Post making Failed", {
                    theme: "dark"
                })
                return;
            }
        }
    }

    useEffect(() => {
        const fetchCommunites = async () => {
            try {
                const response = await fetch(
                    "http://localhost:5000/api/community/get",
                    {
                        method: "GET",
                        headers: {
                            "Content-type": "application/json",
                        },
                    }
                );
                const responseData = await response.json();
                if (response.status === 500) {
                }
                else if (response.status === 404) {
                    setCommunityList([])
                }
                if (response.status === 201) {
                    setCommunityList(responseData.communities);
                } else {
                    console.log(responseData.error);
                }
            } catch (err) {
                console.log(err.message);
            }
        }
        const getUserInfo = async () => {
            try {
                const userFilter = JSON.stringify({ email: auth.userEmail });
                const response = await fetch(
                    "http://localhost:5000/api/user/get",
                    {
                        method: "POST",
                        headers: {
                            "Content-type": "application/json",
                        },
                        body: userFilter
                    }
                );
                const responseData = await response.json();
                if (response.status === 500) {
                }
                else if (response.status === 404) {
                }
                if (response.status === 201) {
                    setUserInfo(responseData);
                } else {
                    console.log(responseData.error);
                }
            } catch (err) {
                console.log(err.message);
            }
        }
        fetchCommunites();
        getUserInfo();

        // setCommunityList(CommList);
    }, []);

    return (
        <div className=" p-6 pt-16 min-h-[91vh] bg-black grow ">

            <div className="container mx-auto tofade md:max-w-2xl">

                {/* Heading */}
                <div className="">
                    <h1 className="p-2 text-2xl font-bold text-center text-gray-300">Create a post</h1>
                </div>

                {/* Input Form */}
                <div className="p-4 pb-2 mt-1 rounded-lg bg-divcol">
                    <form>
                        {/* Title Input */}
                        <div>
                            <input
                                required=""
                                ref={titleRef}
                                className="w-full px-4 py-3 mb-2 text-purple-100 rounded focus:outline focus:outline-white bg-gr "
                                placeholder="Title"
                            />
                        </div>


                        <div className="w-full mb-4 rounded-lg bg-divcol ">
                            <textarea
                                required=""
                                ref={contentRef}
                                className="w-full px-4 py-3 mb-2 text-sm text-purple-100 rounded resize-y focus:outline focus:outline-white bg-gr "
                                placeholder="Write  comment..."
                                rows="4"
                            />
                            {/* add the dreop down here */}
                            <div className="mt-4 font-medium w-72 h-80 ">
                                <div
                                    onClick={() => setOpen(!open)}
                                    className={`bg-gr w-full p-2 flex items-center justify-between text-purple-100 rounded ${!selectedCommunity && "text-purple-100 "
                                        }`}
                                >
                                    <div className="flex items-center text-gray-400 ">
                                        <img className="object-cover w-10 h-10 mr-2 rounded-full" src={selectedCommunity.imgsrc} />
                                        {selectedCommunity.name
                                            ? selectedCommunity.name.length > 25
                                                ? selectedCommunity.name.substring(0, 25) + "..."
                                                : selectedCommunity.name
                                            : "Select Communtiy"}
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 rotate-180 ">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                    </svg>
                                </div>

                                <ul
                                    className={`bg-gr mt-2 outline-white overflow-y-auto ${open ? "max-h-60 outline outline-1" : "max-h-0"
                                        } `}
                                >
                                    <div className="sticky top-0 flex items-center px-2 shadow bg-gr">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                        </svg>
                                        <input
                                            type="text"
                                            value={inputValue}
                                            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
                                            placeholder="Enter community name"
                                            className="p-2 text-gray-400 outline-none placeholder:text-gray-400 bg-gr"
                                        />
                                    </div>
                                    {communityList.map((country) => (
                                        <li
                                            key={country?.name}
                                            className={`p-2 text-sm text-white hover:bg-purple-800 
                                        ${country.name?.toLowerCase() === selectedCommunity.name?.toLowerCase() &&
                                                "bg-purple-600 text-white"
                                                }
                                        ${country.name?.toLowerCase().startsWith(inputValue)
                                                    ? "block"
                                                    : "hidden"
                                                }`}
                                            onClick={() => {
                                                if (country.name?.toLowerCase() !== selectedCommunity.name?.toLowerCase()) {
                                                    setSelectedCommunity(country);
                                                    setOpen(false);
                                                    setInputValue("");
                                                }
                                            }}
                                        >
                                            <div className="flex items-center">
                                                <img className="object-cover w-10 h-10 mr-2 rounded-full" src={country?.imgsrc} ></img>
                                                {country?.name}
                                            </div>
                                        </li>
                                    ))}

                                </ul>
                            </div>

                            {/* bottom row*/}
                            <div className="flex items-center justify-between px-3 py-2 border-t border-gray-600 bg-divcol">

                                {/*post comment buttton*/}
                                <button type="submit" onClick={onPostSubmit} className="inline-flex items-center 
                                py-2.5 px-4 
                                text-xs font-medium text-center text-white
                                rounded-lg 
                                bg-pur
                                focus:ring-4 focus:ring-purple-900 
                                hover:bg-hovpur">
                                    Post comment
                                </button>

                                {/*add atachment button*/}
                                <div className="flex pl-0 space-x-1 sm:pl-2">
                                    <button type="button"
                                        className="inline-flex justify-center p-2 text-gray-400 rounded cursor-pointer hover:text-white hover:bg-pur">
                                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 
                                        0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                                clipRule="evenodd"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Newpost;


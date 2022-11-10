import React, { useContext, useEffect, useState, useRef } from "react";
import CommunityListCard from "./Components/CommunityListCard";
import PostListCard from "./Components/PostListCard";
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from "react-router-dom";

export default function Profilepage() {
    const param = useParams();
    const [userData, setUserData] = useState({
        username: "Loading...",
        email: "Loading...",
        gender: "Loading",
        dateofbirth: Date.now(),
        notes: [],
        likedcommunities: [],
        likedposts: [],
        isadmin: false,
    });

    console.log(param);
    useEffect(() => {
        const fetchUser = async () => {
            const searchQuery = JSON.stringify({
                email: param.id
            });
            try {
                const response = await fetch(
                    "http://localhost:5000/api/user/get",
                    {
                        method: "POST",
                        headers: {
                            "Content-type": "application/json",
                        },
                        body: searchQuery,
                    }
                );

                const responseData = await response.json();

                if (response.status === 500) {

                }
                else if (response.status === 404) {
                    setUserData({
                        username: "No User Found",
                        email: "NoUser@NULL.404",
                        gender: "Unknown",
                        dateofbirth: Date.now(),
                        notes: [],
                        likedcommunities: [],
                        likedposts: [],
                        isadmin: false,
                    })
                }
                if (response.status === 201) {
                    console.log(responseData);
                    setUserData(responseData);
                } else {
                    console.log(responseData.error);
                }
            } catch (err) {
                console.log(err.message);
            }
        };
        fetchUser();
    }, [param]);

    const postList = [
        {
            id: "1",
            community: "BadAssAF",
            title: "Post 1",
            content: "Title is this thingy.... Don't Question it",
            date: "11-10-2011",
            likes: "6969",
            media: "https://i.imgur.com/fzR3S94.jpg",
            ownerID: "parth@gmail.com",
            comments: ["commentID1", "commentID2", "commentID3"],
        },
        {
            id: "2",
            community: "RandomAF",
            title: "Post 2",
            content: "Title is this thingy.... Don't Question it",
            date: "12-10-2011",
            likes: "15",
            media: "",
            ownerID: "lalwani@gmail.com",
            comments: ["commentID4", "commentID5"],
        },
        {
            id: "3",
            title: "Post 3",
            community: "KawaiiAF",
            content: "Title is this thingy.... Don't Question it",
            date: "13-10-2011",
            likes: "325",
            media: "https://i.imgur.com/ClH999d.mp4",
            ownerID: "gaurav@gmail.com",
            comments: ["commentID6", "commentID7"],
        },
        {
            id: "4",
            title: "Post 4",
            community: "BoredAF",
            content: "Title is this thingy.... Don't Question it",
            date: "14-10-2011",
            media: "",
            likes: "32",
            ownerID: "parth@gmail.com",
            comments: ["commentID8", "commentID9", "commentID10"],
        },
        {
            id: "5",
            title: "Post 1",
            community: "Can'tThinkOfNameAnymore",
            content: "Title is this thingy.... Don't Question it",
            date: "15-10-2011",
            media: "",
            likes: "326",
            ownerID: "lalwani@gmail.com",
            comments: ["commentID11"],
        },
    ];

    const [editname, setEditname] = useState(false);
    const usernameRef = useRef(document.createElement("div"));

    const edit = (e) => {
        e.preventDefault();
        const usernamestring = usernameRef.current.value
        console.log({ usernamestring })
        setEditname(!editname);

        if (editname) {
            toast.success("Username changed", {
                theme: "dark"
            })
        }

    }

    return (
        <div className="w-full mt-16 bg-black">
            <div className="flex flex-col gap-6 p-12 m-12 rounded-lg bg-divcol">


                {/*username and email*/}
                <div className="p-4 rounded-lg bg-gr">

                    {/*username*/}
                    <div className="mb-4 ">
                        <div className="font-semibold text-purple-300">Username:</div>
                        <div className="flex text-purple-100 ">

                            <div 
                            ref={usernameRef} 
                            contentEditable={`${editname}`} 
                            suppressContentEditableWarning={true}
                            className={`px-1 rounded-sm ${editname ? "outline outline-1  " : ""} `}>
                                {userData.username}
                            </div>

                            <div onClick={edit} className="cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                </svg>
                            </div>

                        </div>


                    </div>

                    {/*email*/}
                    <div className="mt-4">
                        <div className="font-semibold text-purple-300">Email:</div>
                        <div className="px-1 text-purple-100">{userData.email}</div>
                    </div>

                </div>


                {/*number of liked posts and posted posts */}
                <div className="flex justify-around p-4 rounded-lg bg-gr">

                    {/*posts count*/}
                    <div>

                        <div className="text-2xl font-bold text-center text-purple-300">6969</div>

                        <div className="text-center text-purple-400">Posts</div>

                        <svg className="block w-6 h-6 m-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                        </svg>


                    </div>


                    {/*followed community count*/}
                    <div>

                        <div className="text-2xl font-bold text-center text-purple-300">{userData.likedcommunities.length}</div>

                        <div className="text-center text-purple-400">Followed Community</div>

                        <svg className="block w-6 h-6 m-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>

                    </div>

                </div>


                {/*list of all posts posted*/}
                <div className="p-4 rounded-lg bg-gr ">
                    <div className="text-5xl font-bold text-center text-purple-300">Posts</div>
                    <div className="">
                        {postList.map((post) => {
                            return <PostListCard key={post.id} post={post} />;
                        })}
                    </div>
                </div>


            </div>
        </div>
    );
}


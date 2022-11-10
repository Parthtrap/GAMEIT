import { useParams } from "react-router-dom";
import React, { useContext, useEffect, useState, useRef } from "react";
//import profilePic from "./../../Assets/default_pfp.png"
import Commentitem from "../Post/Commentitem";
import { Link } from "react-router-dom";

export default function Postpage() {

  const params = useParams();
  const postID = params.id;
  const [postDetails, setPostDetails] = useState({
    title: 'Loading...',
    content: 'Loading... ',
    likes: 0,
    comments: [],
    postingtime: "2022-11-10T06:10:35.656Z",
    community: 'Loading...',
    ownerId: 'Loading...',
    ownerUserName: 'Loading...'
  })
  const commentRef = useRef(document.createElement("input"));

  const _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const commentstring = commentRef.current.value
      console.log({ commentstring })
    }
  }

  const onComment = (e) => {
    e.preventDefault();
    const commentstring = commentRef.current.value
    console.log({ commentstring })
  }

  useEffect(() => {
    const fetchPost = async () => {
      const searchQuery = JSON.stringify({
        id: params.id
      });
      try {
        const response = await fetch(
          "http://localhost:5000/api/post/get",
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
          setPostDetails({
            title: 'No user Found',
            content: 'No User No Content',
            likes: -100,
            comments: [],
            postingtime: "2022-11-10T06:10:35.656Z",
            community: 'Unknown',
            ownerId: 'NoUser@NULL.404',
            ownerUserName: 'Error 404'
          })
        }
        if (response.status === 201) {
          console.log(responseData);
          setPostDetails(responseData);
        } else {
          console.log(responseData.error);
        }
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchPost();
  }, [params])

  console.log(postID);
  return (
    <div className="flex justify-center w-full mt-16 bg-black">
      <div className="w-full p-8 m-12 rounded-lg md:max-w-2xl shadow-fb bg-divcol">

        <div className="flex items-center rounded-lg outline outline-1 outline-offset-4 outline-purple-500/50">

          <img
            src={"https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"}
            alt="img"
            className="w-10 h-10 rounded-full"
          />

          <div className="ml-4 text-white">

            <Link to={"/community/" + postDetails.community}>
              <span className="font-bold text-white cursor-pointer">r/{postDetails.community}</span>{' '}</Link>
            Posted by {' '}

            <Link to={"/profile/" + postDetails.ownerId}>
              <span className="text-white ">u/{postDetails.ownerUserName}</span>{' '}
            </Link>
            <br />

            <span className="text-sm text-white text-opacity-50 text-fGrey">
              {postDetails.postingtime}
            </span>

          </div>


        </div>

        <div className="w-full mt-4 text-white aspect-auto">
          {postDetails.title}
        </div>

        <div className="w-full mt-4 text-white aspect-auto">
          {postDetails.content}
        </div>

        <div className="flex items-center justify-between mt-4 text-white text-opacity-50 text-fGrey">
          <div>{postDetails.likes} Likes</div>
          <div>{postDetails.comments.length} Comments</div>
        </div>

        <div className="mt-4 border border-fGray border-opacity-10" />

        <div className="flex items-center justify-between mt-4 colour-white">
          <button className="flex items-center justify-center w-1/2 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
            </svg>
            <span className="ml-1 text-white">Like</span>
          </button>
        </div>

        <div className="mt-4 border border-fGray border-opacity-10" />

        <div className="relative flex mt-4">

          <input
            onKeyDown={_handleKeyDown}
            ref={commentRef}
            className="w-full px-4 py-3 text-white placeholder-gray-400 rounded-lg bg-gr focus:outline-none"
            placeholder="Write something to Roland…"
          />

          <button onClick={onComment}
            className="absolute top-0 right-0 
          p-2.5 
          text-sm font-medium text-white 
          rounded-r-lg border border-purple-700 focus:outline-none bg-purple-600 hover:bg-purple-700 ">

            <svg
              aria-hidden="true"
              className="w-[1.6rem] h-[1.6rem]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg>

          </button>

        </div>

        <Commentitem />
      </div>
    </div>);
}

{/* 

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  
</svg>


*/}

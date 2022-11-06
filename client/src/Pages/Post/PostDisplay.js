import { useParams } from "react-router-dom";
import Commentitem from "../Components/CommentDisplay";
import profilePic from "./../../Assets/default_pfp.png"

export default function PostDisplay() {
  const params = useParams();
  const postID = params.id;
  console.log(postID);
  return (
    <div className="flex w-full mt-16">
      <div className="w-full p-4 shadow-fb bg-divcol">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={profilePic }
              alt="img"
              className="w-10 h-10 rounded-full"
            />
            <div className="ml-4 text-white">
              <span className="font-bold text-white cursor-pointer">Ronald Oliver</span>{' '}
              was with{' '}
              <span className="font-bold text-white cursor-pointer">Steve Cunningham</span>{' '}
              <br />
              <span className="text-sm text-white text-opacity-50 text-fGrey">
                {' '}
                November 16, 2021{' '}
              </span>
            </div>
          </div>
        </div>
        <div className="w-full mt-4 text-white">
          hello
        </div>
        <img
          src="https://picsum.photos/id/1014/2000"
          alt="img"
          className="object-cover w-full mt-4 rounded h-72"
        />
        <div className="flex items-center justify-between mt-4 text-white text-opacity-50 text-fGrey">
          <div>26 Likes</div>
          <div>1 Comment</div>
        </div>
        <div className="mt-4 border border-fGray border-opacity-10" />
        <div className="flex items-center justify-between mt-4 colour-white">
          <button className="flex items-center justify-center w-1/2 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
            </svg>
            <span className="ml-1 text-white">Like</span>
          </button>
          <button className="flex items-center justify-center w-1/2 focus:outline-none ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg>
            <span className="ml-1 text-white">Comment</span>
          </button>
        </div>
        <div className="mt-4 border border-fGray border-opacity-10" />
        <div className="flex mt-4 space-x-2">
          <img
            src="https://picsum.photos/id/1015/500"
            alt="img"
            className="w-10 h-10 rounded-full"
          />
          <input
            className="w-full px-4 py-3 bg-gray-700 rounded-full bg-fFill focus:outline-none"
            placeholder="Write something to Roland…"
          />
        </div>
        <Commentitem />
      </div>
    </div>)
}

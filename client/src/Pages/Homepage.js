import React, { useEffect, useState } from "react";
import CommunityListCard from "./Components/CommunityListCard";
import PostListCard from "./Components/PostListCard";
import Search from "./Components/Search";

function Homepage() {

  const [PostList, setPostList] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/post/get",
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
          setPostList([])
        }
        if (response.status === 201) {
          console.log(responseData);
          setPostList(responseData);
        } else {
          console.log(responseData.error);
        }
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchPost();
  }, [])

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
  return (
    <div className="flex flex-col w-full h-auto p-5 mt-16 bg-black md:w-3/4">
      <div><Search /></div>
      <div className="">
        {PostList.map((post) => {
          return <PostListCard key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
}

export default Homepage;

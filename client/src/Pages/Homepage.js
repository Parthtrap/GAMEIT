import React from "react";
import Navbar from "./Components/Navbar";
import Postpage from "./Post/Postpage";
import Commentitem from "./Post/Commentitem";
import PostListCard from "./Components/PostListCard";

function Homepage() {
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
    <div className="w-full p-5 mt-16 md:w-3/4">
      <div>Search Bar and Filters</div>
      <div>
        {postList.map((post) => {
          return <PostListCard post={post} />;
        })}
      </div>
    </div>
  );
}

export default Homepage;

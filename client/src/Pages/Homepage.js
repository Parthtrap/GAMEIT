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
          setPostList(responseData);
        } else {
          console.log(responseData.message);
        }
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchPost();
  }, [])

  return (
    <div className="flex flex-col w-full h-auto min-h-[91vh] p-5 mt-16 bg-black md:w-3/4">
      <div className="tofade "><Search /></div>
      <div className="tofade delay-1000 ">
        {PostList.map((post) => {
          return <PostListCard key={post._id} post={post} />;
        })}
      </div>
    </div>
  );
}

export default Homepage;

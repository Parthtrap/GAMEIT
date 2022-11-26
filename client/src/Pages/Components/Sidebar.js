import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../Authentication/AuthContext";
import CommunityListCard from "./CommunityListCard";

function Sidebar() {

  const auth = useContext(AuthContext);
  const [LikedCommunityList, setLikedCommunityList] = useState([]);
  const [communityList, setCommunityList] = useState([]);

  async function fetchAll() {
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
    setCommunityList(responseData.communities);
  }
  async function fetchLiked() {
    const userSelector = JSON.stringify({ email: auth.userEmail });
    const response = await fetch(
      "http://localhost:5000/api/user/get",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: userSelector,
      }
    );
    const responseData = await response.json();
    setLikedCommunityList(responseData.likedcommunities);
  }


  useEffect(() => {
    if (auth.isLoggedIn) {
      fetchLiked()
    }
    fetchAll();
  }, [auth])

  return (

    <div className="hidden p-1 mt-16 text-white bg-black md:block md:w-1/4">
      <div className="RightIn">
        {auth.isLoggedIn ?
          <div className="">
            <h1 className={`${LikedCommunityList.length ? "block" : "hidden"}`}>Liked Communities</h1>
            {LikedCommunityList.map((liked) => {
              return <CommunityListCard key={liked} communityName={liked} />
            })}
          </div> : ""}

        <h1>All Communities</h1>

        <div className="max-h-[90vh] overflow-scroll scrollbar-hide p-1">
          {communityList.map((liked) => {
            return <CommunityListCard key={liked._id} communityName={liked.name} />
          })}
        </div>
      </div>
    </div>

  );
}

export default Sidebar;

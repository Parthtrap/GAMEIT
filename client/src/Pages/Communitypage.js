import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AuthContext from "./Authentication/AuthContext";
import PostListCard from "./Components/PostListCard";

function Communitypage() {
  const param = useParams();
  console.log({ id: param.id });
  const auth = useContext(AuthContext);
  console.log(auth);

  const [communityDetails, setCommunityDetails] = useState({
    followers: 0,
    imgsrc: "Loading...",
    name: "Loading...",
    tagline: "Loading...",
  })
  const [followed, setFollowed] = useState(false);

  async function following() {
    const followQuery = JSON.stringify({
      email: auth.user.email,
      community: param.id
    })
    try {
      const followResponse = await fetch(
        "http://localhost:5000/api/user/follow",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: followQuery,
        }
      )

      const followResponseData = await followResponse.json();
      if (followResponse.status === 201) {
        console.log("Followed");
      }
    }
    catch (err) {
      console.log(err.message);
    }
  }

  async function unfollowing() {
    const followQuery = JSON.stringify({
      email: auth.user.email,
      community: param.id
    })
    try {
      const followResponse = await fetch(
        "http://localhost:5000/api/user/unfollow",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: followQuery,
        }
      )

      const followResponseData = await followResponse.json();
      if (followResponse.status === 201) {
        console.log("Followed");
      }
    }
    catch (err) {
      console.log(err.message);
    }
  }
  function onFollowPress() {
    if (!auth.isLoggedIn) {
      // Gaurav Add Toast
    }
    else {
      console.log(auth.user.likedcommunities.find((e) => { return e === param.id }));
      if (auth.user.likedcommunities.find((e) => { return e === param.id }) === undefined) {
        console.log("Have to Follow");
        following();
        setFollowed(true)
      }
      else {
        console.log("Have to Unfollow");
        unfollowing();
        setFollowed(false)
      }
    }
  }
  useEffect(() => {
    const UpdateUser = async () => {
      const searchQuery = JSON.stringify({ "email": auth.user.email })
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
        if (response.status === 201) {
          auth.login(responseData);
          if (responseData.likedcommunities.find((e) => { return e === param.id }) === undefined) {
            console.log("Have to Follow");
            setFollowed(false)
          }
          else {
            console.log("Have to Unfollow");
            setFollowed(true);
          }
        } else {
          console.log(responseData.error);
        }
      } catch (err) {
        console.log(err.message);
      }
    }
    UpdateUser();
  }, [followed])


  useEffect(() => {
    const getCommunityDetails = async () => {
      const Communityname = JSON.stringify({
        name: param.id
      });
      try {
        const response = await fetch(
          "http://localhost:5000/api/community/get",
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: Communityname,
          }
        );

        const responseData = await response.json();

        if (response.status === 500) {
          console.log(response);
        }
        else if (response.status === 404) {
          setCommunityDetails({
            followers: 0,
            imgsrc: "Hllo",
            name: "INVALID COMMUNITY",
            tagline: "NO COMMUNITY NO TAGLINE",
          })
        }
        if (response.status === 201) {
          console.log(responseData.community);
          setCommunityDetails(responseData.community);
        } else {
          console.log(responseData.error);
        }
      } catch (err) {
        console.log(err.message);
      }
    }
    getCommunityDetails();
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
    <div className="w-full p-5 mt-16 bg-black md:w-3/4">

      <div className="flex items-center justify-between pr-3 space-x-4 rounded-xl bg-divcol ">

        <div className="flex items-center">
          <img className="w-20 h-20 ml-4 rounded-full" src={communityDetails.imgsrc} />
          <div className="ml-3">
            <div className="text-2xl font-bold text-purple-400">{communityDetails.name}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">{communityDetails.tagline}</div>
          </div>
        </div>

        <button onClick={onFollowPress} type="button" className="py-2 text-sm font-medium text-center text-white rounded-full bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl active:scale-95 px-9">
          {followed ? "Unfollow" : "Follow"}
        </button>


      </div>

      <div>Search Bar and Filters</div>
      <div>
        {postList.map((post) => {
          return <PostListCard key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
}

export default Communitypage;
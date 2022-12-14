import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import AuthContext from "./Authentication/AuthContext";
import PostListCard from "./Components/PostListCard";

function Communitypage() {
  const param = useParams();
  const auth = useContext(AuthContext);

  const [communityDetails, setCommunityDetails] = useState({
    followers: 0,
    imgsrc: "Loading...",
    name: "Loading...",
    tagline: "Loading...",
  })
  const [CommunityPostList, setCommunityPostList] = useState([])
  const [userInfo, setUserInfo] = useState({});
  const [followed, setFollowed] = useState(false);

  async function following() {
    const followQuery = JSON.stringify({
      email: auth.userEmail,
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
        toast.success("Now Following")
      }
    }
    catch (err) {
      toast.error("Unable to connect to the server");
      console.log(err.message);
    }
  }

  async function unfollowing() {
    const followQuery = JSON.stringify({
      email: auth.userEmail,
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
        toast.success("Now UNfollowed 😭")
      }
    }
    catch (err) {
      toast.error("Unable to connect to the server");
      console.log(err.message);
    }
  }

  function onFollowPress() {
    if (!auth.isLoggedIn) {
      // Gaurav Add Toast
      toast.warn("Please Log In before continuing.")
    }
    else {
      if (userInfo.likedcommunities.find((e) => { return e === param.id }) === undefined) {
        following();
        setFollowed(true)
      }
      else {

        unfollowing();
        setFollowed(false)
      }
    }
  }

  useEffect(() => {
    const UpdateUser = async () => {
      const searchQuery = JSON.stringify({ "email": auth.userEmail })
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
          setUserInfo(responseData);
          if (responseData.likedcommunities.find((e) => { return e === param.id }) === undefined) {
            setFollowed(false)
          }
          else {
            setFollowed(true);
          }
        } else {
          console.log(responseData.message);
        }
      } catch (err) {
        toast.error("Unable to connect to the server");
        console.log(err.message);
      }
    }
    if (auth.isLoggedIn)
      UpdateUser();
  }, [followed, param])


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
          setCommunityDetails(responseData.community);
        } else {
          console.log(responseData.message);
        }
      } catch (err) {
        toast.error("Unable to connect to the server");
        console.log(err.message);
      }

      const PostCommunity = JSON.stringify({
        community: param.id
      });
      try {
        const response = await fetch(
          "http://localhost:5000/api/post/community",
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: PostCommunity,
          }
        );

        const responseData = await response.json();

        if (response.status === 500) {
          console.log(response);
        }
        else if (response.status === 404) {
          setCommunityPostList([]);
        }
        if (response.status === 201) {
          setCommunityPostList(responseData);
        } else {
          console.log(responseData.error);
        }
      } catch (err) {
        toast.error("Unable to connect to the server");
        console.log(err.message);
      }
    }
    getCommunityDetails();
  }, [param])

  return (
    <div className="w-full p-5 mt-16 bg-black min-h-[91.3vh] md:w-3/4">

      <div className="flex items-center justify-between pr-3 space-x-4 tofade rounded-xl bg-divcol ">

        <div className="flex items-center">
          <img className="object-cover w-20 h-20 ml-4 rounded-full" src={communityDetails.imgsrc} />
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
        {CommunityPostList.map((post) => {
          return <PostListCard key={post._id} post={post} />;
        })}
      </div>
    </div>
  );
}

export default Communitypage;
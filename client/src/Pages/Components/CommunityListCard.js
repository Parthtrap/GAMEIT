import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CommunityListCard(props) {
    const [communityDetails, setCommunityDetails] = useState({
        followers: 0,
        imgsrc: "Loading...",
        name: "Loading...",
        tagline: "Loading...",
    });

    async function getCommunityDetails() {
        const Communityname = JSON.stringify({
            name: props.communityName
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
            setCommunityDetails(responseData.community);
        } catch (err) {
        }
    }

    console.log(communityDetails);
    useEffect(() => {
        getCommunityDetails();
    }, []);

    return (
        <Link to={"/community/" + communityDetails.name}>
            <div className="flex items-center p-3 my-4 rounded-xl bg-divcol hover:outline hover:outline-1 hover:outline-white">

                {/*image*/}
                <div>
                    <img className="w-10 h-10 rounded-full"
                        src={communityDetails.imgsrc} />
                </div>

                {/*name and member count*/}
                <div className="mx-2">
                    <div className="text-gray-200">
                        g/{communityDetails.name}
                    </div>
                    <div className="text-gray-500 ">{communityDetails.followers} members</div>
                </div>

            </div>
        </Link>
    );
}
import React from "react";
import { Link } from "react-router-dom";

export default function CommunityListCard(props){
    console.log(props);
    return(
        <Link to={"/community/" + props.post.id}>
        <div className="flex items-center p-3 my-4 rounded-xl bg-divcol hover:outline hover:outline-1 hover:outline-white">
            
            {/*image*/}
            <div>
            <img className="w-10 h-10 rounded-full" 
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"/>
            </div>
            
            {/*name and member count*/}
            <div className="mx-2">
                <div className="text-gray-200">
                    r/ThatBigDick {" · "} 
                    <span className="text-gray-400">tagline will be here</span>
                </div>
                <div className=" text-gray-500">6969 members</div>
            </div>

        </div>
        </Link>
    );
}
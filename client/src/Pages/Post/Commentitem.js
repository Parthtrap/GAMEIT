import React from "react";
import { Link } from "react-router-dom";

export default function Commentitem(prop) {
    return (
        <div className="px-4 py-2 my-1 rounded-lg border-b border-slate-500 hover:border-slate-200 hover:border hover:drop-shadow-[0_4px_3px_rgba(255,255,255,0.25)] bg-divcol">

            <div className="flex items-center justify-between">
                <div className="flex items-center ">
                    <Link to={"/profile/" + prop.commenter}>
                        <div className="text-white ">
                            <span className="font-bold cursor-pointer ">{prop.commenter}</span>{' '}
                        </div>
                    </Link>
                </div>
            </div>

            <div className="w-full text-white">
                {prop.comment}
            </div>

        </div>

    );
}
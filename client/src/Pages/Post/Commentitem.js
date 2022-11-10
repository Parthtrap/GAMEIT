import React from "react";

export default function Commentitem(prop) {
    return (
        <div className="px-2 my-6 rounded-lg bg-divcol outline outline-1 outline-purple-200">

            <div className="flex items-center justify-between ">
                <div className="flex items-center ">

                    <div className="text-white ">
                        <span className="font-bold cursor-pointer ">{prop.commenter}</span>{' '}
                    </div>
                </div>
            </div>

            <div className="w-full text-white">
                {prop.comment}
            </div>

        </div>

    );
}
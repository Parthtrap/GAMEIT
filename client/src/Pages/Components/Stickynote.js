import React, { useState } from "react";
import { Link } from "react-router-dom";
import MyModal from "./Stickeynotemodel"
function Stickynote(props) {

    const [showModal, setShowModal] = useState(false);
    function choosing(e) {
        e.preventDefault();
        props.onChoose(props.note.id);
    }

    const rotateOptions = ["-rotate-[5deg]", "-rotate-[4deg]", "-rotate-[3deg]", "-rotate-[2deg]", "-rotate-[1deg]", "rotate-[1deg]", "rotate-[2deg]", 'rotate-[3deg]', "rotate-[4deg]", "rotate-[5deg]"];
    let result = rotateOptions[Math.floor(Math.random() * (10))];

    return (
        <>
            <div className={`m-5 h-40 w-40 p-2 justify-center ${showModal ? "transition-none" : " "} hover:z-10 hover:scale-125 hover:rotate-0 transition ease-in-out delay-110 bg-yellow-300 ` + result} onClick={choosing}>
                <Link>
                    <h2 className="my-1 text-2xl font-bold text-center">{props.note.title}</h2>
                    <p className="text-center font-reenie drop-shadow-2xl truncate ...">
                        {props.note.content}
                    </p>
                </Link>
            </div>
        </>
    );

}

export default Stickynote;
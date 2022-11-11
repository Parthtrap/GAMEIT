import React, { useState } from "react";
import { Link } from "react-router-dom";
import MyModal from "./Stickeynotemodel"
function Stickynote(props) {

    const [showModal, setShowModal] = useState(false);
    function choosing(e) {
        e.preventDefault();
        props.onChoose(props.note);
    }

    const rotateOptions = ["-rotate-[5deg]", "-rotate-[4deg]", "-rotate-[3deg]", "-rotate-[2deg]", "-rotate-[1deg]", "rotate-[1deg]", "rotate-[2deg]", 'rotate-[3deg]', "rotate-[4deg]", "rotate-[5deg]"];
    let result = rotateOptions[Math.floor(Math.random() * (10))];

    return (
        <>
            <div className={`m-5 h-40 w-40 p-2 justify-center 
            hover:scale-125 hover:rotate-0 
            transition ease-in-out delay-110 
            active:transition-none` + " " + result + " " + props.note.color} onClick={choosing}>
                <Link>
                    <div className="my-1 h-[2rem] text-2xl font-bold text-center">{props.note.title}</div>
                    <p className="h-[6.5rem] block text-center text-2xl font-reenie drop-shadow-2xl stickeynote ">
                        {props.note.content}
                    </p>
                </Link>
            </div>
        </>
    );

}

export default Stickynote;
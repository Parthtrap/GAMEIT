import React, { useState } from "react";
import MyModal from "./Stickeynotemodel"
function Stickynote(props) {

    const [showModal, setShowModal] = useState(false);
    
    const degr =  Math.floor(Math.random() * (10) ) - 5;
    let rot = degr.toString();
    let text = "rotate-"
    let result = text.concat(rot);

    return(
        <>

            <div className={`m-5 h-40 w-40 p-2 justify-center ${showModal ? "transition-none":" "} ${result} hover:z-10 hover:scale-125 hover:rotate-0 transition ease-in-out delay-110 bg-yellow-300`}>
            
            <a onClick={() => setShowModal(true)}>

                <h2 className="text-center my-1 text-2xl font-bold">Title here {result}</h2>

                <p className="text-center font-reenie drop-shadow-2xl truncate ...">
                    Notes here wot i fthe notes got bigger 
                    and bigger ges wot will happen 
                </p>


            </a>

            </div>


        </>

    );

}

export default Stickynote;
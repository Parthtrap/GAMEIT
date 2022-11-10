import { useState, useEffect } from "react";
import Todolist from "./Components/Todolist";

export default function(){

    const listlist = [

        [
            {
                status: true,
                disc: "i have to help my team mate wing this thing "
            },
            {
                status: false,
                disc: "make this website work"
            },
            {
                status: true,
                disc: "It aint gonna work lets be hones with ourselves "
            }
        ],
        [
            {
                status: true,
                disc: "i have to help my team mate wing this thing "
            },
            {
                status: false,
                disc: "make this website work"
            },
            {
                status: true,
                disc: "It aint gonna work lets be hones with ourselves "
            }
        ],
        [
            {
                status: true,
                disc: "i have to help my team mate wing this thing "
            },
            {
                status: false,
                disc: "make this website work"
            },
            {
                status: true,
                disc: "It aint gonna work lets be hones with ourselves "
            }
        ],
        [
            {
                status: true,
                disc: "i have to help my team mate wing this thing "
            },
            {
                status: false,
                disc: "make this website work"
            },
            {
                status: true,
                disc: "It aint gonna work lets be hones with ourselves "
            }
        ],
        [
            {
                status: true,
                disc: "Segment trees "
            },
            {
                status: false,
                disc: "Bit masking dp"
            },
            {
                status: true,
                disc: "Question absolute diff should be less for both the sets "
            }
        ],
        [
            {
                status: true,
                disc: "SurfXL"
            },
            {
                status: false,
                disc: "Mouse"
            },
            {
                status: true,
                disc: "Rishav ki cable"
            },
            {
                status: true,
                disc: "Powerbank "
            },
            {
                status: true,
                disc: "Mutter bhugiya"
            },
            {
                status: true,
                disc: "Extension cord "
            },
            {
                status: true,
                disc: "Sd card "
            },
        ],
        [
            {
                status: true,
                disc: "WE ARE LOSING "
            },
        ],

        
    ]

    return (

        <div className="bg-black w-full mt-16">
            <div className="m-16 rounded-lg flex flex-wrap gap-4 place-items-start justify-evenly p-4 bg-divcol">

                {listlist.map((todolist) => {
                    return <>
                    <Todolist todolist={todolist} />
                    </>
                })}

            </div>
        </div>

    );
}
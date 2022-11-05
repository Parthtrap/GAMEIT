import React from 'react';
import { useNavigate} from "react-router-dom";

export default function MyModal({visible, note}){
    
    let navigate = useNavigate();

    return(
        <div className=" fixed inset-0 z-100 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
            <div className="p-2 rounded-lg border shadow-md bg-gr border-gray-700 flex-col mx-5 mt-16 min-h-[75%] min-w-[75%]">
                <div className="flex mx-5 md:mx-16 my-5 justify-between">
                    
                    <div className="flex -space-x-4 ">
                        <div className="ease-in-out rounded-full outline outline-1 outline-white bg-purple-900 h-10 w-10 hover:z-150 hover:scale-125"></div>
                        <div className="ease-in-out rounded-full outline outline-1 outline-white bg-yellow-300 h-10 w-10 hover:z-150 hover:scale-125"></div>
                        <div className="ease-in-out rounded-full outline outline-1 outline-white bg-red-300 h-10 w-10 hover:z-150 hover:scale-125"></div>
                        <div className="ease-in-out rounded-full outline outline-1 outline-white bg-black h-10 w-10 hover:z-150 hover:scale-125"></div>
                        <div className="ease-in-out rounded-full outline outline-1 outline-white bg-green-300 h-10 w-10 hover:z-150 hover:scale-125"></div>
                        <div className="ease-in-out rounded-full outline outline-1 outline-white bg-red-900 h-10 w-10 hover:z-150 hover:scale-125"></div>
                        <div className="ease-in-out rounded-full outline outline-1 outline-white bg-cyan-700 h-10 w-10 hover:z-150 hover:scale-125"></div>
                        <div className="ease-in-out rounded-full outline outline-1 outline-white bg-red-600 h-10 w-10 hover:z-150 hover:scale-125"></div>
                        <div className="ease-in-out rounded-full outline outline-1 outline-white bg-green-900 h-10 w-10 hover:z-150 hover:scale-125"></div>
                    </div>

                    {/*close button*/}
                    <button type="button" 
                    onClick={() => navigate(-1)}
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                    <svg aria-hidden="true" className="w-7 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 
                        1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 
                        11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 
                        1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                    </button>

                </div>

                <div className="p-2 mx-5 md:mx-16 my-5 h-96 rounded-lg bg-yellow-300 shadow-lg">
                
                    <div contenteditable="true" className="text-center my-1 text-2xl font-bold">Title here </div>

                    <p contenteditable="true"  className="text-left font-reenie drop-shadow-2xl overflow-y-auto">                        
                       
                    </p>

                </div> 

                {/*Save Changes button*/}
                <button type="button" 
                className="text-white 
                bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl 
                focus:ring-4 focus:outline-none focus:ring-blue-300 
                mx-5 md:mx-16 px-5 py-2 
                font-medium rounded-full text-sm text-center">
                    Save Changes
                </button>

            </div>
        </div>
    );

}
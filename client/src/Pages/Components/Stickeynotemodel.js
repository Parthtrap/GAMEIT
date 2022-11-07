import React, { useRef, useState } from 'react';

export default function MyModal(prop) {

    const [selectedColor, setSelectedColor] = useState(prop.note.color);

    const titleRef = useRef(document.createElement('div'));
    const contentRef = useRef();

    function onSaveChanges() {
        const title = titleRef.current.innerHTML;
        const content = contentRef.current.innerHTML;
        console.log({ id: prop.note.id, title, content, selectedColor });
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 z-100 backdrop-blur-sm">
            <div className="p-2 rounded-lg border shadow-md bg-gr border-gray-700  mt-16 md:max-w-3xl container mx-auto">
                <div className="flex justify-between mx-5 my-5 md:mx-16">

                    <div className="flex  shadow-2xl shadow-purple-500/40 -space-x-4 ">
                        <div className="w-10 h-10 ease-in-out bg-yellow-300 rounded-full outline outline-1 outline-white hover:z-150 hover:scale-125" onClick={() => { setSelectedColor("bg-yellow-300") }}></div>
                        <div className="w-10 h-10 ease-in-out bg-purple-900 rounded-full outline outline-1 outline-white hover:z-150 hover:scale-125" onClick={() => { setSelectedColor("bg-purple-900") }}></div>
                        <div className="w-10 h-10 ease-in-out bg-red-300 rounded-full outline outline-1 outline-white hover:z-150 hover:scale-125" onClick={() => { setSelectedColor("bg-red-300") }}></div>
                        <div className="w-10 h-10 ease-in-out bg-green-300 rounded-full outline outline-1 outline-white hover:z-150 hover:scale-125" onClick={() => { setSelectedColor("bg-green-300") }}></div>
                        <div className="w-10 h-10 ease-in-out bg-red-900 rounded-full outline outline-1 outline-white hover:z-150 hover:scale-125" onClick={() => { setSelectedColor("bg-red-900") }}></div>
                        <div className="w-10 h-10 ease-in-out bg-cyan-700 rounded-full outline outline-1 outline-white hover:z-150 hover:scale-125" onClick={() => { setSelectedColor("bg-cyan-700") }}></div>
                        <div className="w-10 h-10 ease-in-out bg-red-600 rounded-full outline outline-1 outline-white hover:z-150 hover:scale-125" onClick={() => { setSelectedColor("bg-red-600") }}></div>
                        <div className="w-10 h-10 ease-in-out bg-green-900 rounded-full outline outline-1 outline-white hover:z-150 hover:scale-125" onClick={() => { setSelectedColor("bg-green-900") }}></div>
                    </div>

                    {/*close button*/}
                    <button type="button"
                        onClick={prop.onClose}
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                        <svg aria-hidden="true" className="h-5 w-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 
                        1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 
                        11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 
                        1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                    </button>

                </div>

                <div className={"p-2 mx-5 my-5 overflow-scroll rounded-lg shadow-lg scrollbar-hide md:mx-16 h-96 " + selectedColor}>

                    <div ref={titleRef} contenteditable="true" className="my-1 text-2xl font-bold text-center">{prop.note.title}</div>
                    <p ref={contentRef} contenteditable="true" className="overflow-y-auto text-left font-reenie drop-shadow-2xl">
                        {prop.note.content}
                    </p>

                </div>

                {/*Save Changes button*/}
                <button type="button"
                    className="px-5 py-2 mx-5 text-sm font-medium text-center text-white rounded-full bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 md:mx-16" onClick={onSaveChanges}>
                    Save Changes
                </button>

            </div>
        </div >
    );

}
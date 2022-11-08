import { useState, useEffect } from "react";
import MyModal from "./Components/Stickeynotemodel";
import Stickynote from "./Components/Stickynote";

function Stickynotespage() {

  const noteList = [
    {
      id: "1",
      title: "Post 1",
      content: "Title is this thingy Don't Question it",
      color: "bg-yellow-300",
    },
    {
      id: "2",
      title: "Post 2 jbdb",
      content: "Title is this ashdgasdgasgdasdhaksdhhdakshduahs thingy Don't Question it, but wot if i make it big ",
      color: "bg-yellow-300"
    },
    {
      id: "3",
      title: "Post 3",
      content: "Title is this thingy Don't Question it",
      color: "bg-green-300"
    },
    {
      id: "4",
      title: "Post 4",
      content: "Title is this thingy Don't Question it",
      color: "bg-yellow-300"
    },
    {
      id: "5",
      title: "Post 5",
      content: "Title is this thingy Don't Question it",
      color: "bg-red-600"
    },
  ];
  const [selectedNote, setSelectedNote] = useState(null);

  function onClose(e) {
    e.preventDefault();
    setSelectedNote(null);
  }

  function onChoose(note) {
    setSelectedNote(note);
  }

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
  
    window.addEventListener('resize', handleWindowResize);
  
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }
  

  return (

    <div className="flex flex-wrap bg-black w-full min-h-[91vh] mt-16 place-content-center">
      {noteList.map((note) => {
        return <>
          <Stickynote note={note} onChoose={onChoose} />
        </>
      })}
      {selectedNote != null ? <MyModal note={selectedNote} onClose={onClose} /> : <></>}

      {/*add button*/}
      <button className={`fixed bottom-0 right-1 md:right-[20%] 
       m-10
       bg-divcol
       rounded-full 
       w-20 h-20 z-10
       cursor-pointer
       shadow-md shadow-purple-900
       transition-all duration-600 ease-in-out
       hover:scale-125
       active:scale-75 active:bg-purple-700
       justify-center items-center flex
       peer
       ${selectedNote != null ? "hidden" : "block"}
       `}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
        
      </button>

      {/*
      <span className="absolute bottom-[6rem] right-[4.2rem] md:right-[25.5%] text-white invisible 
      peer-hover:visible
      peer-hover:-translate-y-[2rem] transition duration-[1300ms]">
        ADD
      </span>
      */}

    </div>

  );
}



export default Stickynotespage;
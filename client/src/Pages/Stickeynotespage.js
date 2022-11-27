import { useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import AuthContext from "./Authentication/AuthContext";
import NewMyModal from "./Components/NewStickeynotemodel";
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

  const auth = useContext(AuthContext);

  useEffect(() => {
    const getPosts = async () => {
      const searchQuery = JSON.stringify({ "email": auth.userEmail })
      try {
        const response = await fetch(
          "http://localhost:5000/api/user/get",
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: searchQuery,
          }
        );

        const responseData = await response.json();
        if (response.status === 201) {
          console.log(responseData.notes);
        } else {
          console.log(responseData.message);
        }
      } catch (err) {
        toast.error("Unable to connect to the server");
        console.log(err.message);
      }
    }
    getPosts();
  }, [])



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
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }


  return (

    <div className="bg-black w-full min-h-[91vh] mt-16 place-content-center">

      <div className="relative flex flex-wrap justify-center p-12 m-12 rounded-lg bg-divcol tofade">

        {noteList.map((note) => {
          return <>
            <Stickynote note={note} onChoose={onChoose} />
          </>
        })}
        {selectedNote != null ? selectedNote == "NewNote" ? <NewMyModal onClose={onClose} /> : <MyModal note={selectedNote} onClose={onClose} /> : <></>}

        {/*add button*/}
        <button className={`absolute bottom-0 right-0 
        m-10
        bg-gr
        rounded-full 
        w-20 h-20 z-10
        cursor-pointer
        shadow-md shadow-pur
        transition-all duration-600 ease-in-out
        hover:scale-125
        active:scale-75 active:bg-hovpur
        justify-center items-center flex
        peer
        ${selectedNote != null ? "hidden" : "block"}
        `}
          onClick={() => { setSelectedNote("NewNote") }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>

        </button>

      </div>
    </div>

  );
}

export default Stickynotespage;
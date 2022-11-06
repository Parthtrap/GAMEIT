import { useState } from "react";
import MyModal from "./Components/Stickeynotemodel";
import Stickynote from "./Components/Stickynote";

function Stickynotespage() {

  const noteList = [
    {
      id: "1",
      title: "Post 1",
      content: "Title is this thingy.... Don't Question it",
      color: "bg-yellow-300"
    },
    {
      id: "2",
      title: "Post 2",
      content: "Title is this thingy.... Don't Question it",
      color: "bg-yellow-300"
    },
    {
      id: "3",
      title: "Post 3",
      content: "Title is this thingy.... Don't Question it",
      color: "bg-green-300"
    },
    {
      id: "4",
      title: "Post 4",
      content: "Title is this thingy.... Don't Question it",
      color: "bg-yellow-300"
    },
    {
      id: "5",
      title: "Post 5",
      content: "Title is this thingy.... Don't Question it",
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

  return (

    <div className="flex flex-wrap bg-divcol w-full min-h-[89.9vh] mt-16 place-content-center">
      {noteList.map((note) => {
        return <>
          <Stickynote note={note} onChoose={onChoose} />
        </>
      })}
      {selectedNote != null ? <MyModal note={selectedNote} onClose={onClose} /> : <></>}
    </div>

  );
}

export default Stickynotespage;
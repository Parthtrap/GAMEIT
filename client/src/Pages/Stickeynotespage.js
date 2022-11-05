import Stickynote from "./Components/Stickynote";

function Stickynotespage() {

    const noteList = [
        {
          id: "1",
          title: "Post 1",
          content: "Title is this thingy.... Don't Question it",
        },
        {
          id: "2",
          title: "Post 2",
          content: "Title is this thingy.... Don't Question it",
        },
        {
          id: "3",
          title: "Post 3",
          content: "Title is this thingy.... Don't Question it",
        },
        {
          id: "4",
          title: "Post 4",
          content: "Title is this thingy.... Don't Question it",
        },
        {
          id: "5",
          title: "Post 1",
          content: "Title is this thingy.... Don't Question it",
        },
      ];


    return(

      <div className="flex flex-wrap bg-divcol w-full min-h-[89.9vh] mt-16 place-content-center">
          {noteList.map((note) => {
              return <Stickynote note={note}/>
          })}
      </div>

    );
}

export default Stickynotespage;
import PostListCard from "./Components/PostListCard";

function Communitypage() {
    const postList = [
      {
        id: "1",
        community: "BadAssAF",
        title: "Post 1",
        content: "Title is this thingy.... Don't Question it",
        date: "11-10-2011",
        likes: "6969",
        media: "https://i.imgur.com/fzR3S94.jpg",
        ownerID: "parth@gmail.com",
        comments: ["commentID1", "commentID2", "commentID3"],
      },
      {
        id: "2",
        community: "RandomAF",
        title: "Post 2",
        content: "Title is this thingy.... Don't Question it",
        date: "12-10-2011",
        likes: "15",
        media: "",
        ownerID: "lalwani@gmail.com",
        comments: ["commentID4", "commentID5"],
      },
      {
        id: "3",
        title: "Post 3",
        community: "KawaiiAF",
        content: "Title is this thingy.... Don't Question it",
        date: "13-10-2011",
        likes: "325",
        media: "https://i.imgur.com/ClH999d.mp4",
        ownerID: "gaurav@gmail.com",
        comments: ["commentID6", "commentID7"],
      },
      {
        id: "4",
        title: "Post 4",
        community: "BoredAF",
        content: "Title is this thingy.... Don't Question it",
        date: "14-10-2011",
        media: "",
        likes: "32",
        ownerID: "parth@gmail.com",
        comments: ["commentID8", "commentID9", "commentID10"],
      },
      {
        id: "5",
        title: "Post 1",
        community: "Can'tThinkOfNameAnymore",
        content: "Title is this thingy.... Don't Question it",
        date: "15-10-2011",
        media: "",
        likes: "326",
        ownerID: "lalwani@gmail.com",
        comments: ["commentID11"],
      },
    ];
    return (
      <div className="w-full p-5 mt-16 md:w-3/4 bg-black">
        
        <div className="flex items-center rounded-xl space-x-4 bg-divcol pr-3 justify-between ">
            
          <div className="flex items-center">
            <img className="w-20 h-20 ml-4 rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"/>
            <div className="ml-3">
                <div className="font-bold text-2xl text-purple-400">Jeague of Land</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Tag line can be placed here </div>
            </div>
          </div>

          <button type="button" className="text-white
          bg-gradient-to-br from-purple-600 to-blue-500
          hover:bg-gradient-to-bl
          active:scale-95
          font-medium
          rounded-full
          text-sm text-center
          px-9 py-2">
            Join
          </button>

        </div>

        <div>Search Bar and Filters</div>
        <div>
          {postList.map((post) => {
            return <PostListCard post={post} />;
          })}
        </div>
      </div>
    );
}
export default Communitypage;
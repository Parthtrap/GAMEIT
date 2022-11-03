export default function Newpost(){
    return(
        <div className="bg-divcol p-4">
            
            <div classname="">

                <h2 className="text-gray-300 pl-1">Create a post</h2>
                <br/>

            </div>

            <form>

            <div classname="m-4">

                <input
                    required=""
                    className="mb-2 px-4 py-3 w-full rounded focus:outline focus:outline-white bg-gr "
                    placeholder="Title"
                />

            </div>

            
            <div className="mb-4 w-full rounded-lg bg-divcol ">

                <textarea
                    required=""
                    className="resize-y 
                    text-sm 
                    mb-2 px-4 py-3 w-full 
                    rounded 
                    focus:outline focus:outline-white bg-gr "
                    placeholder="Write  comment..."
                    rows="4"
                />

                <div className="flex justify-between items-center 
                py-2 px-3 
                bg-divcol 
                border-t border-gray-600">
                    
                    <button type="submit" className="inline-flex items-center 
                    py-2.5 px-4 
                    text-xs font-medium text-center text-white
                    rounded-lg 
                    bg-purple-700
                    focus:ring-4 focus:ring-purple-900 
                    hover:bg-purple-800">
                        Post comment
                    </button>

                    <div className="flex pl-0 space-x-1 sm:pl-2">
                        
                        <button type="button" 
                        className="inline-flex justify-center 
                        p-2 
                        rounded 
                        cursor-pointer 
                        text-gray-400 
                        hover:text-white hover:bg-purple-600">
                            
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" 
                            xmlns="http://www.w3.org/2000/svg">

                                <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 
                                0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" 
                                clip-rule="evenodd"></path>
                            
                            </svg>
                            
                        </button>

                        <button type="button" className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 hover:text-white hover:bg-purple-600">
                            
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" 
                            xmlns="http://www.w3.org/2000/svg">
                            
                                <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 
                                00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path>
                            
                            </svg>
                            
                        </button>

                    </div>

                </div>

            </div>
            </form>



        </div>
    );
}
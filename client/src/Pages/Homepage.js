import React from "react";
import Navbar from "./HomeComponents/Navbar";
import Postpage from "./Post/Postpage"
import Commentitem from "./Post/Commentitem"

function Homepage() {
  return (
    <div>
      <Navbar/>
      <Postpage/>
      {/*<a href="/login">Login?</a>*/}
    </div>
  );
}

export default Homepage;



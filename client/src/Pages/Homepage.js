import React from "react";
import Navbar from "./Components/Navbar";
import Postpage from "./Post/Postpage"
import Commentitem from "./Post/Commentitem"

function Homepage() {
  return (
    <div>
      <Navbar />
      <Postpage />
      <Postpage />
      <Postpage />
      <Postpage />
      {/*<a href="/login">Login?</a>*/}
    </div>
  );
}

export default Homepage;



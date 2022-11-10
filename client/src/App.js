import { Route, Routes } from "react-router-dom";
import ForgotPassword from "./Pages/Authentication/ForgotPassword";
import LoginPage from "./Pages/Authentication/LoginPage";
import Signup from "./Pages/Authentication/SignupPage";
import Navbar from "./Pages/Components/Navbar";
import Sidebar from "./Pages/Components/Sidebar";
import Homepage from "./Pages/Homepage";
import NotFound from "./Pages/NotFound";
import Newpost from "./Pages/Post/Newpost";
import Postpage from "./Pages/Post/Postpage";
import Communitypage from "./Pages/Communitypage";
import Stickeynotespage from "./Pages/Stickeynotespage";
import Todolistpage from "./Pages/Todolistpage";
import Profilepage from "./Pages/Profilepage";
import Helppage from './Pages/Helppage';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer autoClose={1000} position={toast.POSITION.BOTTOM_RIGHT}/>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex">
              <Homepage />
              <Sidebar />
            </div>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route
          path="/community/:id"
          element={
            <div className="flex ">
              <Communitypage />
              <Sidebar />
            </div>
          }
        />
        <Route
          path="/post/:id"
          element={
            <div className="flex ">
              <Postpage />
              <Sidebar />
            </div>
          }
        />
        <Route
          path="/post/new"
          element={
            <div className="flex ">
              <Newpost />
              <Sidebar />
            </div>
          }
        />
        <Route
          path="/notes"
          element={
            <div className="flex ">
              <Stickeynotespage />
              <Sidebar />
            </div>
          }
        />
        <Route
          path="/todo"
          element={
            <div className="flex min-h-screen">
              <Todolistpage />
              <Sidebar />
            </div>
          }
        />
        <Route
          path="/profile/:id"
          element={
            <div className="flex min-h-screen">
              <Profilepage />
              <Sidebar />
            </div>
          }
        />
        <Route path="/help" element={<Helppage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

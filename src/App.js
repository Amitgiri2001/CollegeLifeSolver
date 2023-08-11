

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreatePostForm from "./Components/InputForm/CreatePostForm";
import Home from "./Components/Home/Home";
import Profile from "./Components/Profile/Profile.js";
import Delete from "./Components/UI/Delete";

function App() {
  const [allPosts, setAllPosts] = useState([{
    title: "title",
    content: "content",
    image: "image"
  }]);
  const addPost = (post) => {
    console.log("In add post function", post);
    const updatedPosts = [...allPosts, post];


    setAllPosts(updatedPosts);
    console.log("In add post function", allPosts);
  }
  return (
    <Router>
      <Routes>
        {/* Route for Home component */}
        <Route
          path="/"
          exact
          element={<Home allPosts={allPosts} />}
        />
        <Route path="/users" Component={Profile} />
        <Route path="/delete" Component={Delete} />

        {/* Route for CreatePostForm component */}
        <Route path="/create-post" exact element={<CreatePostForm onAddPost={addPost} />} />
      </Routes>
    </Router>

  );
}

export default App;

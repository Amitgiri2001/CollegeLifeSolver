

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreatePostForm from "./Components/InputForm/CreatePostForm";
import Home from "./Components/Home/Home";

function App() {
  const [allPosts, setAllPosts] = useState([]);
  const addPost = (post) => {
    const updatedPosts = [...allPosts, post];
    setAllPosts(updatedPosts);
  }
  return (
    <Router>
      <Routes>
        {/* Route for Home component */}
        <Route
          path="/"
          exact
          render={(props) => <Home allPosts={props} />}
        />

        {/* Route for CreatePostForm component */}
        <Route path="/create-post" exact render={(props) => <CreatePostForm onAddPost={addPost} />} />
      </Routes>
    </Router>

  );
}

export default App;

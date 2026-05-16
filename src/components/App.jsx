import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

function App() {
  return (
    <div className="App">
      {/* Pass blog name down to Header */}
      <Header name={blogData.name} />

      {/* Pass image and about text down to About */}
      <About image={blogData.image} about={blogData.about} />

      {/* Pass posts array down to ArticleList */}
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;

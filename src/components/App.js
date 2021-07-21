import React from "react";
import blogData from "../data/blog";
import Header from "./Header"
import About from "./About"
import ArticleList from  "./Articlelist"

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header 
       name = {blogData.name}
      />
      <About
      img = {blogData.image}
      text = {blogData.about}
      />
      <ArticleList 
      posts = {blogData.posts}
      />
    </div>
    
  );
}


export default App;

// ArticleList
// Make a ArticleList component as a child of App. It should return:

// a <main> element with the following components inside:
// an array of Article components (one component for each post passed down as a prop to ArticleList)
// make sure to assign a unique key prop to each ArticleAr


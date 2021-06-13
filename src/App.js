import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState, useRef } from "react";
import { fetchJSON, postJSON } from "./API/fetch";

const printf = (data) => {
  console.log("data is : ", { data });
};

// URi, URl
const URL_GET_ALL_POSTS = "https://jsonplaceholder.typicode.com/posts";
const URL_CREATE_POST = "https://jsonplaceholder.typicode.com/posts";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(0);
  // async function getPosts () {
  //   await ...
  // }

  const getPosts = async () => {
    try {
      const response = await fetchJSON(URL_GET_ALL_POSTS);
      printf(response);
      setPosts(response);
      setLoading(1);
    } catch (error) {
      printf(error);
      setLoading(2);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  // console.log({ posts }, "POSTS");
  useEffect(() => {
    console.log({ posts }, "POSTS");
  }, [posts]);

  // const `<div></div>` + + +

  //JSX, template string `${}`
  // JSX => Babel => JS
  const postsMap = posts.map((v, i) => {
    return (
      // very important key
      <article key={v.id}>
        <span>{v.id}</span>
        <h5>{v.title}</h5>
        <p>{v.body}</p>
      </article>
    );
  });

  const createNewPost = async () => {
    printf("RUN CREATE API");
    try {
      const body = {
        title: titleRef.current.value,
        body: "AWEOMSE",
        userId: Math.floor(Math.random() + 1),
      };

      const response = await postJSON(URL_CREATE_POST, body);
      const newPosts = JSON.parse(JSON.stringify(posts));
      newPosts.unshift(response);
      setPosts(newPosts);
    } catch (error) {
      printf(error);
    }
  };

  const titleRef = useRef();
  // let x = title
  // const [title, setTitle] = useState("")

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          width={100}
          height={100}
        />
      </header>
      {/* // HTML FORM // react-hook-form // formik */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createNewPost();
        }}
      >
        <input
          name="title"
          type="text"
          defaultValue=""
          ref={titleRef}
          // onChange={(e) => setTitle(e.target.value)}
          // value={title}
        />
        <button type="submit">Create new post</button>
        <button type="button">Nguy hiểm</button>
      </form>
      <div className="App-wrapper">
        {loading === 0 ? "Loading...." : postsMap}
      </div>
    </div>
  );
}

export default App;

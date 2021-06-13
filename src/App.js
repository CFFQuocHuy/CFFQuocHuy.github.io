import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
// import { getPosts } from "./API/posts";

const posts = [
  {
    id: 1,
    title: "TITLE POST 1",
    body: "...",
    userId: 1,
  },
];

const printf = (data) => {
  console.log("data is : ", { data });
};

const getPostsAPI = () => {
  // return, yield
  // new, constructor function
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        try {
          // some loginc
          // let error ....throw "Lỗiiiii";
          resolve(posts);
        } catch (error) {
          reject(error);
        }
      }, 2000);
    } catch (error) {
      console.error("getPostsAPI", { error });
      reject(error);
    }
  });
};

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(0);
  // async function getPosts () {
  //   await ...
  // }

  const getPosts = async () => {
    try {
      setLoading(0);
      let response = await getPostsAPI();

      setPosts(response);
      printf(response);
      setLoading(1);
    } catch (error) {
      printf(error);
      setLoading(2);
      // setError("");
    }

    // getPostsAPI()
    //   .then((response) => {
    //     printf(reponse);
    //     setPosts(response);
    //       trackingAPI().then(
    //            ).catch()
    //   })
    //   .catch((error) => printf(error));
  };

  useEffect(() => {
    getPosts();
  }, []);

  // console.log({ posts }, "POSTS");
  useEffect(() => {
    console.log({ posts }, "POSTS");
  }, [posts]);

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
      <div className="App-wrapper">
        {loading === 0
          ? "Loading...."
          : posts.map((v) => (
              <div key={v.id}>
                <h>{v.title}</h>
              </div>
            ))}
      </div>
    </div>
  );
}

export default App;

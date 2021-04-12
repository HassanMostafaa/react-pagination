import React, { useState, useEffect } from "react";
import Axios from "axios";
import Post from "./components/Post";
import "./styles.css";
import Pagination from "./components/Pagination";
// import { pageNumbers } from "./components/Pagination";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);

      await Axios.get("https://jsonplaceholder.typicode.com/posts").then(
        (res) => {
          setPosts(res.data);
          setLoading(false);
        }
      );
    };
    fetchPost();
  }, []);

  //GET CURRENT POSTS
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  // console.log(posts);

  //chagnge page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const prevv = (pageNumber) => {
    if ((pageNumber = 1)) {
      alert("Page Not Found");
    } else {
      setCurrentPage(pageNumber - 1);
    }
  };
  const nextt = (pageNumber) => {
    if ((pageNumber = 20)) {
      alert("Page Not Found");
    } else {
      setCurrentPage(pageNumber + 1);
    }
  };

  return (
    <div className="app">
      <div className="container mt-5">
        <h1 className="text-primary mb-3">Fetched Posts</h1>
        <Post posts={currentPosts} loading={loading} />

        <div className="paginationApp">
          <div className="prev" onClick={() => prevv(currentPage)}>
            &#171;
          </div>

          <Pagination
            paginate={paginate}
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            currentPage={currentPage}
          />
          <div className="next" onClick={() => nextt(currentPage)}>
            &#xbb;
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

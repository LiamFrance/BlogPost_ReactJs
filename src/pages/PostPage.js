import React from "react";
import { useState } from "react";
import Header from "../shared/components/Header";
import Footer from "../shared/components/Footer";
import useSendGETAPI from "../shared/hooks/useSendGETAPI";
import { Link } from "react-router-dom";
import "../css/PostPage.css";
const PostPage = () => {
  const [searchText, setSearchText] = useState("");
  const convertDataResponse = (response) => response.data;
  const {
    isLoading,
    data: posts,
    errorMessage,
  } = useSendGETAPI(
    [],
    "https://jsonplaceholder.typicode.com/posts",
    convertDataResponse
  );
  if (isLoading) return "Loading...";
  if (errorMessage) return <div style={{ color: "red" }}>{errorMessage}</div>;
  // console.log({ posts });
  const postsFilter = posts.filter((post) =>
    post.title.toLowerCase().includes(searchText.toLowerCase())
  );
  return (
    <div>
      <Header
        title="PostPage"
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <div>
        {postsFilter.map((post) => (
          <div className="Blog-Post">
            <div className="Blog-post-block" key={post.id}>
              <Link to={"/posts/" + post.id} className="Blog-Post__title">
                {post.title}
              </Link>
              <div className="Blog-Post__sub-title">{post.body}</div>
              <div className="Blog-Post__description">
                Posted by Ocean Nguyen on May 20, 2019 8 min read
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default PostPage;

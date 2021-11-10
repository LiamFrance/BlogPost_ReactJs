import React from "react";
import { useState } from "react";
import Header from "../shared/components/Header";
import Footer from "../shared/components/Footer";
import useSendGETAPI from "../shared/hooks/useSendGETAPI";
import { Link } from "react-router-dom";
const HomePage = () => {
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
        title="HomePage"
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <section className="Body-Content">
        <div className="Wrapper">
          <div className="Blog-Post">
            {postsFilter.slice(0, 10).map((post) => (
              <div className="Blog-post-block" key={post.id}>
                <Link to={"/posts/" + post.id} className="Blog-Post__title">
                  {post.title}
                </Link>
                <div className="Blog-Post__sub-title">{post.body}</div>
                <div className="Blog-Post__description">
                  Posted by Ocean Nguyen on May 20, 2019 8 min read
                </div>
              </div>
            ))}
            <div className="Blog-post-block Blog-post-block--button">
              <Link to="/posts" className="Blog-Post-Button">
                VIEW ALL POSTS <i className="fad fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;

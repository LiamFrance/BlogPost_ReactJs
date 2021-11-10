import React from "react";
import Header from "../shared/components/Header";
import Footer from "../shared/components/Footer";
import { Link, useParams } from "react-router-dom";
import useSendGETAPI from "../shared/hooks/useSendGETAPI";
import "../css/PostDetailPage.css";
const PostDetailPage = () => {
  let { id } = useParams();
  const convertDataResponse = (response) => ({
    id: response.data.id,
    title: response.data.title,
    body: response.data.body,
  });
  const {
    isLoading,
    data: post,
    errorMessage,
  } = useSendGETAPI(
    { id: null, title: null, body: null },
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    convertDataResponse
  );
  if (isLoading) return "Loading...";
  if (errorMessage) return <div style={{ color: "red" }}>{errorMessage}</div>;
  return (
    <div>
      <Header title={post.title} />
      <div>
        <div className="Blog-Post">
          <div className="Blog-post-block">
            <Link to={"/posts/" + post.id} className="Blog-Post__title--detail">
              {post.title}
            </Link>
            <div className="Blog-Post__sub-title">{post.body}</div>
            <div className="Blog-Post__description">
              Posted by Ocean Nguyen on May 20, 2019 8 min read
            </div>
          </div>
          <div className="Blog-post-block Blog-post-block--button">
            <Link to="/" className="Blog-Post-Button">
              BACK TO HOME <i className="fad fa-arrow-left" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostDetailPage;

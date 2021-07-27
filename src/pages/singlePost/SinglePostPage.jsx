import "./singlePostPage.css";
import PostDetail from "../../components/postDetail/PostDetail";
import Sidebar from "../../components/sidebar/Sidebar";

import React from "react";

const SinglePost = () => {
  return (
    <div className="singlePostPage">
      {/* post */}
      <PostDetail />
      <Sidebar />
    </div>
  );
};

export default SinglePost;

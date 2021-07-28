import "./post.css";

import React from "react";
import { Link } from "react-router-dom";

const Post = () => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        alt="computer with glasses"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Lifestyle</span>
        </div>
        <span className="postTitle">
          <Link to="/post/1" className="link">
          Lorem ipsum dolor sit amet consectetur
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDescription">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta debitis
        ipsum, porro consequatur aspernatur quisquam facere quis illo! A sed at
        voluptatibus voluptate tempora laborum!Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Dicta debitis ipsum, porro consequatur
        aspernatur quisquam facere quis illo! A sed at voluptatibus voluptate
        tempora laborum!Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Dicta debitis ipsum, porro consequatur aspernatur quisquam facere quis
        illo! A sed at voluptatibus voluptate tempora laborum!
      </p>
    </div>
  );
};

export default Post;

import React from "react";

const Post = ({ posts, loading }) => {
  if (loading) return <h4>LOADING ....</h4>;

  return (
    <ul className="list-group mb-4 post">
      {posts.map((post) => (
        <li key={post.id} className="list-group-item">
          <h6>
            {post.id}. {post.title}
          </h6>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default Post;

import React from "react";
import { useParams, useLocation } from "react-router-dom";
function ForumPostDetails() {
  const { id } = useParams();
  const location = useLocation();
  const currentPost = location.state;
  return (
    <div className="container mt-5 text-white">
      <div className="card bg-dark text-light mb-4">
        <div className="card-body">
          <h2 className="card-title">{currentPost.title}</h2>
          <p className="text-muted">
            Posted by <strong>{currentPost.author}</strong> on{" "}
            {new Date(currentPost.createdAt).toLocaleString()}
          </p>
          <span className="badge bg-primary">{currentPost.category}</span>
          <hr />
          <p>{currentPost.body}</p>
        </div>
      </div>
    </div>
  );
}

export default ForumPostDetails;

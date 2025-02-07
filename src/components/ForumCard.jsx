import React from "react";
import { Link } from "react-router-dom";

function ForumCard({ forum }) {
  return (
    <Link
      to={`/forums/${forum.id}`}
      state={forum}
      style={{ textDecoration: "none" }}
    >
      <div
        key={forum.id}
        className="list-group-item list-group-item-dark mb-3 rounded"
      >
        <h5 className="mb-1">{forum.title}</h5>
        <p className="mb-1">
          <strong>{forum.author}</strong> in{" "}
          <span className="badge bg-info">{forum.category}</span>
        </p>
        <small className="text-muted">
          {forum.replies} replies | {forum.views} views
        </small>
      </div>
    </Link>
  );
}

export default ForumCard;

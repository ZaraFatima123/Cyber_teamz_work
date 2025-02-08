import React, { useState } from "react";
import Replies from "./Replies";

function ForumCard({ forum }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className="list-group-item list-group-item-dark mb-3 rounded"
        style={{ cursor: "pointer" }}
      >
        <h5 className="mb-1">{forum.title}</h5>
        <p className="mb-1">
          <strong>{forum.author}</strong> in{" "}
          <span className="badge bg-info">{forum.category}</span>
        </p>
        <small className="text-muted">
          {forum.replies.length} replies | {forum.views} views
        </small>
      </div>

      {/* Replies Modal */}
      <Replies
        forum={forum}
        show={showModal}
        onHide={() => setShowModal(false)}
      />
    </>
  );
}

export default ForumCard;

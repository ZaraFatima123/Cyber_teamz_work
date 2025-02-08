import React from "react";
import { Modal, Button } from "react-bootstrap";

function Replies({ forum, show, onHide }) {
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{forum?.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="text-muted">
          Posted by <strong>{forum?.author}</strong> on{" "}
          {new Date(forum?.createdAt).toLocaleString()}
        </p>
        <span className="badge bg-primary">{forum?.category}</span>
        <hr />
        <p>{forum?.body}</p>
        <h5>Replies:</h5>
        <div className="replies-section">
          {forum?.replies?.length > 0 ? (
            forum.replies.map((reply) => (
              <div key={reply.id} className="reply mb-3">
                <p>
                  <strong>{reply.author}:</strong> {reply.body}
                </p>
                <small className="text-muted">
                  {new Date(reply.createdAt).toLocaleString()}
                </small>
              </div>
            ))
          ) : (
            <p className="text-muted">No replies yet.</p>
          )}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Replies;

import React, { useRef } from "react";

function CreateForumModal({ forums, setForums }) {
  const titleRef = useRef(null);
  const bodyRef = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const title = titleRef.current.value;
    const body = bodyRef.current.value;
    const id = forums[forums.length - 1].id + 1;
    const author = "guest_user";
    const createdAt = Date.now();
    const category = "test";
    setForums([
      ...forums,
      { id, title, body, author, createdAt, category, replies: 10, views: 100 },
    ]);
  };
  return (
    <div
      class="modal fade"
      id="forumModal"
      tabindex="-1"
      aria-labelledby="forumModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content bg-dark">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="forumModalLabel">
              New Post
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form onSubmit={handleSubmit}>
              <div class="mb-3">
                <label for="recipient-name" class="col-form-label text-bg-dark">
                  Title:
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="recipient-name"
                  ref={titleRef}
                />
              </div>
              <div class="mb-3">
                <label for="message-text" class="col-form-label">
                  Body:
                </label>
                <textarea
                  class="form-control"
                  id="message-text"
                  ref={bodyRef}
                  style={{ height: 300 }}
                ></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary"
              onClick={handleSubmit}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateForumModal;

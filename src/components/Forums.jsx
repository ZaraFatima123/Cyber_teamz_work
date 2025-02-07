import React, { useState } from "react";
import ForumCard from "./ForumCard";
import { IoMdAdd } from "react-icons/io";
import CreateForumModal from "./CreateForumModal";
const dummyData = [
  {
    id: 1,
    title: "How to secure a Node.js API?",
    category: "Web Security",
    author: "cyber_ninja",
    body: "I'm building an API with Node.js and Express. What are the best practices for securing it against common vulnerabilities?",
    createdAt: "2025-02-06T10:30:00Z",
    replies: 5,
    views: 120,
  },
  {
    id: 2,
    title: "Best tools for penetration testing?",
    category: "Penetration Testing",
    author: "pentest_pro",
    body: "What are the most effective tools for penetration testing in 2025? I'm looking for something versatile for both web and network security.",
    createdAt: "2025-02-05T14:45:00Z",
    replies: 8,
    views: 250,
  },
  {
    id: 3,
    title: "How to detect phishing emails?",
    category: "Cyber Threats",
    author: "sec_expert",
    body: "Many of my colleagues fall for phishing scams. What are some reliable ways to detect phishing emails before clicking on malicious links?",
    createdAt: "2025-02-04T18:15:00Z",
    replies: 3,
    views: 90,
  },
];
function Forums() {
  const [forums, setForums] = useState(dummyData);
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between">
        <h1 className="mb-4 text-white">Cybersecurity Forums</h1>
        <button
          className="btn btn-success my-2 rounded-circle "
          style={{ height: 50, width: 50 }}
          data-bs-toggle="modal"
          data-bs-target="#forumModal"
        >
          <IoMdAdd />
        </button>
      </div>
      <div className="list-group">
        {forums.map((item) => (
          <ForumCard forum={item} />
        ))}
      </div>
      <CreateForumModal forums={forums} setForums={setForums} />
    </div>
  );
}

export default Forums;

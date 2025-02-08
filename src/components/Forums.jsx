import React, { useState } from "react";
import ForumCard from "./ForumCard";
import Replies from "./Replies";
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
    replies: [
      {
        id: 1,
        author: "dev_master",
        body: "Use HTTPS and secure headers.",
        createdAt: "2025-02-06T12:00:00Z",
      },
      {
        id: 2,
        author: "cyber_expert",
        body: "Implement rate limiting and input validation.",
        createdAt: "2025-02-06T13:30:00Z",
      },
      {
        id: 3,
        author: "api_guard",
        body: "Use JWT for authentication.",
        createdAt: "2025-02-06T14:15:00Z",
      },
      {
        id: 4,
        author: "firewall_warrior",
        body: "Set up a Web Application Firewall (WAF).",
        createdAt: "2025-02-06T15:00:00Z",
      },
    ],
    views: 120,
  },
  {
    id: 2,
    title: "Best tools for penetration testing?",
    category: "Penetration Testing",
    author: "pentest_pro",
    body: "What are the most effective tools for penetration testing in 2025? I'm looking for something versatile for both web and network security.",
    createdAt: "2025-02-05T14:45:00Z",
    replies: [
      {
        id: 5,
        author: "security_guru",
        body: "Try Burp Suite and Nmap.",
        createdAt: "2025-02-05T16:00:00Z",
      },
      {
        id: 6,
        author: "whitehat_x",
        body: "Metasploit is a must-have!",
        createdAt: "2025-02-05T16:45:00Z",
      },
      {
        id: 7,
        author: "infosec_hunter",
        body: "Wireshark is great for network analysis.",
        createdAt: "2025-02-05T17:30:00Z",
      },
    ],
    views: 250,
  },
  {
    id: 3,
    title: "How to prevent SQL Injection attacks?",
    category: "Database Security",
    author: "db_warrior",
    body: "What are the best methods to prevent SQL Injection in modern web applications?",
    createdAt: "2025-02-04T18:00:00Z",
    replies: [
      {
        id: 8,
        author: "query_pro",
        body: "Always use prepared statements and parameterized queries.",
        createdAt: "2025-02-04T19:30:00Z",
      },
      {
        id: 9,
        author: "data_guard",
        body: "Sanitize user inputs before using them.",
        createdAt: "2025-02-04T20:10:00Z",
      },
      {
        id: 10,
        author: "security_dev",
        body: "Use ORM tools to prevent direct SQL execution.",
        createdAt: "2025-02-04T21:00:00Z",
      },
    ],
    views: 310,
  },
  {
    id: 4,
    title: "Cybersecurity certifications worth getting in 2025?",
    category: "Career Advice",
    author: "infosec_learner",
    body: "Which cybersecurity certifications will be most valuable in 2025?",
    createdAt: "2025-02-03T09:15:00Z",
    replies: [
      {
        id: 11,
        author: "certified_hacker",
        body: "Consider OSCP, CISSP, and CEH.",
        createdAt: "2025-02-03T11:45:00Z",
      },
      {
        id: 12,
        author: "security_guru",
        body: "CISM and CISA are great for management roles.",
        createdAt: "2025-02-03T12:30:00Z",
      },
    ],
    views: 540,
  },
  {
    id: 5,
    title: "How to detect and mitigate phishing attacks?",
    category: "Phishing",
    author: "anti_phish",
    body: "What are the best ways to identify phishing emails and protect users from them?",
    createdAt: "2025-02-02T21:30:00Z",
    replies: [
      {
        id: 13,
        author: "security_expert",
        body: "Look for suspicious URLs and educate users about email spoofing.",
        createdAt: "2025-02-02T23:00:00Z",
      },
      {
        id: 14,
        author: "cyber_defense",
        body: "Implement SPF, DKIM, and DMARC for email authentication.",
        createdAt: "2025-02-02T23:45:00Z",
      },
    ],
    views: 420,
  },
];

function Forums() {
  const [forums, setForums] = useState(dummyData);
  const [selectedForum, setSelectedForum] = useState(null);
  const [showReplies, setShowReplies] = useState(false);

  const handleShowReplies = (forum) => {
    setSelectedForum(forum);
    setShowReplies(true);
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between">
        <h1 className="mb-4 text-white">Cybersecurity Forums</h1>
        <button
          className="btn btn-success my-2 rounded-circle"
          style={{ height: 50, width: 50 }}
          data-bs-toggle="modal"
          data-bs-target="#forumModal"
        >
          <IoMdAdd />
        </button>
      </div>
      <div className="list-group">
        {forums.map((item) => (
          <ForumCard
            key={item.id}
            forum={item}
            onShowReplies={handleShowReplies}
          />
        ))}
      </div>
      <CreateForumModal forums={forums} setForums={setForums} />

      {/* Replies Modal */}
      {selectedForum && (
        <Replies
          forum={selectedForum}
          show={showReplies}
          onHide={() => setShowReplies(false)}
        />
      )}
    </div>
  );
}

export default Forums;

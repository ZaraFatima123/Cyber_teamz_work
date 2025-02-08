import React, { useEffect, useState } from "react";
import HeaderImage from "../assets/images/header-image.svg";

function Header() {
  const textArray = [
    "Stay Secure Online",
    "Detect Phishing Links",
    "Analyze Spam Emails",
    "Test Your Cyber Knowledge",
  ];
  const [text, setText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    const handleTyping = () => {
      if (!isDeleting && charIndex < textArray[textIndex].length) {
        setText((prev) => prev + textArray[textIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === textArray[textIndex].length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % textArray.length);
      }
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimer);
  }, [text, charIndex, isDeleting, textIndex, textArray]);
  return (
    <header class="d-flex justify-content-center align-items-center cyber-header">
      <div class="container">
        <h1 class="header-title">
          Smart Securers <br />
          <span className="typing-text">{text}</span>
          <span className="cursor">|</span>
        </h1>
        <p className="header-text">
          Cyber threats are everywhere, but you don’t have to face them alone.
          Our platform helps you stay safe online by detecting phishing links,
          analyzing spam emails, and testing your cybersecurity knowledge with
          interactive quizzes. Whether you're a beginner or an expert, our tools
          empower you to recognize threats and protect your digital world. Stay
          one step ahead of cybercriminals—because awareness is your first line
          of defense.
        </p>
        <a href="#" class="btn btn-outline-light header-btn">
          Learn More
        </a>
      </div>
      <div>
        <img src={HeaderImage} className="m-4 header-image"></img>
      </div>
    </header>
  );
}

export default Header;

"use client";

import React, { useState, useEffect, FormEvent } from "react";
import FireworksComponent from "../common/fireworks";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const inputStyle: React.CSSProperties = {
  padding: "20px",
  marginBottom: "10px",
  fontSize: "18px",
  color: "#222831",
  backgroundColor: "#EEEEEE",
  border: "3px solid rgb(var(--primary-rgb))",
  borderRadius: "15px",
  width: "100%",
  boxSizing: "border-box" as const,
  transition: "all 0.3s ease",
  boxShadow: "none",
};

const textareaStyle: React.CSSProperties = {
  ...inputStyle,
  height: "300px",
};

const buttonStyle: React.CSSProperties = {
  padding: "15px 15px",
  fontSize: "18px",
  fontWeight: "bold",
  backgroundColor: "rgb(var(--primary-rgb))",
  color: "rgb(var(--accent-rgb))",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "all 0.3s ease",
  width: "100%",
  boxSizing: "border-box" as const,
  boxShadow: "none",
};

const hoverStyle: React.CSSProperties = {
  boxShadow: "0 0 15px rgba(var(--primary-rgb), 0.5)",
  transform: "scale(1.02)",
};

const formStyle: React.CSSProperties = {
  maxWidth: "600px",
  margin: "auto",
  textAlign: "center",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "20px",
  boxSizing: "border-box" as const,
};

const iconContainerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  gap: "50px",
  marginTop: "25px",
  marginBottom: "20px",
};

export const ContactForm = () => {
  const [isSubmitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const originalStyle = document.body.style.overflow;
    document.body.style.overflow = "auto";
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert("Please fill out all fields");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.status === 200) {
        setSubmitted(true);
      } else {
        console.error("Submission failed", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return isSubmitted ? (
    <div>
      <FireworksComponent />
      <h1
        className="text-center font-bold text-primary"
        style={{ fontSize: "3em" }}
      >
        Thank you for your message!
      </h1>
    </div>
  ) : (
    <>
      <form onSubmit={onSubmit} style={formStyle}>
        <h1
          className="text-primary"
          style={{ fontSize: "5em", marginBottom: "20px" }}
        >
          Contact!
        </h1>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, hoverStyle)}
          onMouseLeave={(e) => Object.assign(e.currentTarget.style, inputStyle)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, hoverStyle)}
          onMouseLeave={(e) => Object.assign(e.currentTarget.style, inputStyle)}
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={textareaStyle}
          maxLength={500}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, hoverStyle)}
          onMouseLeave={(e) =>
            Object.assign(e.currentTarget.style, textareaStyle)
          }
        ></textarea>
        <button
          type="submit"
          style={buttonStyle}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, hoverStyle)}
          onMouseLeave={(e) =>
            Object.assign(e.currentTarget.style, buttonStyle)
          }
        >
          Submit
        </button>
        <div style={iconContainerStyle}>
          <a
            href="https://www.linkedin.com/in/danny-sickels-ab6ab578"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-all duration-300 hover:scale-110"
          >
            <FaLinkedinIn className="text-2xl cursor-pointer text-primary hover:text-accent transition-colors" />
          </a>
          <a
            href="https://github.com/danielsickels"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-all duration-300 hover:scale-110"
          >
            <FaGithub className="text-2xl cursor-pointer text-primary hover:text-accent transition-colors" />
          </a>
        </div>
      </form>
    </>
  );
};

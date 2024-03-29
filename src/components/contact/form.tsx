"use client";

import React, { useState, useEffect, FormEvent } from "react";
import FireworksComponent from "../common/fireworks";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const inputStyle = {
  padding: "30px",
  marginBottom: "15px",
  fontSize: "22px",
  color: "#333",
  border: "3px solid #3498db",
  borderRadius: "15px",
};

const textareaStyle = {
  ...inputStyle,
  height: "300px",
};

const buttonStyle = {
  padding: "15px 15px",
  fontSize: "22px",
  fontWeight: "bold",
  backgroundColor: "#3498db",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
};

const iconContainerStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "50px",
  marginTop: "25px",
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
      <h1 className="text-center font-bold" style={{ fontSize: "3em" }}>
        Thank you for your message!
      </h1>
    </div>
  ) : (
    <>
      <form
        onSubmit={onSubmit}
        style={{
          maxWidth: "600px",
          margin: "auto",
          textAlign: "center",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h1 style={{ fontSize: "5em", marginBottom: "20px" }}>Contact!</h1>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={textareaStyle}
          maxLength={500}
        ></textarea>
        <button type="submit" style={buttonStyle}>
          Submit
        </button>
        <div style={iconContainerStyle}>
          <a
            href="https://www.linkedin.com/in/danny-sickels-ab6ab578"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="text-2xl cursor-pointer" />
          </a>
          <a
            href="https://github.com/danielsickels"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl cursor-pointer" />
          </a>
        </div>
      </form>
    </>
  );
};

"use client";

import { FormEvent, useState } from "react";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          message,
        }),
        headers: {
          "content-type": "application/json",
        },
      });
    } catch (err: any) {
      console.error("Err", err);
    }
  };

  const inputStyle = {
    padding: "10px",
    marginBottom: "15px",
    fontSize: "16px",
    border: "2px solid #3498db",
    borderRadius: "5px",
  };

  const textareaStyle = {
    height: "350px",
    ...inputStyle, // Inherit styles from inputStyle
  };

  const buttonStyle = {
    padding: "10px 15px",
    fontSize: "18px",
    fontWeight: "bold",
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  return (
    <form
      onSubmit={onSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "400px",
        margin: "auto",
      }}
    >
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Name"
        style={inputStyle}
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
        style={inputStyle}
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={inputStyle}
      ></textarea>
      <button type="submit" style={buttonStyle}>
        Submit
      </button>
    </form>
  );
};

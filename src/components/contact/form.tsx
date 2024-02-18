"use client";

import { FormEvent, useState } from "react";
import { useEffect } from "react";
import FireworksComponent from "../common/fireworks";

export const ContactForm = () => {
  const [isSubmitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill out all fields");
      return;
    }

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
      if (res.status === 200) {
        setSubmitted(true);
      }
    } catch (err: any) {
      console.error("Err", err);
    }
  };

  const inputStyle = {
    padding: "30px",
    marginBottom: "15px",
    fontSize: "22px",
    color: "#333",
    border: "3px solid #3498db",
    borderRadius: "15px",
  };

  const textareaStyle = {
    height: "300px",
    ...inputStyle,
  };

  const buttonStyle = {
    padding: "15px 15px",
    fontSize: "18px",
    fontWeight: "bold",
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  useEffect(() => {
    document.body.style.overflow = "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return isSubmitted ? (
    <div>
      <FireworksComponent />
      <h1 className="text-center font-bold" style={{ fontSize: "3em" }}>
        Thank you for your message!
      </h1>
    </div>
  ) : (
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
      <h1
        style={{
          fontSize: "5em",
          marginBottom: "20px",
          textAlign: "center",
          top: "100px",
          width: "100%",
        }}
      >
        Contact!
      </h1>
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
        style={textareaStyle}
      ></textarea>
      <button type="submit" style={buttonStyle}>
        Submit
      </button>
    </form>
  );
};

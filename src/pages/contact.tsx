// src/pages/contact.tsx
import React, { useState } from "react";
import Navbar from "../components/common/Navbar";
import ContactComponent from "../components/contact/Contact";
import "../app/globals.css";

const Contact: React.FC = () => {
  return (
    <div>
      <Navbar />
      <ContactComponent />
    </div>
  );
};

export default Contact;
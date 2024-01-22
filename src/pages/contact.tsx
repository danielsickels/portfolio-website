// src/pages/contact.tsx
import React, { useState } from "react";
import Navbar from "../components/common/Navbar";
import ContactComponent from "../components/contact/Contact";
import StreakEleReverse from "../components/common/StreakEleReverse";
import "../app/globals.css";

const Contact: React.FC = () => {
  return (
    <div>
      <Navbar />
      <ContactComponent />
      <StreakEleReverse />
    </div>
  );
};

export default Contact;

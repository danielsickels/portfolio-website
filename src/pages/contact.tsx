// src/pages/contact.tsx
import React, { useState } from "react";
import Navbar from "../components/common/Navbar";
import { ContactForm } from "../components/contact/form";
import StreakEleReverse from "../components/common/StreakEleReverse";

import "../app/globals.css";

const Contact: React.FC = () => {
  return (
    <div>
      <Navbar />
      <ContactForm />
      <StreakEleReverse />
    </div>
  );
};

export default Contact;

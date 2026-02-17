// src/pages/contact.tsx
import React, { useState } from "react";
import Navbar from "../components/common/Navbar";
import { ContactForm } from "../components/contact/form";

import "../app/globals.css";

const Contact: React.FC = () => {
  return (
    <div>
      <Navbar />
      <ContactForm />
    </div>
  );
};

export default Contact;

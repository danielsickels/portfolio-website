// src/pages/contact.tsx
import React, { useState } from "react";
import Navbar from "../components/common/Navbar";
import { ContactForm } from "../components/contact/form";

import "../app/globals.css";

const Contact: React.FC = () => {
  return (
    <div className="w-full min-h-[calc(100dvh-5rem)] flex flex-col">
      <Navbar />
      <div className="flex-1 w-full px-4 sm:px-6 lg:w-3/5 lg:max-w-2xl lg:mx-auto">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;

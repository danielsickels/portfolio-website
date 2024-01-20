import React, { useState } from "react";
import { FiSend } from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Message submitted!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="h-screen">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-4 text-black dark:text-white">
          Get In Touch
        </h1>
        <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows={4}
              ></textarea>
            </div>
            <div className="flex items-center justify-between mt-4">
              <button
                type="submit"
                className="bg-purple-500 hover:bg-purple-700 text-black dark:text-white font-bold py-2 px-4 rounded flex items-center"
              >
                <FiSend className="mr-2" />
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="flex justify-center gap-4 mt-8">
          <FaFacebookF className="text-2xl cursor-pointer text-black dark:text-white" />
          <FaTwitter className="text-2xl cursor-pointer text-black dark:text-white" />
          <FaLinkedinIn className="text-2xl cursor-pointer text-black dark:text-white" />
          <FaInstagram className="text-2xl cursor-pointer text-black dark:text-white" />
        </div>
      </div>
    </div>
  );
};

export default Contact;

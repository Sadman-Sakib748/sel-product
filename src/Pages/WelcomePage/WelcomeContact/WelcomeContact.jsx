import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  VideoIcon as Vimeo,
  PinIcon as Pinterest,
  Linkedin,
  Dribbble,
  MessageCircle,
} from "lucide-react";

const WelcomeContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    axios
      .post("http://localhost:5000/contact", formData)
      .then((response) => {
        if (response.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Your message has been sent successfully.",
            confirmButtonColor: "#4CAF50",
          });

          // Reset form after success
          setFormData({ name: "", subject: "", email: "", message: "" });
        }
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong. Please try again later!",
          confirmButtonColor: "#d33",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="max-w-7xl mx-auto p-6 grid md:grid-cols-2 gap-12">
      {/* Contact Form Section */}
      <div>
        <h2 className="text-2xl font-bold mb-1">GET IN TOUCH</h2>
        <p className="text-gray-600 mb-8">WRITE US A LETTER</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name *"
            required
            className="w-full p-3 bg-gray-100 border-none"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />

          <input
            type="text"
            placeholder="Subject *"
            required
            className="w-full p-3 bg-gray-100 border-none"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          />

          <input
            type="email"
            placeholder="E-mail *"
            required
            className="w-full p-3 bg-gray-100 border-none"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />

          <textarea
            placeholder="Message *"
            required
            rows={6}
            className="w-full p-3 bg-gray-100 border-none resize-none"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />

          <button
            type="submit"
            className="px-6 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-colors"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      {/* Address Section */}
      <div>
        <h2 className="text-2xl font-bold mb-1">OUR ADDRESS</h2>
        <p className="text-gray-600 mb-8">WHERE ARE WE LOCATED</p>

        <div className="space-y-1 mb-6">
          <p>2954 Golden Estates,</p>
          <p>Guys Store, Virginia,</p>
          <p>24318-5414,</p>
          <p>United States</p>
        </div>

        <div className="space-y-1 mb-8">
          <p>(571) 400-1255</p>
          <p>info@aurumtheme.com</p>
        </div>

        <div className="flex gap-4">
          <a href="#" className="p-2 hover:text-gray-600 transition-colors">
            <Facebook size={20} />
          </a>
          <a href="#" className="p-2 hover:text-gray-600 transition-colors">
            <Twitter size={20} />
          </a>
          <a href="#" className="p-2 hover:text-gray-600 transition-colors">
            <Instagram size={20} />
          </a>
          <a href="#" className="p-2 hover:text-gray-600 transition-colors">
            <Youtube size={20} />
          </a>
          <a href="#" className="p-2 hover:text-gray-600 transition-colors">
            <Vimeo size={20} />
          </a>
          <a href="#" className="p-2 hover:text-gray-600 transition-colors">
            <Pinterest size={20} />
          </a>
          <a href="#" className="p-2 hover:text-gray-600 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="#" className="p-2 hover:text-gray-600 transition-colors">
            <Dribbble size={20} />
          </a>
          <a href="#" className="p-2 hover:text-gray-600 transition-colors">
            <MessageCircle size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default WelcomeContact;

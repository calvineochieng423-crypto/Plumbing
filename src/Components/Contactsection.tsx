import { useState } from "react";
import "./Contactsection.css";
import TestimonialSection from "./Testimonialsection";

interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: Date;
}

export default function Contactsection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const [messages, setMessages] = useState<Message[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const newMessage: Message = {
        id: Date.now().toString(),
        name,
        email,
        message,
        timestamp: new Date(),
      };

      setMessages([newMessage, ...messages]);
      setName("");
      setEmail("");
      setMessage("");
      setStatus("Message sent successfully!");

      setTimeout(() => setStatus(""), 8000);
    } catch (err) {
      console.error(err);
      setStatus("Error sending message.");
    }
  };

  return (
    <>
      {/* Hero / Visual CTA Section */}
      <div className="contact-wrapper">
        <div className="contact-section">
          <img
            className="contact-image"
            src="./customer.JPG"
            alt="Customer agent"
          />
          <div className="overlay">
            <h1>Connecting With You</h1>
            <p>We value every interaction and make sure your voice is heard.</p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="contact-inputs">
        {/* Left: Information / CTA */}
        <div className="contact-details">
          <h2>Contact Our Team</h2>
          <p>We are ready to help you with any inquiry.</p>
          <button className="store-btn">Store</button>
        </div>

        {/* Right: Form Inputs */}
        <div className="contact-data">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="email"
              id="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <textarea
              id="message"
              placeholder="Your Message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />

            <button type="submit" className="contact-btn">
              Send Message
            </button>
          </form>

          {status && (
            <p style={{ marginTop: "10px", color: "#37353E" }}>{status}</p>
          )}
        </div>
      </div>

      {/* Real-time messages display */}
      <div
        style={{ maxWidth: "900px", margin: "0 auto 50px", color: "#37353E" }}
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              marginBottom: "15px",
              borderBottom: "1px solid #ccc",
              paddingBottom: "10px",
            }}
          >
            <strong>{msg.name}</strong> ({msg.email})<p>{msg.message}</p>
          </div>
        ))}
      </div>

      <TestimonialSection />
    </>
  );
}

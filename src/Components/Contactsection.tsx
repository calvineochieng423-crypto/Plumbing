import { useState, useEffect } from "react";
import "./Contactsection.css";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import TestimonialSection from "./Testimonialsection";

interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp?: any;
}

export default function Contactsection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const [messages, setMessages] = useState<Message[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await addDoc(collection(db, "contacts"), {
        name,
        email,
        message,
        timestamp: serverTimestamp(),
      });
      setStatus("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setStatus("Error sending message.");
    }
  };

  useEffect(() => {
    const q = query(collection(db, "contacts"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs: Message[] = [];
      snapshot.forEach((doc) =>
        msgs.push({ id: doc.id, ...(doc.data() as Omit<Message, "id">) })
      );
      setMessages(msgs);
    });

    return () => unsubscribe();
  }, []);

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

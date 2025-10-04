import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { db } from "../firebase";
import {
  collection,
  onSnapshot,
  addDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import "./Testimonial.css";

gsap.registerPlugin(ScrollTrigger);

type Testimonial = {
  id: string;
  name: string;
  message: string;
  image: string;
};

const staticTestimonials: Testimonial[] = [
  {
    id: "1",
    name: "John Doe",
    message: "Excellent service, fast and reliable!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: "2",
    name: "Jane Smith",
    message: "Professional plumbers who know their work.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: "3",
    name: "Michael Brown",
    message: "Quick response and very affordable.",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    id: "4",
    name: "Emily Davis",
    message: "Saved us from a huge leak – highly recommend!",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: "5",
    name: "Chris Johnson",
    message: "Friendly and skilled technicians.",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    id: "6",
    name: "Sarah Wilson",
    message: "They fixed my water heater in no time.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    id: "7",
    name: "David Miller",
    message: "Prompt and courteous service every time.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    id: "8",
    name: "Laura Martinez",
    message: "Affordable and high-quality plumbing work.",
    image: "https://randomuser.me/api/portraits/women/36.jpg",
  },
  {
    id: "9",
    name: "James Anderson",
    message: "Reliable team, they never disappoint.",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    id: "10",
    name: "Sophia Taylor",
    message: "Very professional and trustworthy.",
    image: "https://randomuser.me/api/portraits/women/58.jpg",
  },
];

export default function TestimonialSection() {
  const [liveTestimonials, setLiveTestimonials] = useState<Testimonial[]>([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    image: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [response, setResponse] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({ type: "", message: "" });

  const marqueeRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "testimonials"), (snapshot) => {
      const firestoreData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Testimonial, "id">),
      }));
      setLiveTestimonials(firestoreData);
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    if (!marqueeRef.current) return;
    const marquee = marqueeRef.current;

    const tl = gsap.timeline({ repeat: -1, defaults: { ease: "none" } });
    tl.to(marquee, { xPercent: -150, duration: 100 });

    const pause = () => tl.pause();
    const resume = () => tl.resume();

    marquee.addEventListener("mouseenter", pause);
    marquee.addEventListener("mouseleave", resume);

    return () => {
      marquee.removeEventListener("mouseenter", pause);
      marquee.removeEventListener("mouseleave", resume);
      tl.kill();
    };
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.to(sectionRef.current, {
      y: -100,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  const allTestimonials = [...staticTestimonials, ...liveTestimonials];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.message) return;

    try {
      setSubmitting(true);
      setResponse({ type: "", message: "" });

      const q = query(
        collection(db, "testimonials"),
        where("name", "==", form.name),
        where("message", "==", form.message)
      );
      const snapshot = await getDocs(q);

      if (!snapshot.empty) {
        setResponse({
          type: "error",
          message: "You already submitted this exact feedback.",
        });
        return;
      }

      await addDoc(collection(db, "testimonials"), {
        name: form.name,
        email: form.email,
        message: form.message,
        image: form.image || "https://via.placeholder.com/100",
        createdAt: new Date(),
      });

      setForm({ name: "", email: "", message: "", image: "" });
      setResponse({
        type: "success",
        message: " Thank you! Your feedback has been sent.",
      });
    } catch (err) {
      console.error("Error adding testimonial:", err);
      setResponse({
        type: "error",
        message: " Something went wrong. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="testimonial-wrapper" ref={sectionRef} id="#Testimonials">
      <section className="testimonial-section">
        <h2 className="testimonial-heading">What Our Customers Say</h2>

        {/* Marquee */}
        <div className="marquee-wrapper">
          <div className="marquee" ref={marqueeRef}>
            {[...allTestimonials, ...allTestimonials].map((t, index) => (
              <div key={`${t.id}-${index}`} className="testimonial-card">
                <img src={t.image} alt={t.name} />
                <p className="testimonial-message">"{t.message}"</p>
                <h4 className="testimonial-name">{t.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Feedback form */}
        <div className="testimonial-form-box">
          <h3 className="form-title">Leave Your Feedback</h3>
          <form className="testimonial-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                rows={4}
                placeholder="Write your feedback here..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="image"
                placeholder="Profile Image URL (optional)"
                value={form.image}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="submit-btn" disabled={submitting}>
              {submitting ? "Sending..." : "Send Feedback"}
            </button>
          </form>

          {/* Response message */}
          {response.message && (
            <p
              className={`form-response ${
                response.type === "success" ? "success" : "error"
              }`}
            >
              {response.message}
            </p>
          )}
        </div>
      </section>
    </div>
  );
}

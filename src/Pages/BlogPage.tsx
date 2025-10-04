import "./ContactPage.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Blogsection from "../Components/Blogsection";
import TestimonialSection from "../Components/Testimonialsection";
import ScrollToButton from "../ScrolltoTop";

gsap.registerPlugin(ScrollTrigger);

export default function BlogPage() {
  const BlogPageRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!BlogPageRef.current) return;

    gsap.fromTo(
      BlogPageRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: BlogPageRef.current,
          start: "top top",
          // toggleActions: "play none none reverse",
        },
      }
    );
  }, []);
  return (
    <>
      <ScrollToButton targetId="top" label="↑ Top" />
      <div className="Blogpage" ref={BlogPageRef}>
        <div className="contact-page">
          <Blogsection />
        </div>
      </div>
      <TestimonialSection />
    </>
  );
}

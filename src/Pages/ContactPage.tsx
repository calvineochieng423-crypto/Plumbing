import Contactsection from "../Components/Contactsection";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { useEffect, useRef } from "react";
import "./ContactPage.css";

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const ContactPageRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!ContactPageRef.current) return;

    gsap.fromTo(
      ContactPageRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ContactPageRef.current,
          start: "top top",
          // toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="page-wrapper" ref={ContactPageRef}>
      <div className="contact-page">
        <Contactsection />
      </div>
    </div>
  );
}

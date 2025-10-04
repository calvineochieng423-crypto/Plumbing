import Projectsection from "../Components/Projectsection";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { useEffect, useRef } from "react";
import "./ContactPage.css";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectPage() {
  const ProjectRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!ProjectRef.current) return;

    gsap.fromTo(
      ProjectRef.current,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ProjectRef.current,
          start: "top top",
          // toggleActions: "play none none reverse",
        },
      }
    );
  }, []);
  return (
    <>
      <div className="contact-wrapper" ref={ProjectRef}>
        <Projectsection />
      </div>
    </>
  );
}

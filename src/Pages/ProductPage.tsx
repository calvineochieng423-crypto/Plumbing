import CTAsection from "../Components/CTAsection";
import Storesection from "../Components/Storesection";
import "./ContactPage.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function ProductPage() {
  const ProductRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!ProductRef.current) return;

    gsap.fromTo(
      ProductRef.current,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ProductRef.current,
          start: "top top",
          // toggleActions: "play none none reverse",
        },
      }
    );
  }, []);
  return (
    <>
      <div className="contact-wrapper" ref={ProductRef}>
        <Storesection />
      </div>
      <CTAsection />
    </>
  );
}

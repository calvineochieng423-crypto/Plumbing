"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Herosection.css";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function Herosection() {
  useEffect(() => {
    const section = document.querySelector(".hero-wrapper");

    if (section) {
      gsap.to(section, {
        y: -200,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }
    const handleLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="hero-wrapper">
      {/* Hero section */}
      <div className="hero-section" id="Home">
        <div className="image-bg">
          <img src="/image1.JPG" alt="hero background" />
        </div>

        <div className="hero-content">
          <h1>Reliable Plumbing Solutions</h1>
          <p>
            Professional, affordable, and available when you need us most.
            Quality service you can trust every time.
          </p>

          <div className="hero-links">
            <a href="#Services" className="hero-link">
              Our Services
            </a>
            <Link to="/projectpage" className="hero-link secondary">
              View Projects
            </Link>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="header-cta">
        <div className="cta-text">
          <h1>
            PLUMBING <br /> PROBLEM? <br /> We can help you!
          </h1>
        </div>
        <div className="header-text">
          <h2>Professional Plumbing, Leak and Heating Services.</h2>
          <p>
            Whether you're planning renovation or simply need routine
            maintenance on your home or office plumbing system, our professional
            technicians and mechanics can assist you effectively in the right
            way.
          </p>
          <Link to="contactpage" className="plumber-btn">
            Request a Plumber
          </Link>
        </div>
      </div>
    </section>
  );
}

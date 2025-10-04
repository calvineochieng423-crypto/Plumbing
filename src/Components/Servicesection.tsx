import { useEffect } from "react";
import "./Servicesection.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Servicesection() {
  useEffect(() => {
    gsap.fromTo(
      ".service-intro",
      { y: 150, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".service-intro",
          start: "top 85%",
        },
      }
    );
    gsap.utils.toArray(".service-card").forEach((card: any, i) => {
      gsap.fromTo(
        card,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power3.out",
          delay: i * 0.5,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 60%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <>
      {/* Intro Section */}
      <div className="service-intro" id="Services">
        <h2>Our Plumbing Services</h2>
        <p>
          From everyday maintenance to urgent repairs, our expert team delivers
          reliable plumbing solutions tailored to your needs. Explore our range
          of services designed to keep your systems running smoothly.
        </p>
      </div>
      <section className="service-wrapper">
        {/* Service Cards */}
        <div className="service-services">
          {/* 1. General Service */}
          <div className="service-card">
            <div className="image-wrapper">
              <img src="./service1.jpeg" alt="General Service" />
            </div>
            <div className="service-content">
              <h3>General Service</h3>
              <p>
                Comprehensive plumbing care for routine maintenance, repairs,
                and system check-ups.
              </p>
              <a href="#general" className="service-btn">
                View More
              </a>
            </div>
          </div>

          {/* 2. Water & System */}
          <div className="service-card">
            <div className="image-wrapper">
              <img src="./service2.jpeg" alt="Water & System" />
            </div>
            <div className="service-content">
              <h3>Water & System</h3>
              <p>
                Design, installation, and maintenance of reliable water supply
                and distribution systems.
              </p>
              <a href="#water" className="service-btn">
                View More
              </a>
            </div>
          </div>

          {/* 3. Drainage & Sewer */}
          <div className="service-card">
            <div className="image-wrapper">
              <img src="./service3.jpeg" alt="Drainage & Sewer" />
            </div>
            <div className="service-content">
              <h3>Drainage & Sewer</h3>
              <p>
                Expert solutions for blocked drains, sewer line repairs, and
                long-term system durability.
              </p>
              <a href="#drainage" className="service-btn">
                View More
              </a>
            </div>
          </div>

          {/* 4. Emergency Plumbing */}
          <div className="service-card">
            <div className="image-wrapper">
              <img src="./service4.jpeg" alt="Emergency Plumbing" />
            </div>
            <div className="service-content">
              <h3>Emergency Plumbing</h3>
              <p>
                Rapid response services for urgent leaks, bursts, and unexpected
                plumbing failures.
              </p>
              <a href="#emergency" className="service-btn">
                View More
              </a>
            </div>
          </div>

          {/* 5. Residential Service */}
          <div className="service-card">
            <div className="image-wrapper">
              <img src="./service5.jpeg" alt="Residential Service" />
            </div>
            <div className="service-content">
              <h3>Residential Service</h3>
              <p>
                Plumbing solutions tailored for households, from bathroom
                installations to pipe repairs.
              </p>
              <a href="#residential" className="service-btn">
                View More
              </a>
            </div>
          </div>

          {/* 6. Commercial Service */}
          <div className="service-card">
            <div className="image-wrapper">
              <img src="./service6.jpeg" alt="Commercial Service" />
            </div>
            <div className="service-content">
              <h3>Commercial Service</h3>
              <p>
                End-to-end plumbing support for offices, retail spaces, and
                large commercial facilities.
              </p>
              <a href="#commercial" className="service-btn">
                View More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

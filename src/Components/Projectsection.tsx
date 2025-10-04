import "./Projectsection.css";
import CountUp from "react-countup";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Servicesection from "./Servicesection";
import CTAsection from "./CTAsection";

gsap.registerPlugin(ScrollTrigger);

export default function Projectsection() {
  useEffect(() => {
    const counts = document.querySelectorAll(".project-number");

    counts.forEach((count) => {
      gsap.fromTo(
        count,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: count,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <>
      <div className="project-wrapper">
        <div className="project-page">
          {/* Intro Section */}
          <div className="project-intro">
            <h2>
              Upgraded <br />
              Grease Traps
            </h2>
            <p>
              Resilient piping, and advanced filtration to ensure uninterrupted
              service and reduced maintenance.
            </p>
            <a href="#Store">Store</a>
          </div>

          {/* Image */}
          <div className="project-image">
            <img src="./T6.jpeg" alt="Project image" />
          </div>

          {/* Project Stats */}
          <div className="project-prof">
            <div className="numbers">
              <p>
                Total Project{" "}
                <span className="project-number">
                  <CountUp start={0} end={500} duration={2.5} prefix="+" />
                </span>
              </p>
              <p>
                Happy Clients{" "}
                <span className="project-number">
                  <CountUp start={0} end={200} duration={2.5} prefix="+" />
                </span>
              </p>
              <p>
                Timeliness{" "}
                <span className="project-number">
                  <CountUp start={0} end={90} duration={2.5} suffix="%" />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Servicesection />
      <CTAsection />
    </>
  );
}

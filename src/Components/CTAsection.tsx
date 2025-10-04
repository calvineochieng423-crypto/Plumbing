import "./CTAsection.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function CTAsection() {
  return (
    <div className="cta-wrapper">
      <div className="cta-section">
        <div className="cta-header">
          <div className="cta-title">
            <h2>Need a Plumber You Can Trust?</h2>
          </div>
          <div className="cta-subtitle">
            <h3>
              Fast, reliable, and professional plumbing services right when you
              need them the most. Available 24/7 for all emergencies.
            </h3>
          </div>
          <Link to="/contactpage" className="cta-button">
            Book a Service Now
          </Link>
        </div>
        <div className="cta-image">
          <img src="./cta1.JPG" alt="Plumber" />
        </div>
      </div>
    </div>
  );
}

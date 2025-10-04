import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-about">
          <div className="footer-wrapper">
            <img src="./logo.png" alt="Blue Pipe Service" />
          </div>
          <p>
            Fast, trustworthy plumbing services available 24/7. From emergency
            repairs to installations, we’ve got you covered.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/productpage">Our Services</Link>
            </li>
            <li>
              <Link to="projectpage">Project</Link>
            </li>
            <li>
              <Link to="/contactpage">Book a Service</Link>
            </li>
            <li>
              <Link to="/contactpage">Contact Us</Link>
            </li>
            <li>
              <Link to="/blogspage">Blogs</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>123 Main Street, Nairobi, Kenya</p>
          <p>+254 700 123 456</p>
          <p>info@bluepipeservice.co.ke</p>

          {/* Social Icons */}
          <div className="footer-socials">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Reliable Plumbing Co. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

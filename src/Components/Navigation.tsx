import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./Navigation.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../CartContext";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const { state } = useCart();

  const overlayRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!overlayRef.current || !menuRef.current) return;

    if (open) {
      gsap.to(overlayRef.current, {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
      });
      gsap.fromTo(
        menuRef.current.querySelectorAll(".nav-item"),
        { y: 120, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2, duration: 0.3 }
      );
    } else {
      gsap.to(overlayRef.current, {
        x: "100%",
        opacity: 0,
        duration: 1.4,
        ease: "power3.in",
      });
    }
  }, [open]);

  return (
    <nav className="nav-bar">
      {/* Logo */}
      <div className="image">
        <img src="/logo.png" alt="Blue Pipe Service Logo" />
      </div>

      {/* Desktop nav */}
      <div className="nav-links">
        <div className="middle-links">
          <Link to="/">Home</Link>
          <HashLink smooth to="#Services">
            Services
          </HashLink>
          <Link to="/blogpage">Blogs</Link>
          <Link to="/projectpage">Project</Link>
          <Link to="/productpage">Products</Link>
        </div>

        {/* Cart + Appointment */}
        <div className="nav-actions">
          <div className="cart-icon">
            <ShoppingCart size={26} />
            <span className="cart-badge">{state.itemCount}</span>
          </div>
          <div className="right-link">
            <Link to="/contactpage">Appointment</Link>
          </div>
        </div>
      </div>

      {/* Hamburger */}
      <button
        className="hamburger"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>

      {/* Mobile overlay */}
      <div ref={overlayRef} className="nav-overlay">
        <div ref={menuRef} className="nav-mobile">
          <Link to="/" className="nav-item">
            Home
          </Link>
          <HashLink smooth to="#Services" className="nav-item">
            Services
          </HashLink>
          <Link to="/blogpage" className="nav-item">
            Blogs
          </Link>
          <Link to="/projectpage" className="nav-item">
            Project
          </Link>
          <Link to="/productpage" className="nav-item">
            Products
          </Link>

          {/* Cart also visible in mobile menu */}
          <div className="nav-item cart-mobile">
            <ShoppingCart size={28} />
            <span className="cart-badge">{state.itemCount}</span>
          </div>

          <Link to="/contactpage" className="nav-item cta">
            Appointment
          </Link>
        </div>
      </div>
    </nav>
  );
}

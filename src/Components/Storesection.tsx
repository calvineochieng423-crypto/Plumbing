import "./Storesection.css";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { useCart } from "../CartContext";

type Product = {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
};

const products: Product[] = [
  // --- General Service ---
  {
    id: 1,
    name: "Adjustable Wrench",
    category: "General Service",
    price: "$15",
    image: "./product1.png",
  },
  {
    id: 2,
    name: "Pipe Cutter",
    category: "General Service",
    price: "$25",
    image: "./product2.jpeg",
  },

  // --- Water & System ---
  {
    id: 3,
    name: "Water Pump",
    category: "Water & System",
    price: "$120",
    image: "./product3.jpeg",
  },
  {
    id: 4,
    name: "Water Heater",
    category: "Water & System",
    price: "$300",
    image: "./product4.jpeg",
  },

  // --- Drainage & Sewer ---
  {
    id: 5,
    name: "Drain Snake Machine",
    category: "Drainage & Sewer",
    price: "$450",
    image: "./product5.jpeg",
  },
  {
    id: 6,
    name: "Inspection Camera",
    category: "Drainage & Sewer",
    price: "$600",
    image: "./product6.jpeg",
  },

  // --- Emergency Plumbing ---
  {
    id: 7,
    name: "Leak Repair Clamp",
    category: "Emergency Plumbing",
    price: "$20",
    image: "./product7.jpeg",
  },
  {
    id: 8,
    name: "Sump Pump",
    category: "Emergency Plumbing",
    price: "$250",
    image: "./product8.jpeg",
  },

  // --- Residential Service ---
  {
    id: 9,
    name: "Bathroom Faucet",
    category: "Residential Service",
    price: "$80",
    image: "./product9.jpeg",
  },
  {
    id: 10,
    name: "Kitchen Sink",
    category: "Residential Service",
    price: "$200",
    image: "./product10.jpeg",
  },
];

export default function Storesection() {
  const logoRef = useRef<HTMLDivElement | null>(null);
  const [likeCounts, setLikeCounts] = useState<{ [key: number]: number }>(
    () => {
      const initCounts: { [key: number]: number } = {};
      products.forEach((p) => (initCounts[p.id] = 0));
      return initCounts;
    }
  );

  const { addToCart } = useCart();

  useEffect(() => {
    if (logoRef.current) {
      const totalWidth = logoRef.current.scrollWidth;
      gsap.to(logoRef.current, {
        x: -totalWidth / 3,
        duration: 200,
        ease: "linear",
        repeat: -1,
      });
    }
  }, []);

  const toggleLike = (id: number) => {
    setLikeCounts((counts) => ({
      ...counts,
      [id]: counts[id] + 1,
    }));
  };

  return (
    <div className="store-wrapper">
      {/* --- HERO SECTION --- */}
      <div className="store-section">
        <div className="store-image">
          <img src="./store-bg.JPG" alt="store image" />
        </div>
        <div className="store-intro">
          <h2>
            Offering <span>Flexible Purchases</span>
          </h2>
          <p>
            Choose the plan that fits your needs and enjoy a seamless buying
            experience.
          </p>
          <div className="store-links">
            <Link to="/contactpage" className="store-link">
              Request Plumber
            </Link>
            <Link to="/projectpage" className="store-link secondary">
              About Us
            </Link>
          </div>
        </div>
      </div>

      {/* --- MARQUEE LOGOS --- */}
      <div className="store-logo">
        <h2>
          More than a service, we deliver <span>reliability</span>
        </h2>
        <div className="logo-wrapper">
          <div className="logo" ref={logoRef}>
            <img src="./logo1.png" alt="company logo" />
            <img src="./logo2.png" alt="company logo" />
            <img src="./logo3.png" alt="company logo" />
            <img src="./logo4.png" alt="company logo" />
            <img src="./logo5.png" alt="company logo" />
            <img src="./logo6.png" alt="company logo" />
            {/* duplicate for loop */}
            <img src="./logo1.png" alt="company logo" />
            <img src="./logo2.png" alt="company logo" />
            <img src="./logo3.png" alt="company logo" />
            <img src="./logo4.png" alt="company logo" />
            <img src="./logo5.png" alt="company logo" />
            <img src="./logo6.png" alt="company logo" />
          </div>
        </div>
      </div>

      {/* --- PRODUCT STORE --- */}
      <div className="product-store">
        <h2 className="store-title">Plumbing Tools & Equipment</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <button
                  className="like-btn"
                  onClick={() => toggleLike(product.id)}
                >
                  ❤️
                </button>
                <span className="like-count">{likeCounts[product.id]}</span>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="category">{product.category}</p>
                <p className="price">{product.price}</p>
                {/* ✅ This now adds to global cart */}
                <button className="add-btn" onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import "./Blogsection.css";
import { Link } from "react-router-dom";

export default function Blogsection() {
  return (
    <div className="blog-wrapper">
      {/* Blog Header */}
      <div className="blog-header">
        <img src="/image2.jpeg" alt="Blog" className="blog-image" />
        <div className="blog-overlay">
          <h1>Smart Plumbing Insights</h1>
          <p>
            Explore professional tips, practical solutions, and industry
            knowledge to keep your plumbing system efficient, safe, and
            cost-effective. Learn how to prevent leaks, reduce water waste, and
            protect your home.
          </p>
        </div>
      </div>

      {/* Blog Grid Section */}
      <div className="blog-grid">
        {[
          {
            img: "./blog2.jpeg",
            title: "Water Waste",
            desc: "Leaky faucets waste thousands of gallons every year.",
          },
          {
            img: "./blog6.jpeg",
            title: "Home Damage",
            desc: "Leaks damage walls, floors, and even your foundation.",
          },
          {
            img: "./blog3.jpeg",
            title: "Health Risks",
            desc: "Mold and mildew from leaks harm your air quality.",
          },
          {
            img: "./blog4.jpeg",
            title: "Emergencies",
            desc: "Small leaks can burst into costly disasters.",
          },
          {
            img: "./blog1.jpeg",
            title: "Rising Bills",
            desc: "Hidden leaks send your water bills soaring.",
          },
          {
            img: "./blog5.jpeg",
            title: "Peace of Mind",
            desc: "Fixing leaks early saves money and stress.",
          },
        ].map((card, index) => (
          <div className="blog-card" key={index}>
            <div className="wrapper">
              <img src={card.img} alt={card.title} />
            </div>
            <div className="blog-content">
              <h2>{card.title}</h2>
              <p>{card.desc}</p>
              <Link to="/blogspage">View More</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

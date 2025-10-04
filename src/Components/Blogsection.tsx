import "./Blogsection.css";
import { Link } from "react-router-dom";

export default function Blogsection() {
  return (
    <>
      <div className="blog-wrapper">
        {/* Blog Header */}
        <div className="blog-header">
          <img src="/image2.jpeg" alt="Blog" className="blog-image" />
          <div className="blog-overlay">
            <h1>Smart Plumbing Insights</h1>
            <p>
              Explore professional tips, practical solutions, and industry
              knowledge to keep your plumbing system efficient, safe, and
              cost-effective. Learn how to prevent leaks, reduce water waste,
              and protect your home.
            </p>
          </div>
        </div>

        {/* Blog Grid Section */}
        <div className="grid-wrapper">
          <div className="blog-grid">
            {/* Card 1 */}
            <div className="blog-card">
              <div className="wrapper">
                <img src="./blog2.jpeg" alt="Water Waste" />
              </div>
              <div className="blog-content">
                <h2>Water Waste</h2>
                <p>Leaky faucets waste thousands of gallons every year.</p>
                <Link to="/blogspage">View More</Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="blog-card">
              <div className="wrapper">
                <img src="./blog6.jpeg" alt="Home Damage" />
              </div>
              <div className="blog-content">
                <h2>Home Damage</h2>
                <p>Leaks damage walls, floors, and even your foundation.</p>
                <Link to="/blogspage">View More</Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="blog-card">
              <div className="wrapper">
                <img src="./blog3.jpeg" alt="Health Risks" />
              </div>
              <div className="blog-content">
                <h2>Health Risks</h2>
                <p>Mold and mildew from leaks harm your air quality.</p>
                <Link to="/blogspage">View More</Link>
              </div>
            </div>

            {/* Card 4 */}
            <div className="blog-card">
              <div className="wrapper">
                <img src="./blog4.jpeg" alt="Emergencies" />
              </div>
              <div className="blog-content">
                <h2>Emergencies</h2>
                <p>Small leaks can burst into costly disasters.</p>
                <Link to="/blogspage">View More</Link>
              </div>
            </div>

            {/* Card 5 */}
            <div className="blog-card">
              <div className="wrapper">
                <img src="./blog1.jpeg" alt="Rising Bills" />
              </div>
              <div className="blog-content">
                <h2>Rising Bills</h2>
                <p>Hidden leaks send your water bills soaring.</p>
                <Link to="/blogspage">View More</Link>
              </div>
            </div>

            {/* Card 6 */}
            <div className="blog-card">
              <div className="wrapper">
                <img src="./blog5.jpeg" alt="Peace of Mind" />
              </div>
              <div className="blog-content">
                <h2>Peace of Mind</h2>
                <p>Fixing leaks early saves money and stress.</p>
                <Link to="/blogspage">View More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import "./Whysection.css";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Fast & Reliable Service",
      description:
        "We deliver your projects quickly without compromising quality.",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#1a1a1a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
    },
    {
      title: "Expert & Dedicated Team",
      description:
        "Our skilled professionals are here to make your vision a reality.",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#1a1a1a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 21v-2a4 4 0 0 0-8 0v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      ),
    },
    {
      title: "Affordable & Transparent Pricing",
      description: "We provide great value with no hidden fees or surprises.",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#1a1a1a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="9" y1="21" x2="9" y2="9"></line>
        </svg>
      ),
    },
  ];

  return (
    <section className="why-choose-us">
      <h2 className="section-title">Why Choose Us</h2>
      <div className="reasons-container">
        {reasons.map((reason, index) => (
          <div key={index} className="reason-card">
            <div className="icon-wrapper">{reason.svg}</div>
            <h3 className="reason-title">{reason.title}</h3>
            <p className="reason-description">{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

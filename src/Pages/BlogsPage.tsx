import TestimonialSection from "../Components/Testimonialsection";
import "./BlogsPage.css";

export default function BlogsPage() {
  return (
    <>
      <div className="blogs-wrapper">
        <div className="blogs-pages">
          {/* Water Waste */}
          <div className="water-wrapper" id="#water-wrapper">
            <h2>How Leaky Faucets Are Costing You Thousands</h2>
            <p>
              Leaky faucets and pipes aren’t just a minor inconvenience they can
              waste thousands of gallons of water each year, driving up both
              your utility bills and your environmental footprint. Even a slow
              drip adds up over time, potentially causing significant water loss
              and damage. Regular maintenance, timely repairs, and the use of
              water-efficient fixtures can dramatically reduce wastage, saving
              you money and contributing to sustainable water usage. Protect
              your home and the planet by addressing water leaks promptly.
            </p>
          </div>
          {/* Home Damage */}
          <div className="water-wrapper" id="#home-damage">
            <h2>Prevent Damage From Leaks</h2>
            <p>
              Even minor leaks can cause major damage to your home’s structure
              over time. Water intrusion can weaken walls, floors, and
              foundations, leading to costly repairs. Moisture also promotes
              mold growth, which compromises indoor air quality. Regular
              plumbing inspections and timely repairs are essential to maintain
              the integrity of your home and safeguard your investment.
            </p>
          </div>
          {/* Health Risks */}
          <div className="water-wrapper" id="#health-risk">
            <h2>Health Risks From Plumbing Leaks</h2>
            <p>
              Leaking pipes and standing water can create the perfect
              environment for mold, mildew, and bacteria. These contaminants can
              trigger allergies, respiratory issues, and other health problems,
              especially in children and the elderly. Keeping your plumbing in
              top condition ensures a healthier living environment and reduces
              exposure to harmful pathogens.
            </p>
          </div>
          {/* Emergencies */}
          <div className="water-wrapper" id="#emergencies">
            <h2>Prevent Plumbing Emergencies Before They Happen</h2>
            <p>
              Small leaks or blocked drains can escalate into serious plumbing
              emergencies, causing flooding and property damage. Quick detection
              and professional intervention are key to avoiding sudden, costly
              problems. Proactive maintenance not only protects your home but
              also gives you peace of mind knowing you’re prepared for
              unexpected plumbing issues.
            </p>
          </div>
          {/* Rising Bills */}
          <div className="water-wrapper" id="#bills">
            <h2>How Hidden Leaks Are Driving Up Your Water Bills</h2>
            <p>
              Unnoticed leaks can significantly increase your water bills over
              time. A small drip may seem harmless, but it can waste hundreds of
              gallons per month, leading to unnecessary expenses. Regular checks
              and repairs, coupled with water-efficient fixtures, can help you
              save money and conserve resources.
            </p>
          </div>
          {/* Peace of Mind */}
          <div className="water-wrapper" id="#peace">
            <h2>Secure Your Home With Dependable Plumbing</h2>
            <p>
              Addressing plumbing issues proactively ensures uninterrupted water
              service and prevents costly damage. Knowing that your home’s
              plumbing is in excellent condition gives you confidence and peace
              of mind. Routine inspections, timely repairs, and using
              high-quality materials are essential steps toward a safe and
              worry-free home environment.
            </p>
          </div>
        </div>
      </div>
      <TestimonialSection />
    </>
  );
}

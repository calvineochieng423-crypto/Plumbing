import { useState } from "react";
import "./FAQsection.css";

const questions = [
  {
    q: "How can I prevent my pipes from freezing in winter?",
    a: "Insulate your pipes using foam sleeves, seal leaks, and let faucets drip during extreme cold to prevent freezing.",
  },
  {
    q: "Why is my water pressure so low?",
    a: "Low water pressure can be caused by pipe leaks, clogged aerators, or a malfunctioning pressure regulator.",
  },
  {
    q: "How do I fix a leaking faucet?",
    a: "Turn off water supply, disassemble the faucet, replace worn washers or O-rings, and reassemble carefully.",
  },
  {
    q: "What causes my toilet to run continuously?",
    a: "A faulty flapper, fill valve, or float can cause running water. Check and replace the defective parts.",
  },
  {
    q: "How often should I have my drains cleaned?",
    a: "Regular maintenance every 6-12 months helps prevent clogs, depending on usage and pipe type.",
  },
  {
    q: "Can I use chemical drain cleaners safely?",
    a: "Chemical cleaners can damage pipes and harm the environment. Mechanical methods or enzymatic cleaners are safer.",
  },
];

export default function PlumbingAccordionMulti() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleAccordion = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <section className="accordion-section">
      {/* Converting Heading */}
      <div className="accordion-header">
        <h1>Stop Plumbing Problems Before They Start!</h1>
        <p>
          Discover quick solutions and expert tips to keep your home’s plumbing
          running smoothly and save money on costly repairs.
        </p>
      </div>

      {/* Accordion */}
      <div className="accordion-container">
        {questions.map((item, index) => (
          <div key={index} className="accordion-item">
            <button
              className="accordion-question"
              onClick={() => toggleAccordion(index)}
            >
              {item.q}
              <span
                className={`accordion-icon ${
                  openIndexes.includes(index) ? "open" : ""
                }`}
              >
                ▾
              </span>
            </button>
            <div
              className="accordion-answer"
              style={{
                maxHeight: openIndexes.includes(index) ? "200px" : "0px",
              }}
            >
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

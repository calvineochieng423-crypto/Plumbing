import Herosection from "../Components/Herosection";
import Servicesection from "../Components/Servicesection";
import Whysection from "../Components/Whysection";
import FAQsection from "../Components/FAQsection";
import TestimonialSection from "../Components/Testimonialsection";
import CTAsection from "../Components/CTAsection";

export default function HomePage() {
  return (
    <>
      <Herosection />
      <Servicesection />
      <Whysection />
      <FAQsection />
      <TestimonialSection />
      <CTAsection />
    </>
  );
}

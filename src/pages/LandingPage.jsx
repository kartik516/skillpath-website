import HeroSection from "../components/HeroSection";
import FeatureCard from "../components/FeatureCard";
import TestimonialSection from "../components/TestimonialSection";
import CTABanner from "../components/CTABanner";
import Footer from "../components/Footer";

const LandingPage = () => {
  const features = [
    {
      title: "Expert Mentors",
      description:
        "Learn from experienced industry professionals."
    },
    {
      title: "Hands-on Projects",
      description:
        "Build real-world projects to strengthen your portfolio."
    },
    {
      title: "Flexible Learning",
      description:
        "Study anytime, anywhere at your own pace."
    },
    {
      title: "Career Support",
      description:
        "Resume reviews and interview preparation."
    }
  ];

  return (
    <>
      <HeroSection />

      <section className="features">
        <h2>Our Features</h2>

        <div className="feature-grid">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>

      <TestimonialSection />

      <CTABanner />

      <Footer />
    </>
  );
};

export default LandingPage;
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <>
      <section className="about-page">

        <div className="about-header">
          <h1>About SkillPath</h1>
          <p>
            SkillPath is a modern online learning platform dedicated to helping
            students and professionals build practical, industry-ready skills
            through expert-led courses, hands-on projects, and personalized
            learning experiences.
          </p>
        </div>

        <div className="about-grid">

          <div className="about-card">
            <h2>🎯 Our Mission</h2>
            <p>
              To empower learners with practical knowledge and real-world
              experience that prepares them for successful careers in
              technology and beyond.
            </p>
          </div>

          <div className="about-card">
            <h2>🌍 Our Vision</h2>
            <p>
              To become one of the world's most trusted online learning
              platforms by providing accessible, affordable, and
              industry-relevant education.
            </p>
          </div>

          <div className="about-card">
            <h2>💡 Why Choose SkillPath?</h2>

            <ul>
              <li>✔ Expert Mentors</li>
              <li>✔ Project-Based Learning</li>
              <li>✔ Flexible Learning Schedule</li>
              <li>✔ Career Guidance</li>
              <li>✔ Placement Preparation</li>
              <li>✔ Industry Certificates</li>
            </ul>
          </div>

          <div className="about-card">
            <h2>🚀 Our Impact</h2>

            <h3>20,000+</h3>
            <p>Active Students</p>

            <h3>500+</h3>
            <p>Courses</p>

            <h3>100+</h3>
            <p>Expert Instructors</p>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
};

export default AboutPage;
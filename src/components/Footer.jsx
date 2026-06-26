import { Link } from "react-router-dom";
// import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h2>SkillPath</h2>

      <p>
        Empowering learners with practical skills and career-focused education.
      </p>

      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <p>Email: kartikkumardug@gmail.com</p>
      <p>Phone: +91 9759065074</p>

      <p>© 2026 SkillPath. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
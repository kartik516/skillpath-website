import { useState } from "react";
import Footer from "../components/Footer";

const ContactPage = () => {

  const [formData,setFormData]=useState({
    name:"",
    email:"",
    subject:"",
    message:""
  });

  const [success,setSuccess]=useState(false);

  const handleChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    });
  };

  const handleSubmit=(e)=>{

    e.preventDefault();

    if(
      !formData.name||
      !formData.email||
      !formData.subject||
      !formData.message
    ){
      alert("Please fill all fields");
      return;
    }

    setSuccess(true);

    setFormData({
      name:"",
      email:"",
      subject:"",
      message:""
    });

  };

  return(
    <>
    <section className="contact-page">

      <div className="contact-info">

        <h1>Contact Us</h1>

        <p>
          We'd love to hear from you. Whether you have a question,
          feedback, or need support, our team is here to help.
        </p>

        <div className="info-box">
          <h3>📧 Email</h3>
          <p>kartikkumardug@gmail.com</p>

          <h3>📞 Phone</h3>
          <p>+91 9759065074</p>

          <h3>📍 Address</h3>
          <p>New Delhi, India</p>
        </div>

      </div>

      <form onSubmit={handleSubmit}>

        <input
        type="text"
        placeholder="Full Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        />

        <input
        type="email"
        placeholder="Email Address"
        name="email"
        value={formData.email}
        onChange={handleChange}
        />

        <input
        type="text"
        placeholder="Subject"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        />

        <textarea
        placeholder="Write your message..."
        name="message"
        value={formData.message}
        onChange={handleChange}
        />

        <button>
          Send Message
        </button>

        {
          success &&
          <div className="success">
            ✅ Message sent successfully!
          </div>
        }

      </form>

    </section>

    <Footer/>
    </>
  );
};

export default ContactPage;
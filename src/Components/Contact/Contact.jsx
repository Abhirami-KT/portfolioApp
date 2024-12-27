import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="d-flex justify-content-center align-items-center m-5">
      <div className="p-5" style={{ maxWidth: '600px', width: '100%' }}>
        <h1 className=" text-primary text-center mb-4 ${darkMode ? 'text-light' : 'text-primary'}" >CONTACT ME</h1>
        <form
          onSubmit={handleSubmit}
          style={{ border: '2px solid #9FA6B2', padding: '20px', borderRadius: '10px' }} // Inline style for border
        >
          {/* Name input */}
          <div className="form-outline mb-4">
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
            />
            <label className="form-label" htmlFor="name">Name</label>
          </div>

          {/* Email input */}
          <div className="form-outline mb-4">
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
            />
            <label className="form-label" htmlFor="email">Email</label>
          </div>

          {/* Message textarea */}
          <div className="form-outline">
            <textarea
              id="message"
              name="message"
              className="form-control"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your Message"
            />
            <label className="form-label" htmlFor="message">Message</label>
          </div>

          {/* Submit button */}
          <button type="submit" className="btn btn-primary btn-block">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

import React, { useState } from 'react';
import './../assets/css/Common.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just alert the form data
    alert('Message submitted: ' + JSON.stringify(formData));
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      mobile: '',
      message: '',
    });
  };

  return (
    <div className='container'>
      <h1 style={{ marginBottom: '30px', fontWeight: 'bold' }}>
        <span style={{ color: '#d87d0a' }}>CONTACT </span>US
      </h1>
      <div className="content-text-fluid" style={{
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        padding: '20px',
        boxShadow: '0 0 5px #ccc',
        marginBottom: '30px',
        borderRadius: '4px'
      }}>
        {/* Contact Details */}
        <div style={{ flex: '1', paddingRight: '20px' }}>
          <h2 style={{ fontWeight: 'bold', marginBottom: '20px' }}>
            CONTACT <span style={{ color: '#d87d0a' }}>DETAILS</span>
          </h2>
          <hr style={{ borderColor: '#ccc', marginBottom: '20px' }} />
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px', color: '#333' }}>
            <li style={{ marginBottom: '10px' }}>
              <span role="img" aria-label="website" style={{ color: '#d87d0a', marginRight: '8px' }}>🌐</span> www.ujss.org.in
            </li>
            <li style={{ marginBottom: '10px' }}>
              <span role="img" aria-label="email" style={{ color: '#d87d0a', marginRight: '8px' }}>✉️</span> ujss.mumbai@gmail.com <strong></strong>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <span role="img" aria-label="location" style={{ color: '#d87d0a', marginRight: '8px' }}>📍</span> Utkal Jagruti Seva Sangh<br />
              #306, Kaveri Complex, Jagannath mandir road, Opp. Holiday Inn Hotel, Sakinaka Mumbai- 400072, MH, INDIA, phone: 028562887
            </li>
          </ul>
        </div>

        {/* Send Message Form */}
        <div style={{ flex: '1', paddingLeft: '20px' }}>
          <h2 style={{ fontWeight: 'bold', marginBottom: '20px' }}>
            SEND <span style={{ color: '#d87d0a' }}>MESSAGE</span>
          </h2>
          <hr style={{ borderColor: '#ccc', marginBottom: '20px' }} />
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
              style={{
                marginBottom: '10px',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '2px',
                boxShadow: '1px 1px 3px #eee',
                fontSize: '14px'
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Email ID"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                marginBottom: '10px',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '2px',
                boxShadow: '1px 1px 3px #eee',
                fontSize: '14px'
              }}
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile No"
              value={formData.mobile}
              onChange={handleChange}
              required
              style={{
                marginBottom: '10px',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '2px',
                boxShadow: '1px 1px 3px #eee',
                fontSize: '14px'
              }}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              style={{
                marginBottom: '10px',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '2px',
                boxShadow: '1px 1px 3px #eee',
                fontSize: '14px',
                resize: 'vertical'
              }}
            />
            <button
              type="submit"
              style={{
                width: '100px',
                backgroundColor: '#d87d0a',
                color: '#fff',
                border: 'none',
                borderRadius: '20px',
                padding: '8px 0',
                cursor: 'pointer',
                alignSelf: 'center',
                fontWeight: 'bold'
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Google Map Embed */}
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ marginBottom: '10px', fontWeight: 'bold' }}>Find Us On Google Map</h3>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7540.359579933019!2d72.8815858412182!3d19.09976702843869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c86fd71e6daf%3A0x9e36cbbcd5eac081!2sUtkal%20Jagruti%20Seva%20Sangh!5e0!3m2!1sen!2sin!4v1751828650173!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
   
      </div>
    </div>
  );
};

export default ContactUs;

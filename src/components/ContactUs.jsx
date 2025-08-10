import React, { useState } from 'react';
import office from '../assets/office.jpg';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-3 sm:px-8 md:px-6 py-8 font-sans relative"
      style={{
        backgroundImage: `url(${office})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0" />

      <div className="relative max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 shadow-xl rounded-2xl bg-white/70 backdrop-blur-md p-4 md:p-6 z-10 mt-20">
        
        {/* Left Side */}
        <div className="flex flex-col justify-center space-y-4 md:space-y-6 px-2 md:px-0">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 leading-snug drop-shadow-md">
            Let's Connect
          </h1>
          <p className="text-sm sm:text-base text-gray-700 max-w-sm leading-relaxed">
            Whether you're interested in manufacturing, construction, or trade, our team is here to assist. Reach out and start a conversation with Dankil Industries.
          </p>

          <div className="space-y-3 sm:space-y-4 text-gray-700">
            <ContactInfo 
              icon={<IconPhone />}
              text="+251 911 123 456"
            />
            <ContactInfo 
              icon={<IconMail />}
              text="info@dankalindustrial.com"
            />
            <ContactInfo 
              icon={<IconLocation />}
              text="123 Dankil Street, Addis Ababa, Ethiopia"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="relative flex flex-col justify-between px-2 md:px-0">
          {submitted ? (
            <div className="flex flex-col items-center justify-center space-y-4 p-4 sm:p-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-green-500 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Thank you!</h2>
              <p className="text-gray-700 text-center max-w-sm text-sm leading-relaxed">
                Your message has been sent. We will get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 bg-white/90 rounded-xl p-4 sm:p-6 shadow-md backdrop-blur-sm">
              <FloatingInput label="Name" name="name" type="text" value={formData.name} onChange={handleChange} required />
              <FloatingInput label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required />
              <FloatingInput label="Subject" name="subject" type="text" value={formData.subject} onChange={handleChange} />
              <FloatingTextarea label="Message" name="message" rows="4" value={formData.message} onChange={handleChange} required />
              
              <button
                type="submit"
                className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg shadow-md transition"
              >
                Send Message
              </button>
            </form>
          )}

          {/* Map */}
          <div className="mt-4 w-full h-36 sm:h-48 rounded-lg overflow-hidden shadow-md">
            <iframe
              title="Dankil Industries Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.543654665337!2d38.76361131531812!3d9.009742492698023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b852b2f7b8c33%3A0x78e438b0416188aa!2sDankil%20Industries!5e0!3m2!1sen!2set!4v1690833777581!5m2!1sen!2set"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ icon, text }) => (
  <div className="flex items-center space-x-2">
    {icon}
    <span className="text-sm font-medium">{text}</span>
  </div>
);

const FloatingInput = ({ label, type, name, value, onChange, required }) => (
  <div className="relative z-0 w-full group">
    <input
      type={type}
      name={name}
      id={name}
      required={required}
      value={value}
      onChange={onChange}
      className="block py-1.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 focus:outline-none focus:border-indigo-600 peer"
      placeholder=" "
    />
    <label
      htmlFor={name}
      className="absolute text-gray-500 text-xs duration-200 transform -translate-y-4 scale-75 top-1 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-indigo-600"
    >
      {label} {required && <span className="text-red-500">*</span>}
    </label>
  </div>
);

const FloatingTextarea = ({ label, name, value, onChange, rows, required }) => (
  <div className="relative z-0 w-full group">
    <textarea
      name={name}
      id={name}
      rows={rows}
      required={required}
      value={value}
      onChange={onChange}
      className="block py-1.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 focus:outline-none focus:border-indigo-600 resize-none peer"
      placeholder=" "
    />
    <label
      htmlFor={name}
      className="absolute text-gray-500 text-xs duration-200 transform -translate-y-4 scale-75 top-1 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-indigo-600"
    >
      {label} {required && <span className="text-red-500">*</span>}
    </label>
  </div>
);

const IconPhone = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h1.5l2.5 2.5V9H7a10 10 0 0010 10v-2h1l2 2v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
  </svg>
);

const IconMail = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8-4H8m10 8v2a2 2 0 01-2 2H8a2 2 0 01-2-2v-2a2 2 0 012-2h8a2 2 0 012 2z" />
  </svg>
);

const IconLocation = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);

export default ContactUs;

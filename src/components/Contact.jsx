import { useState } from 'react';

const Contact = () => {
  const icons = [
    <a href="https://github.com/sandy4314" target="_blank"><i className="bi bi-github text-2xl md:text-3xl"></i></a>,
    <a href="https://www.linkedin.com/in/onteru-sandeep-kumar-yadav-46a248291/" target="_blank"><i className="bi bi-linkedin text-2xl "></i></a>, 
    <a href="https://www.instagram.com/_sandy_0414_?igsh=YWZ0NXYwMGpxNmtk" target="_blank"><i className="bi bi-instagram text-2xl "></i></a>,
    <a href="https://x.com/S_a_n_d_y_0414?t=dIFQFTkfaO6IXRj5irnNjw&s=09" target="_blank"><i className="bi bi-twitter-x text-2xl "></i></a>
  ];

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      alert('Message Sent!');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div id="contact" className="flex flex-col md:flex-row max-w-[90%] mx-auto mt-10 h-full gap-5 mb-10">
      {/* Left Side (Contact Details) */}
      <div className="flex flex-col w-full p-6 md:w-1/2 rounded-lg border shadow-md" data-aos="fade-right" data-aos-delay="800">
        <div className="text-2xl mt-7">
          <h1><i className="bi bi-envelope mr-2"></i>Email</h1>
          <h1 className="text-lg mt-2 md:text-xl lg:text-2xl">sandeepkumaronteru7777@gmail.com</h1>
        </div>
        <div className="text-2xl mt-7">
          <h1><i className="bi bi-telephone-inbound"></i> Contact</h1>
          <h1 className="mt-2 text-lg md:text-xl lg:text-2xl">+91 6304919075</h1>
        </div>
        <div className="text-2xl mt-7">
          <h1><i className="bi bi-geo-alt"></i> Address</h1>
          <h1 className=" text-lg mt-2 md:text-xl lg:text-2xl">ViratNagar, Ongole, 523001</h1>
        </div>

        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-start gap-4 mt-5">
          {icons.map((icon, index) => (
            <div 
              key={index} 
              className="md:w-12 md:h-12 w-10 h-10 rounded-full border-2 border-gray-500 hover:scale-150 transition-transform duration-200 flex items-center justify-center cursor-pointer hover:border-none">
              {icon}
            </div>
          ))}
        </div>
      </div>

      {/* Right Side (Contact Form) */}
      <div className="w-full p-6 md:w-1/2 bg-green-200 rounded-lg shadow-md" data-aos="fade-left" data-aos-delay="800">
        <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="w-full p-3 border rounded-md" required />
          <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-3 border rounded-md" required />
          <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} className="w-full p-3 border rounded-md h-32" required />
          <button type="submit" className="p-3 bg-blue-500 text-white w-full rounded-md">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

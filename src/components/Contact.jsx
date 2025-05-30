import { useState } from 'react';

const Contact = () => {
  const icons = [
    <a href="https://github.com/sandy4314" target="_blank"><i className="bi bi-github text-2xl md:text-3xl dark:text-white"></i></a>,
    <a href="https://www.linkedin.com/in/onteru-sandeep-kumar-yadav-46a248291/" target="_blank"><i className="bi bi-linkedin text-2xl dark:text-white"></i></a>, 
    <a href="https://www.instagram.com/_sandy_0414_?igsh=YWZ0NXYwMGpxNmtk" target="_blank"><i className="bi bi-instagram text-2xl dark:text-white"></i></a>,
    <a href="https://x.com/S_a_n_d_y_0414?t=dIFQFTkfaO6IXRj5irnNjw&s=09" target="_blank"><i className="bi bi-twitter-x text-2xl dark:text-white"></i></a>
  ];

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://myportfolio-4-3e2g.onrender.com/contact', {
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
    <div id="contact" className="max-w-[90%] mx-auto mt-10 flex flex-col gap-5 h-full text-black dark:text-white">
      {/* Main Heading */}
      <div className="text-center">
        <h1 className="font-bold text-3xl text-[#003366] dark:text-indigo-300" data-aos="fade-up">Contact Me...</h1>
        <h1 className="text-xl font-extrabold text-[#FF9F00] mt-3 " data-aos="fade-up" data-aos-delay="100">Let's Connect and Build Together..</h1>
        <p className="text-lg m-3 text-[#555555] dark:text-gray-300" data-aos="fade-up" data-aos-delay="200">
          Reach out to me for collaborations, queries, or just to say hi!
        </p>
      </div>

      {/* Contact Details & Form Section */}
      <div className="flex flex-col md:flex-row gap-5">
        {/* Contact Details (Left Side) */}
        <div className="flex flex-col w-full md:w-1/2 p-6 rounded-lg border shadow-md bg-white dark:bg-gray-800 dark:border-gray-600" data-aos="fade-right" data-aos-delay="800">
          <div className="text-2xl mt-4">
            <h1><i className="bi bi-envelope mr-2"></i>Email</h1>
            <h1 className="text-lg mt-2 break-words">sandeepkumaronteru7777@gmail.com</h1>
          </div>
          <div className="text-2xl mt-7">
            <h1><i className="bi bi-telephone-inbound"></i> Contact</h1>
            <h1 className="mt-2 text-lg">+91 6304919075</h1>
          </div>
          <div className="text-2xl mt-7">
            <h1><i className="bi bi-geo-alt"></i> Address</h1>
            <h1 className="text-lg mt-2">ViratNagar, Ongole, 523001</h1>
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-wrap justify-start gap-4 mt-5">
            {icons.map((icon, index) => (
              <div 
                key={index} 
                className="md:w-12 md:h-12 w-10 h-10 rounded-full border-2 border-gray-500 dark:border-gray-300 hover:scale-150 transition-transform duration-200 flex items-center justify-center cursor-pointer hover:border-none">
                {icon}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form (Right Side) */}
        <div className="w-full md:w-1/2 p-6 bg-green-200 dark:bg-green-400  rounded-lg shadow-md" data-aos="fade-left" data-aos-delay="800">
          <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-500"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-500"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded-md h-32 dark:bg-gray-800 dark:text-white dark:border-gray-500"
              required
            />
            <button
              type="submit"
              className="p-3 bg-blue-500 hover:bg-blue-600 text-white w-full rounded-md dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

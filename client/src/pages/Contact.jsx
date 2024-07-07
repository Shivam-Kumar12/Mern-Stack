import React, { useState } from 'react'
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

const URL="http://localhost:5000/api/form/contact"
const defaultContactFormData = {
  username: "",
  email: "",
  message: "",
};
const Contact = () => {
  const [contact, setContact] = useState(defaultContactFormData);
  const [userData, setUserData] = useState(true)
  const{user}=useAuth()
  if (userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });

    setUserData(false);
  }
  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });

      if (response.ok) {
        setContact(defaultContactFormData);
        const data = await response.json();
        console.log(data);
        toast.success("Message send successfully");
      }
    } catch (error) {
      alert("Message not send");
      console.log(error);
    }
  };
   
  
  return (
    <>
    <section className="section-contact">
      <div className="contact-content container">
        <h1 className="main-heading">contact us</h1>
      </div>
      {/* contact page main  */}
      <div className="container grid grid-two-cols">
        <div className="contact-img">
          <img src="/images/support.png" alt="we are always ready to help" />
        </div>

        {/* contact form content actual  */}
        <section className="section-form">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">username</label>
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="off"
                value={contact.username}
                onChange={handleInput}
                required
              />
            </div>

            <div>
              <label htmlFor="email">email</label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                value={contact.email}
                onChange={handleInput}
                required
              />
            </div>

            <div>
              <label htmlFor="message">message</label>
              <textarea
                name="message"
                id="message"
                autoComplete="off"
                value={contact.message}
                onChange={handleInput}
                required
                cols="30"
                rows="6"
              ></textarea>
            </div>

            <div>
              <button type="submit">submit</button>
            </div>
          </form>
        </section>
      </div>

      <section className="mb-3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.4151351648065!2d72.62399970000001!3d23.1184965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e818300f6f5d9%3A0x2b414ef08a7c1049!2sAgora%20Mall%20Rd%2C%20Sughad%2C%20Ahmedabad%2C%20Gujarat%20382424!5e0!3m2!1sen!2sin!4v1716809177964!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </section>
  </>
  )
}

export default Contact
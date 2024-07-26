import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_0xs8l4c', // Service ID
      'template_fyjklh6', // Template ID بتاعك
      {
        from_name: formState.name,
        message: formState.message,
        to_name: 'Yousef', // اسمك
        reply_to: formState.email,
      },
      'SAvMAPUKadsV7JmoR' // Public Key (User ID بتاعك)
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully!');
    }, (err) => {
      console.log('FAILED...', err);
      alert('Failed to send message, please try again.');
    });

    setFormState({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="container">
      <h1 className="sectionTitle">Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={formState.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={formState.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            value={formState.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;

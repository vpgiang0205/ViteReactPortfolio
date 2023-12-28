import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import './contact.css'

export default function Contact() {
  const form = useRef();

  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_zfrjend', 'template_q6r0u9r', form.current, 'Upxiat5EO1yLQlRQX')
      .then(
        (result) => {
          setSubmitMessage("Message sent successfully!");
          console.log(result.text);
        },
        (error) => {
          setSubmitMessage("Error sending message. Please try again later.");
          console.log(error.text);
        }
      );
  };

  return (
    <section id="section__Contact">
      <h1 className="sections__Title text-center" data-aos="fade-right">Contact Me</h1>

      <form ref={form} onSubmit={handleSubmit}>
        <div className="flex gap-5">
          <input name="firstName" data-aos="fade-right" data-aos-delay="300" type="text" onChange={handleChange} className="w-1/2 p-2 contact__Input" placeholder="First Name" />
          <input name="lastName" data-aos="fade-right" data-aos-delay="500" type="text" onChange={handleChange} className="w-1/2 p-2 contact__Input" placeholder="Last Name" />
        </div>
        <input name="email" type="email" data-aos="fade-right" data-aos-delay="900" className="w-full p-2 my-2 contact__Input" onChange={handleChange} placeholder="Email Address" />
        <textarea name="message" data-aos="fade-right" data-aos-delay="1100" rows={1} onChange={handleChange} className="w-full p-2 contact__Input" placeholder="Message" />

        <div className="text-center my-2">
          <button className="button__Primary border border-white text-white px-4 py-2" type="submit">
            GET IN TOUCH
          </button>
        </div>
      </form>

      {submitMessage && <p className="text-center">{submitMessage}</p>}
    </section>
  );
}

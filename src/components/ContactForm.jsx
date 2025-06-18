import { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert("Thank you! We'll be in touch shortly.");
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="bg-slate-900 py-20 px-6">
      <div className="max-w-3xl mx-auto text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
        <p className="text-slate-400 mb-10">We’d love to hear from you and build something amazing.</p>
        <form onSubmit={handleSubmit} className="grid gap-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="p-4 bg-slate-800 rounded-lg border border-slate-700 text-white"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="p-4 bg-slate-800 rounded-lg border border-slate-700 text-white"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="p-4 bg-slate-800 rounded-lg border border-slate-700 text-white h-32"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-emerald-500 text-black font-semibold py-3 rounded-lg hover:bg-emerald-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

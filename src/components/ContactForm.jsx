'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We'll be in touch shortly.");
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="bg-slate-950 py-20 px-6 text-white">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center mb-6"
      >
        Get in Touch with PropLux
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-slate-400 text-center mb-14 max-w-xl mx-auto"
      >
        Have questions or ideas? Let’s talk and explore how PropLux can elevate your real estate journey.
      </motion.p>

      <motion.form
        onSubmit={handleSubmit}
        className="grid gap-6 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="p-4 bg-slate-900 rounded-xl border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="p-4 bg-slate-900 rounded-xl border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          className="p-4 bg-slate-900 rounded-xl border border-white/10 text-white h-32 resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500"
          required
        />
        <motion.button
          type="submit"
          whileTap={{ scale: 0.98 }}
          className="bg-emerald-500 text-black font-semibold py-3 rounded-xl hover:bg-emerald-600 transition-colors"
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
};

export default ContactForm;

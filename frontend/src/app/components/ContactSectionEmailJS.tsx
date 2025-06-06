"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { emailJSConfig } from '../lib/config';

export default function ContactSectionEmailJS() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: '',
    isSubmitting: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus(prev => ({ ...prev, isSubmitting: true }));

    try {
      await emailjs.send(
        emailJSConfig.serviceId,
        emailJSConfig.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'marwanlmusa@gmail.com'
        },
        emailJSConfig.publicKey
      );

      setFormStatus({
        submitted: true,
        success: true,
        message: 'Thank you for your message! I will get back to you soon.',
        isSubmitting: false
      });

      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch {
      console.log('Email sending failed');
      setFormStatus({
        submitted: true,
        success: false,
        message: "Failed to send message. Please try again later.",
        isSubmitting: false
      });
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>

        <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Get In Touch</h3>

              {formStatus.submitted && (
                <div className={`p-4 mb-6 rounded-md ${formStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {formStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="contact-input"
                    required
                    disabled={formStatus.isSubmitting}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="contact-input"
                    required
                    disabled={formStatus.isSubmitting}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="contact-input"
                    required
                    disabled={formStatus.isSubmitting}
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="contact-input"
                    required
                    disabled={formStatus.isSubmitting}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full flex justify-center items-center"
                  disabled={formStatus.isSubmitting}
                >
                  {formStatus.isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-lg shadow-md p-8 h-full">
              <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <a href="mailto:marwanlmusa@gmail.com" className="text-gray-700 hover:text-primary">
                      marwanlmusa@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <FaPhone className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <a href="tel:+6285240755074" className="text-gray-700 hover:text-primary">
                      +62 852 4075 5074
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Location</h4>
                    <p className="text-gray-700">
                      612 West 116th street, New York, USA
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-4">Connect With Me</h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://linkedin.in/marwanmusa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      <FaLinkedin className="text-xl" />
                    </a>
                    <a
                      href="https://github.com/marwanmusa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      <FaGithub className="text-xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 
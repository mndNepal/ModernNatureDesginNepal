import React, { useState, useEffect, useRef } from 'react';
import Container from '../ui/Container.tsx';
import { Phone, Mail } from "lucide-react";
import emailjs from 'emailjs-com';

// Form data interface with index signature for EmailJS
interface FormData {
  name: string;
  address: string;
  country: string; // separate country field
  email: string;
  contact: string;
  message: string;
  [key: string]: string; // needed for EmailJS
}

interface FormErrors {
  name?: string;
  email?: string;
  contact?: string;
}

export default function StudioBanner() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [formData, setFormData] = useState<FormData>({
    name: '',
    address: '',
    country: '',
    email: '',
    contact: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isVisible, setIsVisible] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2, rootMargin: '50px' }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!/^[a-zA-Z\s]+$/.test(formData.name)) newErrors.name = 'Name can contain only alphabets';
    if (!formData.email.includes('@')) newErrors.email = "Email must include '@'";
    if (!/^\d+$/.test(formData.contact)) newErrors.contact = 'Contact must contain only numbers';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSending(true);

    emailjs.send(
      "service_t313slu",       // Your Service ID
      "template_l2cywnd",      // Your Template ID
      formData,                // Form data
      "WUgx70zG43S3EF8fw"      // Public Key
    )
    .then(() => {
      setSending(false);
      setSent(true);
      setFormData({ name: '', address: '', country: '', email: '', contact: '', message: '' });
    })
    .catch(() => {
      setSending(false);
      alert("Something went wrong. Please try again.");
    });
  };

  return (
    <section
      ref={sectionRef}
      id="studio"
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-sage-green/10 to-mint-green/10 px-4 sm:px-6"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Left Column: Contact Form */}
          <div className={`bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-medium text-charcoal mb-4 sm:mb-5 text-center">Contact Us</h2>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 max-w-lg mx-auto">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block mb-1 text-xs sm:text-sm text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-2 sm:p-2.5 text-sm sm:text-base border rounded ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                  required
                />
                {errors.name && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Address */}
              <div>
                <label htmlFor="address" className="block mb-1 text-xs sm:text-sm text-gray-700">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full p-2 sm:p-2.5 text-sm sm:text-base border border-gray-300 rounded"
                />
              </div>

              {/* Country */}
              <div>
                <label htmlFor="country" className="block mb-1 text-xs sm:text-sm text-gray-700">Country</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full p-2 sm:p-2.5 text-sm sm:text-base border border-gray-300 rounded"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block mb-1 text-xs sm:text-sm text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-2 sm:p-2.5 text-sm sm:text-base border rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                  required
                />
                {errors.email && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Contact */}
              <div>
                <label htmlFor="contact" className="block mb-1 text-xs sm:text-sm text-gray-700">Contact Number</label>
                <input
                  type="tel"
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  className={`w-full p-2 sm:p-2.5 text-sm sm:text-base border rounded ${errors.contact ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.contact && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.contact}</p>}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block mb-1 text-xs sm:text-sm text-gray-700">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full p-2 sm:p-2.5 text-sm sm:text-base border border-gray-300 rounded"
                  required
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={sending}
                className="w-full bg-mint-green text-charcoal px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-medium hover:bg-mint-green/90 transition"
              >
                {sending ? 'Sending...' : 'Submit'}
              </button>

              {sent && <p className="text-green-600 text-xs sm:text-sm mt-1">Message sent successfully!</p>}
            </form>
          </div>

          {/* Right Column: Visit Us Card */}
          <div className={`bg-off-white rounded-lg p-4 sm:p-6 md:p-8 lg:p-12 shadow-lg transition-all duration-800 ${isVisible ? 'opacity-100 translate-x-0 shadow-xl' : 'opacity-0 translate-x-8 shadow-lg'}`}
               style={{
                 transitionDelay: isVisible ? '300ms' : '0ms',
                 transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
               }}>
            <div className="mb-4 sm:mb-6">
              <span className={`inline-block text-xs sm:text-sm font-medium uppercase tracking-wide mb-2 transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
                Experience Hand-Knotted Mastery
              </span>
              <h2 className={`font-serif text-2xl sm:text-3xl lg:text-4xl font-medium text-charcoal mb-4 sm:mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                Visit Us
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              <p className={`text-sm sm:text-base text-charcoal/70 leading-relaxed transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
                Explore our showroom in Lalitpur, Nepal - meet our artisans, see traditional weaving in action, and find the perfect rug for your space.
              </p>

              <div className="space-y-3 sm:space-y-4">
                <div className={`transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
                  <h4 className="font-medium text-sm sm:text-base text-charcoal mb-1 sm:mb-2">Showroom Hours</h4>
                  <p className="text-xs sm:text-sm text-charcoal/70">
                    Sunday - Friday: 8:00 AM - 5:00 PM<br />
                    Saturday: 8:00 AM - 12:00 PM
                  </p>
                </div>

                <div className={`transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
                  <h4 className="font-medium text-sm sm:text-base text-charcoal mb-1 sm:mb-2">Location</h4>
                  <p className="text-xs sm:text-sm text-charcoal/70">Thaiba-14, Lalitpur<br />Nepal</p>
                </div>

                <div className={`transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
                  <h4 className="font-medium text-sm sm:text-base text-charcoal mb-1 sm:mb-2">Contact</h4>
                  <div className="text-xs sm:text-sm text-charcoal/70 space-y-2">
                    <p className="flex items-center space-x-2">
                      <Phone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                      <span>+977-9801037585</span>
                    </p>

                    <p className="flex items-start space-x-2">
                      <Mail className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 mt-0.5" />
                      <span className="break-all">info@modernnaturedesignnepal.com</span>
                    </p>

                    <p className="flex items-start space-x-2">
                      <Mail className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 mt-0.5" />
                      <span className="break-all">modernnaturedesignnepal@gmail.com</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => window.location.href = "https://www.google.com/maps/place/Modern+Nature+Design+Nepal/@27.6277525,85.3437677,133m/data=!3m1!1e3!4m6!3m5!1s0x39eb173a709414c3:0x982c4a313e31facb!8m2!3d27.6277484!4d85.3441998!16s%2Fg%2F11d_tqv0p9?entry=ttu&g_ep=EgoyMDI1MTIwMS4wIKXMDSoASAFQAw%3D%3D"}
              className={`bg-mint-green text-charcoal px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg text-sm sm:text-base font-medium hover:bg-mint-green/90 transition-all duration-600 w-full sm:w-auto ${isVisible ? 'opacity-100 translate-y-0 shadow-md hover:shadow-lg' : 'opacity-0 translate-y-4 shadow-sm'}`}
              style={{
                transitionDelay: isVisible ? '500ms' : '0ms',
                transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              }}
            >
              Find a showroom
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

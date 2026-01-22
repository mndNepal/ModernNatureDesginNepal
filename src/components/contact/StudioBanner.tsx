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
  subject?: string;
  name?: string;
  email?: string;
  contact?: string;
  address?: string;
  message?: string;
  country?: string;
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
    subject:''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isVisible, setIsVisible] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
      if (allowedTypes.includes(file.type)) {
        setSelectedFile(file);
      } else {
        alert('Please select a valid file (JPG, PNG, or PDF)');
        e.target.value = '';
      }
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.country.trim()) {
      newErrors.country = 'Country is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }

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
      setFormData({ name: '', address: '', country: '', email: '', contact: '', message: '',subject:'' });
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 lg:items-stretch">
          {/* Left Column: Contact Form */}
          <div className={`bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 transition-all duration-800 h-full ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-medium text-charcoal mb-4 sm:mb-5 text-center pt-6 sm:pt-0">Contact Us</h2>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 max-w-lg mx-auto">
              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block mb-1 text-xs sm:text-sm text-gray-700">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full p-2 sm:p-2.5 text-sm sm:text-base border rounded ${errors.subject ? 'border-red-500' : 'border-gray-300'}`}
                  required
                />
                {errors.subject && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.subject}</p>}
              </div>

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
                  className={`w-full p-2 sm:p-2.5 text-sm sm:text-base border rounded ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.address && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.address}</p>}

              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block mb-1 text-xs sm:text-sm text-gray-700">Company (Optional)</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
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
                  className={`w-full p-2 sm:p-2.5 text-sm sm:text-base border rounded ${errors.country ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.country && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.country}</p>}

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

              {/* File Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Choose a File (Optional)
                </label>
                <input
                  type="file"
                  name="file"
                  accept=".jpg,.jpeg,.png,.pdf"
                  onChange={handleFileChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm sm:text-base file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-medium file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100"
                />
                {selectedFile && (
                  <p className="text-gray-600 text-xs sm:text-sm mt-1">
                    Selected: {selectedFile.name}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block mb-1 text-xs sm:text-sm text-gray-700">Your Message / Special Instruction</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className={`w-full p-2 sm:p-2.5 text-sm sm:text-base border rounded ${errors.country ? 'border-red-500' : 'border-gray-300'}`}
                  required
                />
                {errors.message && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.message}</p>}

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
              onClick={() => window.open("https://www.google.com/maps/place/Modern+Nature+Design+Nepal/@27.6277525,85.3437677,133m/data=!3m1!1e3!4m6!3m5!1s0x39eb173a709414c3:0x982c4a313e31facb!8m2!3d27.6277484!4d85.3441998!16s%2Fg%2F11d_tqv0p9?entry=ttu&g_ep=EgoyMDI1MTIwMS4wIKXMDSoASAFQAw%3D%3D", '_blank', 'noopener,noreferrer')}
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

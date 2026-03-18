/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Phone, 
  MapPin, 
  MessageCircle, 
  CheckCircle2, 
  Star, 
  Menu, 
  X, 
  ChevronRight,
  Stethoscope,
  Sparkles,
  ShieldCheck,
  Clock,
  UserCheck,
  Smile
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const WHATSAPP_LINK = "https://wa.me/919622452158?text=Hello%20Doctor%20I%20want%20to%20book%20an%20appointment%20at%20Dr%20Mahee's%20Dental%20Clinic";
const CLINIC_NAME = "Dr Mahee's Dental Clinic";
const CLINIC_ADDRESS = "Khayam Chowk, Khyber Medical Institute, Srinagar, Jammu and Kashmir 190001";
const CLINIC_PHONE = "+91 9622452158";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-lg">
              <Smile className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">
              Dr Mahee's <span className="text-primary">Dental</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-600">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-primary text-white px-6 py-4 rounded-xl text-center font-bold flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Book Appointment
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-accent rounded-l-[100px] hidden lg:block" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
              <Sparkles className="w-4 h-4" />
              Trusted Dental Care in Srinagar
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
              Your Smile, <br />
              <span className="text-primary">Our Priority.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
              Experience world-class dental treatments at Dr Mahee's Dental Clinic. 
              We combine modern technology with gentle care to give you the perfect smile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 group"
              >
                <MessageCircle className="w-6 h-6" />
                Book Appointment
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex items-center gap-3 px-6 py-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Call Us Now</p>
                  <p className="text-sm font-bold text-slate-900">{CLINIC_PHONE}</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000" 
                alt="Modern Dental Clinic"
                className="w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Stats */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-3xl shadow-xl border border-slate-50"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-white">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">1000+</p>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Happy Patients</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1000" 
              alt="Dental Care"
              className="rounded-[40px] shadow-xl"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">About the Clinic</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Leading the Way in <br />
              <span className="text-secondary">Modern Dentistry</span>
            </h3>
            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              Dr Mahee's Dental Clinic is dedicated to providing high-quality dental care in a comfortable and friendly environment. 
              Our clinic is equipped with the latest dental technology to ensure precise diagnosis and effective treatment.
            </p>
            <div className="space-y-4 mb-10">
              {[
                "Personalized Patient Care",
                "Advanced Diagnostic Tools",
                "Sterilized & Hygienic Environment",
                "Experienced Dental Specialists"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:gap-4 transition-all"
            >
              Learn More About Us <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Teeth Cleaning",
      desc: "Professional scaling and polishing to remove plaque and tartar for a fresh smile.",
      icon: <Sparkles className="w-8 h-8" />
    },
    {
      title: "Teeth Whitening",
      desc: "Advanced whitening treatments to brighten your smile safely and effectively.",
      icon: <Smile className="w-8 h-8" />
    },
    {
      title: "Dental Implants",
      desc: "Permanent and natural-looking solutions for missing teeth using high-quality implants.",
      icon: <ShieldCheck className="w-8 h-8" />
    },
    {
      title: "Root Canal Treatment",
      desc: "Painless root canal therapy to save damaged teeth and relieve dental pain.",
      icon: <Stethoscope className="w-8 h-8" />
    },
    {
      title: "Braces & Aligners",
      desc: "Straighten your teeth with traditional braces or modern clear aligners.",
      icon: <CheckCircle2 className="w-8 h-8" />
    },
    {
      title: "Tooth Extraction",
      desc: "Safe and gentle tooth removal when necessary, ensuring patient comfort.",
      icon: <X className="w-8 h-8" />
    }
  ];

  return (
    <section id="services" className="py-24 bg-accent/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">Our Services</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-6">Comprehensive Dental Care</h3>
          <p className="text-slate-600 text-lg">
            We offer a wide range of dental services to meet all your oral health needs, 
            from routine checkups to complex procedures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[32px] shadow-sm border border-slate-100 hover:shadow-xl transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed mb-6">{service.desc}</p>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-primary flex items-center gap-2"
              >
                Book Now <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      title: "Experienced Dentist",
      desc: "Highly skilled professionals with years of clinical experience.",
      icon: <UserCheck />
    },
    {
      title: "Modern Equipment",
      desc: "State-of-the-art dental technology for precise treatments.",
      icon: <ShieldCheck />
    },
    {
      title: "Affordable Treatment",
      desc: "Quality dental care that fits your budget without compromise.",
      icon: <Sparkles />
    },
    {
      title: "Patient-Friendly Care",
      desc: "A gentle approach focused on your comfort and well-being.",
      icon: <Smile />
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[60px] p-12 lg:p-24 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 blur-[100px]" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">Why Choose Us</h2>
              <h3 className="text-4xl font-bold text-white mb-8 leading-tight">
                We Provide the Best <br />
                <span className="text-secondary">Dental Experience</span>
              </h3>
              <div className="grid sm:grid-cols-2 gap-8">
                {features.map((f, i) => (
                  <div key={i}>
                    <div className="text-secondary mb-4">{f.icon}</div>
                    <h4 className="text-lg font-bold text-white mb-2">{f.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000" 
                alt="Dental Equipment"
                className="rounded-[40px] shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Aamir Khan",
      text: "Excellent service! Dr Mahee is very professional and the clinic is very clean. Highly recommended for root canal treatment.",
      rating: 5
    },
    {
      name: "Saba Jan",
      text: "I was very nervous about my wisdom tooth extraction, but the doctor made it so easy and painless. Great experience!",
      rating: 5
    },
    {
      name: "Irfan Ahmad",
      text: "The best dental clinic in Srinagar. Affordable prices and modern equipment. My teeth whitening results are amazing.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">Testimonials</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-6">What Our Patients Say</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-600 italic mb-8 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500">
                  {review.name[0]}
                </div>
                <span className="font-bold text-slate-900">{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AppointmentSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-[40px] p-8 lg:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-primary/30">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <div className="relative z-10">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Ready to Transform Your Smile?</h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Book your appointment today and take the first step towards a healthier, brighter smile. 
              Our team is ready to assist you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary px-10 py-5 rounded-2xl font-bold text-xl hover:bg-slate-50 transition-all flex items-center gap-3 shadow-xl"
              >
                <MessageCircle className="w-6 h-6" />
                Book via WhatsApp
              </a>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-white/60">Or Call Us At</p>
                  <p className="text-xl font-bold">{CLINIC_PHONE}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MapSection = () => {
  const MAP_LINK = "https://g.co/kgs/FRoHbj";
  
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">Location</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-6">Find Us in Srinagar</h3>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We are conveniently located at Khyber Medical Institute, Khayam Chowk. 
            Visit us for premium dental care.
          </p>
        </div>
        <div className="rounded-[40px] overflow-hidden shadow-xl h-[450px] border-8 border-white mb-10">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.567890123456!2d74.8123456!3d34.0812345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e18f0000000001%3A0x0!2sKhyber%20Medical%20Institute!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
            title="Clinic Location"
          />
        </div>
        <div className="text-center">
          <a 
            href={MAP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all border border-slate-100"
          >
            <MapPin className="w-5 h-5 text-primary" />
            Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">Contact Us</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-8">Get in Touch</h3>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Clinic Address</h4>
                  <p className="text-slate-600 leading-relaxed">{CLINIC_ADDRESS}</p>
                  <a 
                    href="https://g.co/kgs/FRoHbj" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-bold mt-2"
                  >
                    View on Google Maps <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">WhatsApp Number</h4>
                  <p className="text-slate-600 leading-relaxed">{CLINIC_PHONE}</p>
                  <a 
                    href={WHATSAPP_LINK} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-secondary font-bold mt-2"
                  >
                    Chat on WhatsApp <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center text-primary shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Working Hours</h4>
                  <p className="text-slate-600 leading-relaxed">Mon - Sat: 10:00 AM - 06:00 PM</p>
                  <p className="text-slate-600 leading-relaxed">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 p-10 rounded-[40px] border border-slate-100">
            <h4 className="text-2xl font-bold text-slate-900 mb-6 text-center">Quick Appointment</h4>
            <p className="text-slate-600 text-center mb-10">
              Click the button below to send us a message on WhatsApp for a quick booking.
            </p>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 shadow-lg hover:bg-primary/90 transition-all"
            >
              <Smile className="w-6 h-6" />
              Book Appointment
            </a>
            <div className="mt-10 pt-10 border-t border-slate-200 text-center">
              <p className="text-sm text-slate-500 mb-4 uppercase tracking-widest font-bold">Follow Us</p>
              <div className="flex justify-center gap-4">
                {['Facebook', 'Instagram', 'Twitter'].map((social) => (
                  <a key={social} href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all">
                    <span className="sr-only">{social}</span>
                    <div className="w-2 h-2 rounded-full bg-current" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary p-2 rounded-lg">
                <Smile className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                Dr Mahee's <span className="text-primary">Dental</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-md leading-relaxed mb-8">
              Providing premium dental care in Srinagar. Our clinic is committed to delivering 
              the best dental treatments with a patient-first approach.
            </p>
            <div className="flex items-center gap-4">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary transition-all">
                <MessageCircle className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary transition-all">
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm">{CLINIC_ADDRESS}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm">{CLINIC_PHONE}</span>
              </li>
              <li className="flex gap-3">
                <MessageCircle className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm">WhatsApp Available</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} {CLINIC_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-[#25D366]/40 transition-all"
    >
      <MessageCircle className="w-8 h-8" />
    </motion.a>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <AppointmentSection />
      <MapSection />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

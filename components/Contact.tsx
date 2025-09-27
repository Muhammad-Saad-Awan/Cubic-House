"use client";

import { motion } from "framer-motion";
import { Poppins } from "next/font/google";
import { Mail, Phone, MapPin } from "lucide-react";
import { useForm, } from "@formspree/react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ContactUs = () => {
  // Replace "mwprpdzg" with your Formspree form ID
  const [state, handleSubmit] = useForm("mwprpdzg");

  return (
    <section
      className={`${poppins.className} relative min-h-screen flex items-center justify-center px-6 pt-28 pb-16 bg-black text-white`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-[url('/images/hero-bg.JPG')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        {/* Left: Info Section */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold">Get in Touch</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Have a project in mind? Let’s discuss how we can bring your vision
            to life. Reach out to us via phone, email, or the form. Our team
            will get back to you promptly.
          </p>

          <div className="space-y-6 mt-4">
            {/* Phone */}
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-white/10 text-white border border-white/20">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="font-semibold hover:text-gray-100 transition-colors duration-300">
                  <a
                    href="tel:+923032823333"
                    className="flex items-center justify-start gap-1"
                  >
                    +92303-
                    <span className="flex flex-col items-center">
                      CUBE
                      <span className="text-sm font-normal leading-tight">
                        (2823)
                      </span>
                    </span>
                    -333
                  </a>
                </p>
              </div>
            </div>
            {/* Email */}
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-white/10 text-white border border-white/20">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="font-semibold hover:text-gray-100 transition-colors duration-300">
                  info@cubichouse.com
                </p>
              </div>
            </div>

            {/* Office */}
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-white/10 text-white border border-white/20">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Office</p>
                <p className="font-semibold hover:text-gray-100 transition-colors duration-300">
                  671-E, E BLOCK, PHASE I WAPDA TOWN, MULTAN
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
{/* Right: Contact Form */}
<motion.form
  action="https://formspree.io/f/mwprpdzg"
  method="POST"
  initial={{ x: 50, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg space-y-6"
>
  <div>
    <label htmlFor="name" className="block text-sm font-medium mb-2">
      Name
    </label>
    <input
      type="text"
      id="name"
      name="name"
      placeholder="Your Name"
      required
      className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition"
    />
  </div>
  <div>
    <label htmlFor="email" className="block text-sm font-medium mb-2">
      Email
    </label>
    <input
      type="email"
      id="email"
      name="email"
      placeholder="Your Email"
      required
      className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition"
    />
  </div>

  <div>
  <label htmlFor="phone" className="block text-sm font-medium mb-2">
    Phone Number
  </label>
  <input
    type="tel"
    id="phone"
    name="phone"
    placeholder="Your Phone Number"
    required
    pattern="[0-9]{10,15}"
    className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition"
  />
</div>

  <div>
    <label htmlFor="subject" className="block text-sm font-medium mb-2">
      Subject
    </label>
    <input
      type="text"
      id="subject"
      name="subject"
      placeholder="Project Inquiry, General Question, etc."
      className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition"
    />
  </div>
  <div>
    <label htmlFor="message" className="block text-sm font-medium mb-2">
      Message
    </label>
    <textarea
      id="message"
      name="message"
      rows={4}
      placeholder="Write your message..."
      required
      className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition resize-none"
    />
  </div>
  <button
    type="submit"
    className="w-full bg-white text-black px-6 py-3 rounded-lg font-semibold uppercase tracking-wide shadow-lg transition-all duration-300 hover:bg-gray-200 hover:shadow-xl"
  >
    Send Message
  </button>
</motion.form>

      </div>
    </section>
  );
};

export default ContactUs;

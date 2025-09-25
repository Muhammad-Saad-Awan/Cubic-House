"use client";

import { motion } from "framer-motion";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Services = () => {
  return (
    <section className={`${poppins.className} bg-stone-950 text-stone-100`}>
      {/* Hero Section */}

      <div
        className="relative h-[90vh] flex items-center justify-center text-center px-6 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-bgservice.jpg')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-stone-950/70" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight transition-all duration-700 hover:scale-105 drop-shadow-lg">
            Our Services
          </h1>

          <p className="mt-6 text-xl md:text-2xl text-stone-200 leading-relaxed transition-opacity duration-700 hover:opacity-100 drop-shadow-md">
            “Crafting timeless spaces where functionality meets elegance, innovation,
            and lasting impact — designed to inspire, endure, and elevate lifestyles.”
          </p>

          {/* Animated underline */}
          <div className="mt-6 h-[3px] bg-white mx-auto rounded-full w-0 animate-[growLine_1.2s_ease-out_forwards]" />
        </div>

        {/* Keyframes */}
        <style jsx>{`
          @keyframes growLine {
            from {
              width: 0;
            }
            to {
              width: 120px;
            }
          }
        `}</style>
      </div>


      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-6 py-24 space-y-28">
        {/* Architecture */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
          <div className="relative group overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/images/architecture.jpg"
              alt="Architecture"
              width={600}
              height={320}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-stone-950/30 group-hover:bg-transparent transition-colors duration-500" />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-amber-500">
              Architecture
            </h2>
            <p className="text-stone-300 text-lg leading-relaxed">
              At The Cubic House, our architectural design services focus on creating spaces that balance functionality, beauty, and innovation. We approach every project with a strong design philosophy rooted in clarity and precision, ensuring that each structure is not only visually striking but also practical, sustainable, and timeless. From concept development to detailed drawings and approvals, we work closely with our clients to transform their ideas into well-planned architectural solutions that reflect their lifestyle, identity, and aspirations.
            </p>
          </div>
        </motion.div>

        {/* Construction */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
          <div className="relative group overflow-hidden rounded-2xl shadow-xl md:order-2">
            <Image
              src="/images/construction.jpg"
              alt="Construction"
              width={600}
              height={320}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-stone-950/30 group-hover:bg-transparent transition-colors duration-500" />
          </div>
          <div className="md:order-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-sky-400">
              Construction
            </h2>
            <p className="text-stone-300 text-lg leading-relaxed">
              Our construction services are built on a foundation of quality, reliability, and attention to detail. At The Cubic House, we believe that the strength of any project lies in its execution, which is why we oversee every stage of the building process with precision and care. From foundation to finishing, our team ensures that the highest standards of materials, techniques, and workmanship are maintained. We aim to deliver projects that not only meet but exceed expectations — completed on time, within budget, and built to last.
            </p>
          </div>
        </motion.div>

        {/* Interior Design */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
          <div className="relative group overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/images/interior.jpg"
              alt="Interior Design"
              width={600}
              height={320}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-stone-950/30 group-hover:bg-transparent transition-colors duration-500" />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-amber-500">
              Interior Design
            </h2>
            <p className="text-stone-300 text-lg leading-relaxed">
              Interior spaces are where design meets daily life, and at The Cubic House, we craft interiors that are both functional and inspiring. Our interior design services are tailored to reflect the personality and needs of each client, blending comfort, style, and efficiency. From layout planning and material selection to furniture, lighting, and finishes, we create cohesive environments that enhance the way people live, work, and experience their spaces. Whether modern minimalism or timeless elegance, we ensure that every detail contributes to a harmonious and well-designed interior.
            </p>
          </div>
        </motion.div>
      </div>

      ---

      {/* Why Choose Us */}
      <div className="relative py-24 px-6 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="text-sky-400">The Cubic House?</span>
          </h2>
          <p className="text-stone-400 max-w-3xl mx-auto mb-16 text-lg">
            More than architecture — we deliver trust, innovation, and a seamless client
            experience.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Client-Centered Approach",
                desc: "We prioritize your vision and transform it into spaces that resonate with your lifestyle and aspirations.",
                icon: "👥",
              },
              {
                title: "Innovative & Sustainable",
                desc: "Blending creativity with eco-conscious designs that stand the test of time and inspire future generations.",
                icon: "🌿",
              },
              {
                title: "Quality & Timely Delivery",
                desc: "Every project is executed with precision, ensuring on-time completion with unmatched quality.",
                icon: "⏱️",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative p-8 rounded-2xl border border-stone-800 bg-stone-900 shadow-lg group"
              >
                {/* Gradient Border on Hover */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-500 group-hover:border-sky-500" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-stone-100 group-hover:text-amber-500 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-stone-400 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      ---

      {/* Contact / Inquiry Form */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-stone-900 p-10 rounded-2xl shadow-2xl border border-stone-800"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-amber-500">
            Start Your Project With Us
          </h2>
          <p className="text-stone-400 text-center mb-12">
            Let's build something remarkable together.
          </p>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-3 rounded-lg bg-stone-950 border border-stone-800 text-stone-100 focus:outline-none focus:border-sky-500 placeholder-stone-500 transition-colors duration-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-3 rounded-lg bg-stone-950 border border-stone-800 text-stone-100 focus:outline-none focus:border-sky-500 placeholder-stone-500 transition-colors duration-300"
            />
            <input
              type="text"
              placeholder="Subject"
              className="col-span-1 md:col-span-2 px-4 py-3 rounded-lg bg-stone-950 border border-stone-800 text-stone-100 focus:outline-none focus:border-sky-500 placeholder-stone-500 transition-colors duration-300"
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className="col-span-1 md:col-span-2 px-4 py-3 rounded-lg bg-stone-950 border border-stone-800 text-stone-100 focus:outline-none focus:border-sky-500 placeholder-stone-500 transition-colors duration-300 resize-none"
            />
            <button
              type="submit"
              className="col-span-1 md:col-span-2 bg-stone-950 border-stone-800 text-stone-100 px-8 py-4 rounded-lg font-semibold uppercase tracking-wide shadow-lg hover:bg-sky-500 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const AboutPage = () => {
  return (
    <section
      className={`${poppins.className} relative min-h-screen text-white px-6 py-24 lg:px-16`}
    >
      {/* Background Image and Overlay */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Architectural Background"
        fill
        priority
        className="absolute inset-0 object-cover -z-10"
      />
      <div className="absolute inset-0 bg-black/60 -z-10" />

      {/* Content */}
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            At <span className="font-semibold">The Cubic House</span>, we
            redefine modern architecture with designs that balance functionality,
            innovation, and timeless beauty. Every project is a reflection of
            clarity, precision, and your unique vision.
          </p>
        </motion.div>

        {/* Services Section */}
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Architectural Design",
              text: "From concept to execution, we design with precision and creativity. Each structure is built to inspire while remaining functional and sustainable.",
            },
            {
              title: "Construction",
              text: "Quality, reliability, and attention to detail form the foundation of our construction process — delivering durable and flawless results.",
            },
            {
              title: "Interior Design",
              text: "We create interiors that blend comfort with elegance. Every detail, from layout to lighting, is chosen to elevate the way you live and work.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/10 hover:-translate-y-2 transition-transform duration-500 shadow-xl"
            >
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-300 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Vision / Mission */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto space-y-6"
        >
          <h2 className="text-3xl md:text-5xl font-bold">Our Philosophy</h2>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            We believe architecture is more than just structures — it’s about
            creating experiences. Our philosophy is rooted in combining
            innovation with timeless design, ensuring every project enhances the
            way people live, connect, and interact with their spaces.
          </p>
        </motion.div>

        {/* Company Timeline */}
        <div className="max-w-4xl mx-auto mt-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-center mb-16"
          >
            Our Journey
          </motion.h2>
          <div className="relative">
            <div className="absolute left-1/2 -ml-0.5 w-1 h-full bg-white/20 hidden md:block"></div>
            {[
              { year: "2018", title: "Foundation", text: "As batchmates, we connected through a shared passion for architecture and countless late-night design discussions." },
              { year: "2023", title: "Graduation", text: "After years of learning and growth, we graduated, ready to bring fresh ideas into the professional world." },
              { year: "2023-25", title: "Gaining Experience", text: "Working on diverse projects gave us hands-on experience, sharpened our skills, and shaped our design philosophy." },
              { year: "2025", title: "Transformation", text: "With friendship, experience, and vision, we founded The Cubic House—a studio dedicated to creating meaningful and timeless spaces." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className={`flex ${i % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} flex-col items-center md:items-start w-full my-12`}
              >
                <div className="w-full md:w-1/2 p-4 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-white mb-2">{item.year}</h3>
                  <p className="text-xl font-semibold text-gray-200">{item.title}</p>
                  <p className="mt-2 text-gray-400 leading-relaxed max-w-sm mx-auto md:mx-0">{item.text}</p>
                </div>
                <div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-white/30 border-2 border-white z-10 -ml-4"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
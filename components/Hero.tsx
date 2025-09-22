// components/Hero.tsx
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center px-6 pt-32 pb-24 md:pt-40 lg:pt-48 bg-gray-50 lg:mt-8">
      <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">
        Designing Spaces, Shaping Futures
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl">
        Modern architectural solutions blending creativity, innovation, and timeless design.
      </p>
      <Link
        href="#projects"
        className="mt-6 inline-block bg-gray-900 text-white px-6 py-3 rounded-lg text-sm font-semibold tracking-wide uppercase hover:bg-black transition"
      >
        Explore Projects
      </Link>
    </section>
  );
};

export default Hero;

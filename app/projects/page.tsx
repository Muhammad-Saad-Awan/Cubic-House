import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Projects() {
  return (
    <div className={`${poppins.className} min-h-screen bg-black text-white flex items-center justify-center`}>
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Projects</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Our portfolio of architectural projects is coming soon. Check back later to see our latest work.
        </p>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Item = {
  id: string;
  title: string;
  short: string;
  photo: string;
  design: string;
  carpet: string;
  inspirationDesc: string;
  translationDesc: string;
  finishedDesc: string;
};

const ITEMS: Item[] = [
  {
    id: "m1",
    title: "Lake and Himalayas",
    short: "Inspired by the morning light at Manaslu",
    photo: "/assets/images/home/InspirationGallery/1.png",
    design: "/assets/images/home/InspirationGallery/2.png",
    carpet: "/assets/images/home/InspirationGallery/3.png",
    inspirationDesc: "Captured during your trek – the moment that sparked the idea.",
    translationDesc: "Sketch transforming morning light and peaks into minimalist forms.",
    finishedDesc: "Hand-knotted to reflect the cold blues and warm sunrise glow.",
  },
  {
    id: "m2",
    title: "Desert Dunes",
    short: "Warm tones inspired by drifting sands",
    photo: "/assets/images/home/InspirationGallery/4.png",
    design: "/assets/images/home/InspirationGallery/5.png",
    carpet: "/assets/images/home/InspirationGallery/6.png",
    inspirationDesc: "Rippling sands and desert wind patterns sparking soft geometry.",
    translationDesc: "Sketch exploring curves, shadows, and warm tonal gradients.",
    finishedDesc: "Crafted using blended ochres to mirror natural dune textures.",
  },
];

export default function InspirationGalleryMinimal() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % ITEMS.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + ITEMS.length) % ITEMS.length);

  const item = ITEMS[index];

  return (
    <div className="w-full bg-[#f7f7f7] py-20 relative overflow-hidden -ml-[15px]">

      {/* LEFT ARROW — OUTSIDE */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full 
                   z-20 p-3 rounded-full bg-white shadow hover:shadow-lg transition"
      >
        <ChevronLeft size={26} />
      </button>

      {/* RIGHT ARROW — OUTSIDE */}
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full 
                   z-20 p-3 rounded-full bg-white shadow hover:shadow-lg transition"
      >
        <ChevronRight size={26} />
      </button>

      <div className="w-[90%] mx-auto px-4">
        <div className="mb-14">
          <h2 className="text-center text-4xl md:text-3xl font-extrabold mt-1 leading-tight">
            From Nature’s Palette to Timeless Hand-Knotted Rugs
          </h2>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-3"
          >
            {/* LEFT COLUMN */}
            <div className="space-y-6 text-center md:text-left mt-10">
              <div className="flex flex-col items-center md:items-start gap-2">
                <div className="w-10 h-10 border rounded-full flex items-center justify-center text-gray-700">
                  <span className="text-xl">▲</span>
                </div>
                <h3 className="text-lg font-semibold tracking-wide">INSPIRATION</h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                  {item.inspirationDesc}
                </p>
              </div>

              <motion.div
                className="w-[500px] h-[340px] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition"
                whileHover={{ scale: 1.03 }}
              >
                <img src={item.photo} className="w-full h-full object-cover" />
              </motion.div>
            </div>

            {/* CENTER COLUMN */}
            <div className="space-y-6 text-center ml-14">
              <motion.div
                className="w-[80%] mx-auto h-[480px] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition"
                whileHover={{ scale: 1.03 }}
              >
                <img src={item.design} className="w-full h-full object-cover" />
              </motion.div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 border rounded-full flex items-center justify-center text-gray-700">
                  <span className="text-xl">✦</span>
                </div>
                <h3 className="text-lg font-semibold tracking-wide">ARTISTIC TRANSLATION</h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                  {item.translationDesc}
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-6 text-center md:text-right mt-10">
              <div className="flex flex-col md:items-end gap-2">
                <div className="w-10 h-10 border rounded-full flex items-center justify-center text-gray-700">
                  <span className="text-xl">❉</span>
                </div>
                <h3 className="text-lg font-semibold tracking-wide">FINISHED CARPET</h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                  {item.finishedDesc}
                </p>
              </div>

              <motion.div
                className="w-[500px] h-[340px] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition"
                whileHover={{ scale: 1.03 }}
              >
                <img src={item.carpet} className="w-full h-full object-cover" />
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* DOTS */}
        <div className="flex justify-center gap-3 mt-10">
          {ITEMS.map((_, i) => (
            <motion.div
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${index === i ? "bg-black scale-125" : "bg-gray-400"
                }`}
              whileHover={{ scale: 1.3 }}
            ></motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

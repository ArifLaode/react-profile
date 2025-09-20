import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import image1 from "../assets/place/image.jpeg";
import image2 from "../assets/place/image-2.jpeg";
import image3 from "../assets/place/image-3.jpeg";
import image4 from "../assets/place/image-4.jpeg";
import image5 from "../assets/place/image-5.jpeg";

const images = [image1, image2, image3, image4, image5];

function Slider() {
  const [index, setIndex] = useState(0);

  // Auto-slide setiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div id="slider" className="relative w-screen h-screen overflow-hidden">
      <AnimatePresence>
        <motion.img
          key={index}
          src={images[index]}
          alt={`Slide ${index}`}
          className="absolute top-0 left-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Overlay teks sambutan */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 bg-black/40 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Selamat Datang di Kelurahan Ulunggolaka
        </h1>
        <p className="max-w-2xl text-lg md:text-xl mb-6 drop-shadow-md">
          Kelurahan Ulunggolaka adalah sebuah kelurahan di Kecamatan Latambaga,
          Kabupaten Kolaka, Provinsi Sulawesi Tenggara, Indonesia. Kelurahan ini
          memiliki stasiun hujan yang penting untuk pemantauan curah hujan di
          wilayah tersebut, membantu perencanaan irigasi, pemodelan banjir, dan
          studi hidrologi lainnya.
        </p>
        <a
          href="/#sambutan"
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById("sambutan");
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-full text-lg font-semibold transition duration-500 ease-linear shadow-lg"
        >
          Mulai
        </a>
      </div>

      {/* Tombol Prev */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/40 text-white px-4 py-2 rounded-full hover:bg-black/70 transition"
      >
        ‹
      </button>

      {/* Tombol Next */}
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/40 text-white px-4 py-2 rounded-full hover:bg-black/70 transition"
      >
        ›
      </button>

      {/* Indicator dots */}
      <div className="absolute bottom-6 w-full flex justify-center space-x-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section, { SectionContent } from "./Section";

import media from "../assets/intereset/air.mp4";
import media1 from "../assets/intereset/air.jpeg";
import media2 from "../assets/intereset/air2.jpeg";
import media3 from "../assets/intereset/air3.jpeg";
import media4 from "../assets/intereset/air4.jpeg";
import media5 from "../assets/intereset/air5.jpeg";
import media6 from "../assets/intereset/air6.jpeg";
import media7 from "../assets/intereset/air7.jpeg";
import media8 from "../assets/intereset/hiden.mp4";

const interestData = [
  {
    type: "video",
    src: media,
    title: "Air Terjun Tikawarau dari Udara",
    desc: "Nikmati pemandangan spektakuler Air Terjun Tikawarau dari atas. Suara gemuruh air yang jatuh dari ketinggian menciptakan harmoni alam yang menenangkan.",
  },
  {
    type: "image",
    src: media1,
    title: "Pesona Dekat Air Terjun",
    desc: "Rasakan percikan air yang menyegarkan ketika Anda mendekati Air Terjun Tikawarau. Spot ini sangat cocok untuk melepas penat dan menikmati alam hijau yang asri.",
  },
  {
    type: "image",
    src: media2,
    title: "Keindahan Aliran Air",
    desc: "Aliran deras air terjun menciptakan suasana dramatis, menjadikannya latar foto yang menawan bagi para wisatawan pencinta alam.",
  },
  {
    type: "image",
    src: media3,
    title: "Sungai Kehidupan",
    desc: "Sungai yang mengalir dari Air Terjun Tikawarau telah lama menjadi sumber kehidupan masyarakat Kelurahan Ulunggolaka, dari kebutuhan sehari-hari hingga irigasi pertanian.",
  },
  {
    type: "image",
    src: media4,
    title: "Aliran yang Menyejukkan",
    desc: "Nikmati ketenangan sungai yang jernih dan sejuk, sempurna untuk relaksasi sambil mendengarkan suara gemericik air.",
  },
  {
    type: "image",
    src: media5,
    title: "Dekat dengan Alam",
    desc: "Keindahan Air Terjun Tikawarau dari dekat memberikan pengalaman yang sulit dilupakan. Rasakan energi alam yang kuat namun menenangkan.",
  },
  {
    type: "image",
    src: media6,
    title: "Panorama Alami",
    desc: "Dikelilingi hutan yang hijau, lokasi ini menghadirkan panorama alami yang indah, sangat cocok bagi para pecinta petualangan dan fotografi.",
  },
  {
    type: "image",
    src: media7,
    title: "Kesejukan Abadi",
    desc: "Air yang jatuh dari ketinggian menciptakan kesejukan yang abadi, menjadikan Air Terjun Tikawarau sebagai destinasi wisata unggulan di Kolaka.",
  },
  {
    type: "video",
    src: media8,
    title: "Hidden Gems Tikawarau",
    desc: "Temukan keindahan tersembunyi di balik air terjun: sebuah hidden gems yang penuh misteri dan menunggu untuk ditelusuri oleh jiwa-jiwa petualang.",
  },
];

function InterestCarousel() {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const currentItem = interestData[index];

  const nextSlide = () =>
    setIndex((prev) => (prev + 1) % interestData.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + interestData.length) % interestData.length);

  // Tutup modal dengan ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <Section title="Wisata & Interest" id="interest" columns={12} titleClassName="text-4xl font-bold text-grey-200 mb-20 align-center text-center" containerClassName="gap-10">
      {/* Media lingkaran (col 4) */}
      <SectionContent col={4} className="flex items-center justify-end -mr-25 z-0">
        <div
          className="w-150 h-150 rounded-full overflow-hidden shadow-xl cursor-pointer border-4 border-green-600"
          onClick={() => setIsOpen(true)}
        >
          {currentItem.type === "image" ? (
            <img
              src={currentItem.src}
              alt={currentItem.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <video
              src={currentItem.src}
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </SectionContent>

      {/* Deskripsi (col 8) */}
      <SectionContent
        col={7}
        className="border-4 w-full border-red-600 text-black p-20 rounded-4xl shadow-lg flex flex-col justify-center"
      >
        <h3 className="text-2xl font-bold mb-20">{currentItem.title}</h3>
        <p className="text-lg">{currentItem.desc}</p>

        {/* Controls dengan ikon */}
        <div className="flex justify-between mt-70">
          <button
            onClick={prevSlide}
            className="w-12 h-12 flex items-center justify-center bg-green-600 text-white rounded-full hover:bg-green-700 transition text-2xl"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 flex items-center justify-center bg-green-600 text-white rounded-full hover:bg-green-700 transition text-2xl"
          >
            ›
          </button>
        </div>
      </SectionContent>

      {/* Fullscreen modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative w-11/12 md:w-3/4 lg:w-2/3">
              <button
                className="absolute top-4 right-4 text-white text-2xl"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>
              {currentItem.type === "image" ? (
                <img
                  src={currentItem.src}
                  alt={currentItem.title}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              ) : (
                <video
                  src={currentItem.src}
                  autoPlay
                  controls
                  loop
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}

export default InterestCarousel;

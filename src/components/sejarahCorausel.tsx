import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section, { SectionContent } from "./Section";

const sejarahSlides = [
  {
    title: "Asal Usul Ulunggolaka Tua",
    text: "Pada abad ke-18, di dekat gunung Latinanggo terdapat kampung Ulunggolaka Motuo yang dipimpin oleh Puutobu Iwema. Ia berperan sebagai kepala suku sekaligus kepala adat, memimpin berbagai acara adat seperti Monahu Ndau dan Mosehe Wonua.",
  },
  {
    title: "Kepemimpinan Selanjutnya",
    text: "Setelah wafatnya Puutobu Iwema, kepemimpinan adat diteruskan oleh Rude dan Wahoga, kemudian Wanamu dan Mbuakoi Terunduno (Taindabako) hingga abad ke-19. Acara adat tetap dijalankan meski kondisi zaman berubah.",
  },
  {
    title: "Masa Pindah-Pindah Pemukiman",
    text: "Akibat peristiwa pemberontakan DI/TII (1953–1965), warga Ulunggolaka Motuo beberapa kali berpindah tempat: Puudongi (1948), kembali ke Ulunggolaka Motuo (1950), lalu pindah ke Puunoko (yang kini menjadi Kelurahan Ulunggolaka).",
  },
  {
    title: "Kembali Bersatu di Puunoko",
    text: "Pada 1959, setelah situasi aman, warga kembali bersatu di Puunoko. Nama Ulunggolaka dipakai kembali, dan pemerintahan Mangolo membentuk Desa Ulunggolaka.",
  },
  {
    title: "Transformasi Era M. Natsir (1980-an)",
    text: "M. Natsir (Puang Dato) membawa perubahan besar: membuka jalur jalan baru, wisata Gua Air Panas (1981), jalur Ulunggolaka–Sakuli (1985), dan perkemahan BUPER 86 yang kini menjadi Wisata Alam Kea Kea.",
  },
  {
    title: "Menjadi Kelurahan (1998–Sekarang)",
    text: "Tahun 1998, Desa Ulunggolaka resmi menjadi Kelurahan. Beberapa lurah yang pernah menjabat: Sadelia, Sanusi, Abd. Muis, Ambo Awe, Hafid (Alm), Arwan SP (2014–2019), dan Muh. Alfian SP (2019–sekarang).",
  },
  {
    title: "Asal Usul Nama Kea Kea",
    text: "Nama Kea Kea berasal dari cerita rakyat tentang seekor burung kakaktua (kea kea) yang menggali tanah di dekat pohon beringin (Kasu Kapu). Dari sinilah lahir istilah Kekea/Kea Kea yang berarti 'menggali'.",
  },
];

function SejarahCarousel() {
  const [index, setIndex] = useState(0);

  const nextSlide = () =>
    setIndex((prev) => (prev + 1) % sejarahSlides.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + sejarahSlides.length) % sejarahSlides.length);

  return (
    <Section title="Sejarah Kelurahan Ulunggolaka" titleClassName="text-4xl font-bold text-grey-200 mb-20 align-center text-center" id="sejarah">
      <SectionContent col={12} className="relative">
        <div className="bg-white/80 rounded-2xl shadow-lg p-6 md:p-10 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-green-800">
                {sejarahSlides[index].title}
              </h3>
              <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
                {sejarahSlides[index].text}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-between mt-6">
            <button
              onClick={prevSlide}
              className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
            >
              ‹ Sebelumnya
            </button>
            <button
              onClick={nextSlide}
              className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
            >
              Selanjutnya ›
            </button>
          </div>

          {/* Indicator */}
          <div className="flex justify-center mt-4 space-x-2">
            {sejarahSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full ${
                  i === index ? "bg-green-600" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </SectionContent>
    </Section>
  );
}

export default SejarahCarousel;

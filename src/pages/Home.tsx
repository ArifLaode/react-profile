import Section, { SectionContent } from "../components/Section";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import Slider from "../components/Slider";
import SejarahCarousel from "../components/sejarahCorausel";
import InterestCarousel from "../components/InterestCarousel";

const HomePage = () => {
  return (
    <>
    <Slider />
    <Section
      title="Sambutan"
      id="sambutan"
      columns={1}
      className="section rounded-2xl mt-5 shadow-lg bg-gray-10 ease-in duration-300"
      titleClassName="text-4xl font-bold text-grey-200 mb-20 align-center text-center"
      containerClassName="gap-1.5"
    >
      <SectionContent className="border-4 w-full border-red-600 text-black p-6 rounded-4xl shadow-lg">
        <p className="text-4xl text-left ml-8 font-bold">Sambutan Kepala Lurah</p>
        <div className="p-20 text-xl text-grey-800">
          <p className="text-center">Selamat datang di situs resmi Kelurahan Ulunggolaka! Kami berkomitmen untuk memberikan pelayanan terbaik bagi masyarakat dan memajukan komunitas kita bersama. Jelajahi berbagai informasi penting, layanan publik, dan berita terkini seputar kelurahan kami. Bersama-sama, mari kita wujudkan Ulunggolaka yang lebih baik dan sejahtera.</p>
          <br/>
          <p className="text-right mt-10">Hormat kami, Kepala Kelurahan Ulunggolaka</p>
          <p className="mt-15 font-bold text-right">Muhammad Alfian, S.P</p>
        </div>
      </SectionContent>
    </Section>
    <Section id="visi" title="Visi & Misi" columns={1} className="section rounded-2xl mt-5 shadow-lg bg-gray-10 ease-in duration-300" titleClassName="text-4xl font-bold text-grey-200 mb-20 align-center text-center" containerClassName="gap-1.5">
      <SectionContent className="border-4 w-full border-red-600 text-black p-6 rounded-4xl shadow-lg">
        <p className="text-2xl text-left ml-8 font-bold">Visi</p>
        <div className="p-5 text-xl text-grey-800">
          <p className="text-center">KELURAHAN ULUNGGOLAKA YANG BERKEADILAN MAJU DAN UNGGUL</p>
        </div>
        <hr className="border-gray-300 my-8" />
        <p className="text-2xl text-left ml-8 font-bold">Misi</p>
        <div className="p-5 text-xl text-grey-800">
          <ul className="list-disc list-inside space-y-4">
            <li>Menghadirkan Kabupaten Kolaka Sebagai Daerah yang Agamais dan BerBudaya Berdasarkan Nilai-nilai Kearifan Lokal.</li>
            <li>Mewujudkan Pemerintah Kabupaten Kolaka Yang berIntegritas, Transparan dan Akuntabilitas dengan Menjunjung Nilai-nilai Moral Kehidupan.</li>
            <li>Mewujudkan Pembangunan Ekonomi Kabupaten Kolaka yang dilakukan Melalui Proses Terukur.</li>
            <li>Mewujudkan Pembangunan Sumber Daya Manusia yang BerKualitas dan Berdaya Saing.</li>
            <li>Mewujudkan Infrastruktur Sosial dan Lingkungan untuk Mendukung Kehidupan Masyarakat yang Lebih Baik.</li>
          </ul>
        </div>
      </SectionContent>
    </Section>
    <SejarahCarousel /> 
    <InterestCarousel />
    <Section title="Kontak Layanan" titleClassName="text-4xl font-bold text-grey-200 mb-20 align-center text-center" columns={12}>
        <SectionContent col={12} className="grid md:grid-cols-2 gap-6">
          {[
            {
              label: "Informasi Tempat Wisata",
              name: "Sharul Ramadhan",
              phone: "+62 821-2935-8835",
            },
            {
              label: "Layanan Operasional",
              name: "Muhammad Afdhal",
              phone: "+62 822-1637-5580",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white shadow-md rounded-xl flex items-center space-x-4 border border-gray-200"
            >
              <Phone className="w-10 h-10 text-green-600" />
              <div>
                <h4 className="font-semibold text-gray-800">{item.label}</h4>
                <p className="text-gray-700">{item.name}</p>
                <a
                  href={`https://wa.me/${item.phone.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-700 font-medium hover:underline"
                >
                  {item.phone}
                </a>
              </div>
            </motion.div>
          ))}
        </SectionContent>
      </Section>
    </>
  );
};

export default HomePage;

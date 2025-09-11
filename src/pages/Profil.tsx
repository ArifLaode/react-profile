import { motion } from "framer-motion";
import Section, { SectionContent } from "../components/Section";
import { Users, MapPin, Building2, User, Home } from "lucide-react";
import CountUp from "react-countup";

function Profil() {
  return (
    <div>
      {/* Informasi Umum + Peta */}
      <Section title="Profil Kelurahan Ulunggolaka" id="profil" className="mt-20" titleClassName="text-4xl font-bold text-grey-200 mb-20 align-center text-center" columns={12}>
        {/* Informasi Umum */}
        <SectionContent col={6} className="p-6 space-y-4">
          <h3 className="text-2xl font-bold text-green-700">
            Informasi Umum
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Kelurahan Ulunggolaka adalah sebuah kelurahan di Kecamatan Latambaga,
            Kabupaten Kolaka, Provinsi Sulawesi Tenggara, Indonesia. Kelurahan ini
            memiliki stasiun hujan yang penting untuk pemantauan curah hujan di
            wilayah tersebut, membantu perencanaan irigasi, pemodelan banjir, dan
            studi hidrologi lainnya. Kelurahan Ulunggolaka terdiri dari 5 RW dan
            10 RT dengan luas 8,18 KM².
          </p>

          <div className="space-y-2 text-gray-800">
            <p><strong>Lokasi:</strong> Kecamatan Latambaga, Kabupaten Kolaka, Sulawesi Tenggara.</p>
            <p><strong>Fungsi:</strong> Bagian dari sistem pemerintahan Kecamatan Latambaga, dipimpin oleh seorang Lurah.</p>
            <p><strong>Infrastruktur Penting:</strong> Stasiun Hujan Ulunggolaka.</p>
            <p><strong>Manfaat Data:</strong> Perencanaan irigasi, pemodelan banjir, studi hidrologi.</p>
          </div>
        </SectionContent>

        {/* Peta Gmaps */}
        <SectionContent col={6} className="p-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127372.84968553358!2d121.59705995!3d-3.9372904500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d9789bc7d30142b%3A0xd590d084b60b844a!2sUlunggolaka%2C%20Kec.%20Latambaga%2C%20Kabupaten%20Kolaka%2C%20Sulawesi%20Tenggara!5e0!3m2!1sid!2sid!4v1757583966183!5m2!1sid!2sid"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl shadow-lg"
          />
        </SectionContent>
      </Section>

      {/* Struktur Organisasi */}
      <Section title="Struktur Organisasi" titleClassName="text-4xl font-bold text-grey-200 mb-20 align-center text-center" columns={12}>
        <SectionContent col={12} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { role: "Kepala Lurah", name: "Muhammad Alfian, S.P", icon: Building2 },
            { role: "Sekretaris Lurah", name: "Sumarlin Midu, S.Si", icon: Users },
            { role: "Kasi Pemerintahan, Ketentraman & Ketertiban", name: "Dugamin, S.H", icon: MapPin },
            { role: "Kasi Pembangunan", name: "Kornelis Isal, S.Sos", icon: Home },
            { role: "Kasi Kesejahteraan & Pelayanan Umum", name: "Sunarni, S.Sos", icon: User },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white shadow-md rounded-xl flex items-center space-x-4 border border-gray-200"
            >
              <item.icon className="w-10 h-10 text-green-600" />
              <div>
                <h4 className="font-semibold text-gray-800">{item.role}</h4>
                <p className="text-gray-600">{item.name}</p>
              </div>
            </motion.div>
          ))}
        </SectionContent>
      </Section>

      {/* Demografi */}
      <Section title="Demografi" titleClassName="text-4xl font-bold text-grey-200 mb-20 align-center text-center" columns={12}>
        <SectionContent col={12} className="grid md:grid-cols-4 gap-6 text-center">
          {[
            { label: "Jumlah Penduduk", value: 3045, icon: Users },
            { label: "Laki-laki", value: 1487, icon: User },
            { label: "Perempuan", value: 1558, icon: User },
            { label: "Jumlah Keluarga", value: 799, icon: Home },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-white shadow-lg rounded-xl border border-gray-200 flex flex-col items-center"
            >
              <item.icon className="w-12 h-12 text-green-600 mb-3" />
              <h4 className="text-3xl font-bold text-green-700">
                <CountUp end={item.value} duration={2} />
              </h4>
              <p className="text-gray-700 mt-2">{item.label}</p>
            </motion.div>
          ))}
        </SectionContent>
      </Section>
    </div>
  );
}

export default Profil;

import Section, {SectionContent} from "../components/Section";
import { Clock, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

function Layanan() {
  return (
    <div>
      {/* Informasi Layanan Offline */}
      <Section title="Pelayanan Offline" id="layanan" metaTitle="Layanan Kelurahan Ulunggolaka" metaDescription="Layanan Kelurahan Ulunggolaka dapat diakses melalui ......." className="mt-20" titleClassName="text-4xl font-bold text-grey-200 mb-20 align-center text-center" columns={12}>
        <SectionContent col={6} className="p-6 space-y-4">
          <h3 className="text-2xl font-bold text-green-700 flex items-center space-x-2">
            <Clock className="w-6 h-6 text-green-600" />
            <span>Jam Layanan</span>
          </h3>
          <p className="text-gray-700">
            Pelayanan offline tersedia di kantor Lurah Ulunggolaka pada:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Hari: Senin – Jumat</li>
            <li>Pukul: 07.30 WITA – 15.00 WITA</li>
          </ul>

          <h3 className="text-2xl font-bold text-green-700 flex items-center space-x-2 mt-6">
            <MapPin className="w-6 h-6 text-green-600" />
            <span>Alamat</span>
          </h3>
          <p className="text-gray-700">
            Ulunggolaka, Kecamatan Latambaga, Kabupaten Kolaka, Sulawesi
            Tenggara.
          </p>
        </SectionContent>

        {/* Peta Lokasi */}
        <SectionContent col={6} className="p-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1130.3645350030024!2d121.56413452459535!3d-3.987834304725029!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d978bb1a791f373%3A0x73c1cf55f2112113!2sKantor%20Kelurahan%20Ulunggolaka!5e0!3m2!1sid!2sid!4v1757591982220!5m2!1sid!2sid"
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

      {/* Kontak Layanan */}
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
    </div>
  );
}

export default Layanan;

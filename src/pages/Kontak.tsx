import Section, { SectionContent } from "../components/Section";

function Kontak() {
  return (
    <Section title="Kontak & Informasi" className="m-20" id="kontak" columns={12}>
      {/* Informasi Umum */}
      <SectionContent col={6} className="p-6 bg-white rounded-xl shadow-md">
        <h3 className="text-xl font-bold text-green-700 mb-4">Pelayanan Offline</h3>
        <p className="text-gray-700 mb-2">
          Pelayanan administrasi dan keperluan masyarakat dilayani di{" "}
          <strong>Kantor Lurah Ulunggolaka</strong>.
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Alamat:</strong> Ulunggolaka, Kec. Latambaga, Kabupaten Kolaka, Sulawesi Tenggara
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Jam Operasional:</strong> Senin – Jumat, 07.30 – 15.00 WITA
        </p>

        <h3 className="text-xl font-bold text-green-700 mt-6 mb-4">Kontak</h3>
        <ul className="space-y-2 text-gray-700">
          <li>
            📞 <strong>Sharul Ramadhan</strong> – Informasi Wisata:{" "}
            <a
              href="https://wa.me/6282129358835"
              className="text-green-700 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              +62 821-2935-8835
            </a>
          </li>
          <li>
            📞 <strong>Muhammad Afdhal</strong> – Layanan Operasional:{" "}
            <a
              href="https://wa.me/6282216375580"
              className="text-green-700 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              +62 822-1637-5580
            </a>
          </li>
        </ul>
      </SectionContent>

      {/* Peta Lokasi */}
      <SectionContent col={6} className="p-2">
        <div className="rounded-xl overflow-hidden shadow-md h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1130.3645350030024!2d121.56413452459535!3d-3.987834304725029!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d978bb1a791f373%3A0x73c1cf55f2112113!2sKantor%20Kelurahan%20Ulunggolaka!5e0!3m2!1sid!2sid!4v1757591982220!5m2!1sid!2sid"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </SectionContent>
    </Section>
  );
}

export default Kontak;

// Berita.tsx
import { Link } from "react-router-dom";
import Section, { SectionContent } from "../components/Section";

const beritaList = [
  {
    id: "sejarah",
    title: "Sejarah Kelurahan Ulunggolaka",
    date: "Diperbarui: 2025",
    preview:
      "Kelurahan Ulunggolaka memiliki sejarah panjang sejak abad ke-18, bermula dari kampung Ulunggolaka Motuo yang dipimpin oleh Puutobu Iwema...",
  },
  {
    id: "kkn-uho-2025",
    title: "Kegiatan Mahasiswa KKN UHO Batch 2",
    date: "Agustus – September 2025",
    preview:
      "Mahasiswa KKN Universitas Halu Oleo Batch 2 melaksanakan program pengabdian di Kelurahan Ulunggolaka, fokus pada pendidikan, lingkungan, dan pariwisata...",
  },
];

function Berita() {
  return (
    <Section title="Berita Kelurahan Ulunggolaka" metaTitle="Berita Kelurahan Ulunggolaka" metaDescription="Dapatkan berita terbaru seputar kelurahan ulunggolaka yang update dan terbarukan" id="berita" className="mt-20 h-[90vh]" titleClassName="text-4xl font-bold text-grey-200 mb-20 align-center text-center" columns={12}>
      {beritaList.map((item) => (
        <SectionContent
          key={item.id}
          col={12}
          className="p-6 bg-white rounded-xl shadow-md mb-6"
        >
          <h3 className="text-2xl font-bold text-green-700">{item.title}</h3>
          <p className="text-sm text-gray-500 mb-2">{item.date}</p>
          <p className="text-gray-700 mb-4">{item.preview}</p>
          <Link
            to={`/berita/${item.id}`}
            className="text-green-700 font-medium hover:underline"
          >
            Selengkapnya →
          </Link>
        </SectionContent>
      ))}
    </Section>
  );
}

export default Berita;

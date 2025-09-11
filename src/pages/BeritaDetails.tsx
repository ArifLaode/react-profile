import { useParams, Link } from "react-router-dom";
import Section, { SectionContent } from "../components/Section";

function BeritaDetail() {
  const { id } = useParams<{ id: string }>();

  return (
    <Section title="Detail Berita" id="berita-detail">
      <SectionContent col={12} className="p-6 bg-white rounded-xl shadow-md space-y-4 text-gray-700 leading-relaxed">
        {id === "sejarah" && (
          <>
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              Sejarah Kelurahan Ulunggolaka
            </h2>

            <p>
              Sejarah Ulunggolaka dimulai pada abad ke-18, ketika masih berada
              di bawah kekuasaan kolonial Belanda. Saat itu, Ulunggolaka dikenal
              dengan sebutan <strong>Ulunggolaka Motuo</strong>. Kampung ini
              dipimpin oleh <strong>Puutobu Iwema</strong> yang berperan sebagai
              kepala suku sekaligus pemimpin adat. Pada masa kepemimpinannya
              banyak diselenggarakan acara adat seperti{" "}
              <em>Monahu Ndau</em> (pesta panen) dan{" "}
              <em>Mosehe Wonua</em> (ritual adat untuk membersihkan negeri).
            </p>

            <p>
              Kepemimpinan adat kemudian berlanjut kepada{" "}
              <strong>Rude, Wahoga, Wanamu</strong>, hingga{" "}
              <strong>Mbuakoi Terunduno</strong> yang dikenal juga dengan nama{" "}
              <strong>Taindabako</strong>. Dalam perjalanan sejarahnya,
              masyarakat Ulunggolaka beberapa kali berpindah tempat akibat
              situasi politik dan keamanan, termasuk pada masa pergolakan{" "}
              <strong>DI/TII (1953–1965)</strong>.
            </p>

            <p>
              Setelah periode sulit itu, masyarakat kembali bersatu pada tahun
              1959 di sebuah daerah bernama <strong>Puunoko</strong> yang
              kemudian dinamai <strong>Ulunggolaka</strong>. Sejak saat itu
              Ulunggolaka mulai berkembang menjadi pemukiman tetap dengan
              kehidupan sosial dan budaya yang lebih stabil.
            </p>

            <p>
              Pada dekade 1980-an, <strong>M. Natsir (Puang Dato)</strong> yang
              menjabat sebagai kepala desa membawa banyak perubahan besar bagi
              Ulunggolaka. Di bawah kepemimpinannya, dibuka akses jalan baru
              menuju <strong>Wisata Gua Air Panas</strong> (1981), jalur
              Ulunggolaka–Sakuli (1985), serta pembangunan{" "}
              <strong>Bumi Perkemahan (BUPER) 86</strong> pada tahun 1986. Semua
              pembangunan ini semakin memperkuat posisi Ulunggolaka sebagai
              pusat aktivitas masyarakat sekaligus destinasi wisata lokal.
            </p>

            <p>
              Pada tahun 1998, Desa Ulunggolaka resmi berubah status menjadi{" "}
              <strong>Kelurahan Ulunggolaka</strong>. Perubahan ini membawa
              konsekuensi administratif baru, di mana kelurahan menjadi bagian
              penting dari sistem pemerintahan Kecamatan Latambaga, Kabupaten
              Kolaka.
            </p>

            <p>
              Sejak berubah menjadi kelurahan, Ulunggolaka telah dipimpin oleh
              beberapa lurah, di antaranya <strong>Arwan, SP</strong> (2014–
              2019) dan <strong>Muhammad Alfian, SP</strong> (2019–sekarang).
              Dengan kepemimpinan yang terus berlanjut, Ulunggolaka semakin
              berkembang sebagai wilayah yang tidak hanya memiliki nilai sejarah
              dan budaya, tetapi juga peran penting dalam pengelolaan
              lingkungan, terutama melalui keberadaan{" "}
              <strong>Stasiun Hujan Ulunggolaka</strong> yang strategis.
            </p>

            <p className="mt-6">
              Hingga kini, Kelurahan Ulunggolaka tetap menjadi bagian penting
              dari identitas masyarakat Kolaka dengan sejarah panjang,
              tradisi adat, serta peran vital dalam mendukung pembangunan dan
              kesejahteraan warganya.
            </p>
          </>
        )}

        {id === "kkn-uho-2025" && (
          <>
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              Kegiatan Mahasiswa KKN UHO Batch 2 (Agustus – September 2025)
            </h2>
            <p>
              Pada bulan Agustus hingga September 2025, mahasiswa{" "}
              <strong>Kuliah Kerja Nyata (KKN) Universitas Halu Oleo</strong>{" "}
              Batch 2 melaksanakan program pengabdian di Kelurahan Ulunggolaka.
              Kegiatan ini berfokus pada pemberdayaan masyarakat, pendidikan,
              lingkungan, dan pengembangan pariwisata berbasis budaya.
            </p>
            <p>
              Program-program yang dijalankan meliputi edukasi lingkungan,
              pelatihan teknologi informasi untuk pemuda, pendampingan
              kebersihan, serta kolaborasi dengan perangkat kelurahan untuk
              meningkatkan pelayanan publik. Selain itu, mahasiswa juga aktif
              dalam mendokumentasikan sejarah lokal serta mendorong potensi
              wisata yang ada di Ulunggolaka.
            </p>
            <p>
              Kehadiran mahasiswa KKN diharapkan dapat memberikan dampak positif
              yang berkelanjutan, baik bagi masyarakat maupun bagi para
              mahasiswa sebagai agen perubahan.
            </p>
          </>
        )}

        <div className="mt-6">
          <Link to="/berita" className="text-green-700 hover:underline">
            ← Kembali ke Berita
          </Link>
        </div>
      </SectionContent>
    </Section>
  );
}

export default BeritaDetail;

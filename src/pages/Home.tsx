import Section, { SectionContent } from "../components/Section";
import Sambutan from "../assets/sambutan.jpeg";

const HomePage = () => {
  return (
    <>
    <Section id="slider" className="h-screen w-screen bg-gray-100 ease-in duration-300">

    </Section>
    <Section
      title="Sambutan Kepala Lurah"
      columns={12}
      id="sambutan"
      className="section h-[90vh] rounded-2xl shadow-lg bg-gray-10 ease-in duration-300"
      titleClassName="text-3xl font-bold text-blue-600 mb-20 align-center text-center"
      containerClassName="gap-1.5"
    >
      <SectionContent col={4} className="h-[60vh] flex items-end-safe -mr-15 justify-end">
        <img src={Sambutan} alt="Sambutan Kepala Lurah" className="sambutan-image w-[60vh] border-2 border-black z-50 h-[60vh] rounded-full" />
      </SectionContent>

      <SectionContent col={8} className="border-4 border-amber-300 text-black p-6 rounded-lg shadow-lg">
        <p className="text-4xl text-center font-bold">Sambutan Kepala Lurah</p>
        <div className="p-20 text-2xl text-center text-grey-800">
          <p>Selamat datang di situs resmi Kelurahan Ulunggolaka! Kami berkomitmen untuk memberikan pelayanan terbaik bagi masyarakat dan memajukan komunitas kita bersama. Jelajahi berbagai informasi penting, layanan publik, dan berita terkini seputar kelurahan kami. Bersama-sama, mari kita wujudkan Ulunggolaka yang lebih baik dan sejahtera.</p>
          <br/>
          <p>Hormat kami, Kepala Kelurahan Ulunggolaka</p>
        </div>
      </SectionContent>
    </Section>

   <div className="grid grid-cols-3 gap-4">
    <div className="col-span-2">
       <Section title="Visi dan Misi" columns={12} className="rounded-2xl shadow-lg w-full h-[65vh] bg-gray-100" titleClassName="text-6xl font-bold text-green-600 mb-20 align-center text-center" containerClassName="gap-1.5">
      <SectionContent col={4} className="bg-green-200 p-6 rounded-xl hover:bg-green-300 transition">
        <p className="text-lg font-semibold text-green-900">
          Visi kami adalah menjadi yang terbaik
        </p>
      </SectionContent>

      <SectionContent col={4} className="bg-yellow-200 p-6 rounded-xl hover:bg-yellow-300 transition">
        <p className="text-lg font-semibold text-yellow-900">
          Misi kami adalah memberikan layanan terbaik
        </p>
      </SectionContent>

      <SectionContent col={4} className="bg-red-200 p-6 rounded-xl hover:bg-red-300 transition">
        <p className="text-lg font-semibold text-red-900">
          Komitmen kami terhadap kualitas
        </p>
      </SectionContent>
      </Section>
    </div>
    <div className="col-span-1">
      <Section title="Kontak Kami" columns={1} className="rounded-2xl shadow-lg w-full h-[65vh] bg-gray-100" titleClassName="text-3xl font-bold text-purple-600 mb-20 align-center text-center" containerClassName="gap-1.5">
        <SectionContent col={1} className="bg-purple-200 p-6 rounded-xl hover:bg-purple-300 transition">
          <p className="text-lg font-semibold text-purple-900">
            Email: hajsdha@mail.com <br/>
            Phone: 08123456789 <br/>
            Address: Jl. Contoh No.123
          </p>
        </SectionContent>
      </Section>
    </div>
   </div>

    </>
  );
};

export default HomePage;

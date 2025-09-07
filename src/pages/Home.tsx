import Section, { SectionContent } from "../components/Section";

const HomePage = () => {
  return (
    <>
    <Section
      title="Demo Tanpa '!important'"
      columns={12}
      className="h-[90vh] rounded-2xl shadow-lg bg-gray-100"
      titleClassName="text-3xl font-bold text-blue-600 mb-20 align-center text-center"
      containerClassName="gap-1.5"
    >
      <SectionContent col={6} className="bg-blue-200 p-6 rounded-xl hover:bg-blue-300 transition z-50">
        <p className="text-lg font-semibold text-blue-900">
          Konten dengan Tailwind
        </p>
      </SectionContent>

      <SectionContent col={6} className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg shadow-lg z-10">
        <p className="text-xl font-bold">Konten gradient</p>
      </SectionContent>

      <SectionContent col={12} className="border-dashed border-4 border-gray-500 p-8 text-center italic">
        Full width dengan border custom
      </SectionContent>
    </Section>

   <div className="grid grid-cols-3 gap-4">
    <div className="col-span-2">
       <Section title="Visi dan Misi" columns={12} className="rounded-2xl shadow-lg w-full h-[65vh] bg-gray-100" titleClassName="text-6xl font-bold text-green-600 mb-20 align-center text-center" containerClassName="gap-1.5">
      <SectionContent col={4} className="bg-green-200 p-6 rounded-xl hover:bg-green-300 transition z-50">
        <p className="text-lg font-semibold text-green-900">
          Visi kami adalah menjadi yang terbaik
        </p>
      </SectionContent>

      <SectionContent col={4} className="bg-yellow-200 p-6 rounded-xl hover:bg-yellow-300 transition z-50">
        <p className="text-lg font-semibold text-yellow-900">
          Misi kami adalah memberikan layanan terbaik
        </p>
      </SectionContent>

      <SectionContent col={4} className="bg-red-200 p-6 rounded-xl hover:bg-red-300 transition z-50">
        <p className="text-lg font-semibold text-red-900">
          Komitmen kami terhadap kualitas
        </p>
      </SectionContent>
      </Section>
    </div>
    <div className="col-span-1">
      <Section title="Kontak Kami" columns={1} className="rounded-2xl shadow-lg w-full h-[65vh] bg-gray-100" titleClassName="text-3xl font-bold text-purple-600 mb-20 align-center text-center" containerClassName="gap-1.5">
        <SectionContent col={1} className="bg-purple-200 p-6 rounded-xl hover:bg-purple-300 transition z-50">
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

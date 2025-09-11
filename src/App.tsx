import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profil from "./pages/Profil";
import Layanan from "./pages/Layanan";
import Berita from "./pages/Berita";
import BeritaDetail from "./pages/BeritaDetails";
import Kontak from "./pages/Kontak";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* flex-grow agar konten dorong footer ke bawah */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/layanan" element={<Layanan />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/berita/:id" element={<BeritaDetail />} />
          <Route path="/kontak" element={<Kontak />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
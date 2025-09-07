import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const menuItems = [
    { name: "Beranda", path: "/" },
    { name: "Profil", path: "/profil" },
    { name: "Layanan", path: "/layanan" },
    { name: "Berita", path: "/berita" },
    { name: "Kontak", path: "/kontak" },
  ];

  return (
    <nav className="bg-white shadow-md rounded-b-xl fixed top-0 left-0 right-0 z-50">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-15">
          {/* Kiri: Logo + Nama */}
          <div className="flex items-center">
            <img src="/logo.png" alt="Logo" className="h-10 w-10 mr-3" />
            <span className="text-lg font-semibold text-gray-800 mr-30">
              Ulunggolaka
            </span>

            {/* Menu Navigasi */}
            <div className="hidden md:flex flex-1">
              {menuItems.map((item) => {
                const isActive = location.pathname === item.path;

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative group flex-1 flex px-10 items-center justify-center h-15 font-medium overflow-hidden
                      ${isActive ? "text-[#005BBB]" : "text-gray-800"}
                    `}
                  >
                    {/* Background animasi */}
                    <span
                      className={`absolute inset-0 bg-[#FFD700] -z-10 transition-all duration-300 ease-in-out
                        ${isActive ? "w-ful bg-white" : "w-0 group-hover:w-full"}
                      `}
                    >
                      <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#b9b9b9]"></span>
                    </span>

                    {item.name}

                    {/* Underline hanya untuk menu aktif */}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#005BBB]"></span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Kanan: Toggle Mode */}
          <div className="flex items-center">
            <button className="flex items-center space-x-2 px-3 py-2 bg-blue-300 rounded-full shadow hover:bg-blue-200 transition-colors duration-300 ease-in-out">
              <span className="text-lg">🌙</span>
              <span className="text-sm">☁️ ☀️</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

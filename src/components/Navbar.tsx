import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const location = useLocation();
  const [isOnSlider, setIsOnSlider] = useState(true);

  const menuItems = [
    { name: "Beranda", path: "/" },
    { name: "Profil", path: "/profil" },
    { name: "Layanan", path: "/layanan" },
    { name: "Berita", path: "/berita" },
    { name: "Kontak", path: "/kontak" },
  ];

  useEffect(() => {
    if (location.pathname !== "/") {
      // kalau bukan di index, langsung set false dan jangan pasang scroll listener
      setIsOnSlider(false);
      return;
    }

    const handleScroll = () => {
      const slider = document.getElementById("slider");
      if (slider) {
        const rect = slider.getBoundingClientRect();
        if (rect.bottom <= 0) {
          setIsOnSlider(false); // slider sudah habis
        } else {
          setIsOnSlider(true); // slider masih terlihat
        }
      } else {
        setIsOnSlider(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 
      ${
        isOnSlider
          ? "bg-transparent shadow-none"
          : "bg-white shadow-md rounded-b-xl"
      }
    `}
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Kiri */}
          <div className="flex items-center">
            <img src="/logo.png" alt="Logo" className="h-12 w-12 mr-3" />
            {!isOnSlider && (
              <>
                <span className="text-lg font-semibold text-gray-800 mr-30">
                  Ulunggolaka
                </span>
              </>
            )}
          </div>

          {/* Menu Navigasi */}
          <div className="hidden md:flex flex-1 justify-end space-x-0 h-full w-full">
            {menuItems.map((item) => {
              const isActive =
              item.path === "/berita"
                ? location.pathname.startsWith("/berita")
                : location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative font-medium px-4 py-5 overflow-hidden group
                  ${
                    isOnSlider
                      ? "text-white hover:text-black"
                      : isActive
                      ? "text-[#005BBB]"
                      : "text-gray-800 hover:text-black"
                  }
                `}
                >
                  <span className="relative z-10">{item.name}</span>
                  {/* Background animasi */}
                  {!isOnSlider && (
                    <span className="absolute inset-0 bg-[#FFD700] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-0">
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#969696] z-10"></span>
                    </span>
                  )}
                  {/* underline untuk menu aktif */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#005BBB] z-10"></span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Toggle Mode (disembunyikan di slider) */}
          {/* {!isOnSlider && (
            <div className="flex items-center ml-10">
              <button className="flex items-center space-x-2 px-3 py-2 bg-blue-300 rounded-full shadow hover:bg-blue-200 transition-colors duration-300 ease-in-out">
                <span className="text-lg">🌙</span>
                <span className="text-sm">☁️ ☀️</span>
              </button>
            </div>
          )} */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

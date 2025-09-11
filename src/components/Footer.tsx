import FooterBG from "/image.png";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      className="w-full bg-cover bg-center text-white py-10 opacity-90 mt-auto"
      style={{ backgroundImage: `url(${FooterBG})` }}
    >
      <div className="container mx-auto text-center">
        <p className="text-lg">
          &copy; {new Date().getFullYear()} KKN Kel. Ulunggolaka. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
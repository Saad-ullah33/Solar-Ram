import React from "react";
import styles from "../../Styles/Style";

import sunpower from "../../assets/sunpower.jpg";
import tesla from "../../assets/tesla.png";
import firstSolar from "../../assets/firstsolar.png";
import lgSolar from "../../assets/lgsolar.png";
import enphase from "../../assets/enphase.png";
import canadianSolar from "../../assets/canadiansolar.png";
import trinaSolar from "../../assets/trinasolar.png";

const Sponsored = () => {
  const logos = [
    { src: sunpower, alt: "SunPower" },
    { src: tesla, alt: "Tesla Energy" },
    { src: firstSolar, alt: "First Solar" },
    { src: lgSolar, alt: "LG Solar" },
    { src: enphase, alt: "Enphase" },
    { src: canadianSolar, alt: "Canadian Solar" },
    { src: trinaSolar, alt: "Trina Solar" },
  ];

  return (
    <div
      className={`${styles.section} hidden sm:block mb-10 py-8 px-4 rounded-xl bg-gradient-to-r from-blue-50 to-green-50 shadow-lg`}
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">
        🔆 Trusted by Top Solar Brands
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-transform duration-300 hover:scale-110"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="w-28 h-12 sm:w-32 sm:h-14 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsored;

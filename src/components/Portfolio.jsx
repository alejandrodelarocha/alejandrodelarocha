import { LanguageContext } from "../App";
import { useContext } from "react";
import devadlerIcon from "../assets/devadler_icon.png";
import ViewImage from "./ViewImage";
import { useState } from "react";
import devadlerImage from "../assets/devadler.png";
import redfoxIcon from "../assets/redfox_icon.png";
import redfoxImage from "../assets/redfox.png";
import alejandroIcon from "../assets/alejandro_logo.png";
import alejandroImage from "../assets/alejandro.png";
import siledoyIcon from "../assets/siledoy_icon.png";
import siledoyImage from "../assets/siledoy.jpg";
import altfiIcon from "../assets/altfi_icon.png";
import altfiImage from "../assets/altfi.png";
import compuPlusIcon from "../assets/compuplus_icon.png";
import compuPlusImage from "../assets/compuplus.png";
import uihearIcon from "../assets/uihear_icon.png";
import uihearImage from "../assets/uihear.jpg";
import ratachatIcon from "../assets/ratachat_icon.png";
import ratachatImage from "../assets/ratachat.jpg";
import pinchimundoIcon from "../assets/pinchimundo_icon.png";
import pinchimundoImage from "../assets/pinchimundo.jpg";
import sapIcon from "../assets/sap_icon.png";
import sapImage from "../assets/sap.png";
import lifestanceIcon from "../assets/lifestance_icon.png";
import lifestanceImage from "../assets/lifestance.jpg";
import politicusIcon from "../assets/politicus_icon.png";
import politicusImage from "../assets/politicus.png";


const Portfolio = () => {
  const { languageData } = useContext(LanguageContext);
  const { main } = languageData;
  const [showImage, setShowImage] = useState(false);
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');

  return (
    <>
      {showImage ? <ViewImage image={image} description={description} setShowImage={setShowImage} /> : null}
      <a name="projects"></a>
      <div className="relative text-center">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide max-sm:mb-10" style={{ marginTop: "100px", marginBottom: "100px" }}>
          <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
            {languageData.main.portfolioTitle}
          </span>
        </h2>

        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:mt-20 mx-2 sm:mt-20">
          {/* Devadler */}
          <div className="text-center border border-gray-800 rounded-lg">
            <img src={devadlerIcon} onClick={() => { setShowImage(true); setImage(devadlerImage); setDescription(languageData.portfolio.devadler); }} className="w-full h-full object-cover hover:scale-105 transition-all duration-300 cursor-pointer rounded-lg" />
          </div>

          {/* Red Fox */}
          <div className="text-center border border-gray-800 rounded-lg">
            <img src={redfoxIcon} onClick={() => { setShowImage(true); setImage(redfoxImage); setDescription(languageData.portfolio.redfox); }} className="w-full h-full object-cover hover:scale-105 transition-all duration-300 cursor-pointer rounded-lg" />
          </div>

          {/* Alejandro */}
          <div className="text-center border border-gray-800 rounded-lg">
            <img src={alejandroIcon} onClick={() => { setShowImage(true); setImage(alejandroImage); setDescription(languageData.portfolio.alejandro); }} className="w-full h-full object-cover hover:scale-105 transition-all duration-300 cursor-pointer rounded-lg" />
          </div>

          {/* Siledoy */}
          <div className="text-center border border-gray-800 rounded-lg">
            <img src={siledoyIcon} onClick={() => { setShowImage(true); setImage(siledoyImage); setDescription(languageData.portfolio.siledoy); }} className="w-full h-full object-cover hover:scale-105 transition-all duration-300 cursor-pointer rounded-lg" />
          </div>

        </div>
      </div>

      {/* 4-column grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mx-2 sm:mt-5">
        {/* AltFi */}
        <div className="text-center border border-gray-800 rounded-lg">
            <img src={altfiIcon} onClick={() => { setShowImage(true); setImage(altfiImage); setDescription(languageData.portfolio.altfi); }} className="w-full h-full object-cover hover:scale-105 transition-all duration-300 cursor-pointer rounded-lg" />
          </div>

         {/* CompuPlus */}
         <div className="text-center border border-gray-800 rounded-lg">
            <img src={compuPlusIcon} onClick={() => { setShowImage(true); setImage(compuPlusImage); setDescription(languageData.portfolio.compuPlus); }} className="w-full h-full object-cover hover:scale-105 transition-all duration-300 cursor-pointer rounded-lg" />
          </div>

        {/* UI Hear */}
          <div className="text-center border border-gray-800 rounded-lg">
            <img src={uihearIcon} onClick={() => { setShowImage(true); setImage(uihearImage); setDescription(languageData.portfolio.uiHear); }} className="w-full h-full object-cover hover:scale-105 transition-all duration-300 cursor-pointer rounded-lg" />
          </div>

        {/* Ratachat */}
        <div className="text-center border border-gray-800 rounded-lg">
            <img src={ratachatIcon} onClick={() => { setShowImage(true); setImage(ratachatImage); setDescription(languageData.portfolio.ratachat); }} className="w-full h-full object-cover hover:scale-105 transition-all duration-300 cursor-pointer rounded-lg" />
          </div>

      </div>

        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mx-2 sm:mt-5">
        {/* PINCHIMUNDO */}
        <div className="text-center border border-gray-800 rounded-lg">
            <img src={pinchimundoIcon} onClick={() => { setShowImage(true); setImage(pinchimundoImage); setDescription(languageData.portfolio.pinchimundo); }} className="w-full h-full object-cover hover:scale-105 transition-all duration-300 cursor-pointer rounded-lg" />
          </div>

         {/* Sap */}
         <div className="text-center border border-gray-800 rounded-lg">
            <img src={sapIcon} onClick={() => { setShowImage(true); setImage(sapImage); setDescription(languageData.portfolio.sap); }} className="w-full h-full object-cover hover:scale-105 transition-all duration-300 cursor-pointer rounded-lg" />
          </div>

        {/* Politicus */}
          <div className="text-center border border-gray-800 rounded-lg">
            <img src={politicusIcon} onClick={() => { setShowImage(true); setImage(politicusImage); setDescription(languageData.portfolio.politicus); }} className="w-full h-full object-cover hover:scale-105 transition-all duration-300 cursor-pointer rounded-lg" />
          </div>

        {/* Ratachat */}
        <div className="text-center border border-gray-800 rounded-lg">
            <img src={lifestanceIcon} onClick={() => { setShowImage(true); setImage(lifestanceImage); setDescription(languageData.portfolio.lifestance); }} className="w-full h-full object-cover hover:scale-105 transition-all duration-300 cursor-pointer rounded-lg" />
          </div>

      </div>


    </>


  );
};

export default Portfolio;

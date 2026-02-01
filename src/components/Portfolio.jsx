import { LanguageContext } from "../App";
import { useContext } from "react";
import ViewImage from "./ViewImage";
import { useState } from "react";

// Current Projects
import altfiIcon from "../assets/altfi_icon.png";
import altfiImage from "../assets/altfi.png";
import altfiGalleryIcon from "../assets/altfi_gallery_icon.png";
import taekookIcon from "../assets/taekook_icon.png";
import getCertifiedIcon from "../assets/getcert_icon.png";
import getCertifiedImage from "../assets/getcert.png";
import larekIcon from "../assets/larek_icon.png";
import weddingIcon from "../assets/wedding_icon.webp";
import clsoIcon from "../assets/clso_icon.png";
import edIcon from "../assets/ed_icon.png";
import kevinpicksIcon from "../assets/kevinpicks_hero.png";
import kevinpicksImage from "../assets/kevinpicks_dashboard.png";
import planeasecIcon from "../assets/planeasec_icon.png";
import planeasecImage from "../assets/planeasec.png";

// Old Projects
import devadlerIcon from "../assets/devadler_icon.png";
import devadlerImage from "../assets/devadler.png";
import redfoxIcon from "../assets/redfox_icon.png";
import redfoxImage from "../assets/redfox.png";
import alejandroIcon from "../assets/alejandro_logo.png";
import alejandroImage from "../assets/alejandro.png";
import siledoyIcon from "../assets/siledoy_icon.png";
import siledoyImage from "../assets/siledoy.jpg";
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
  const [showImage, setShowImage] = useState(false);
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const [techStack, setTechStack] = useState(null);

  const openModal = (img, desc, projectKey) => {
    setShowImage(true);
    setImage(img);
    setDescription(desc);
    setTechStack(languageData.techStack?.[projectKey] || null);
  };

  const cardClass = "text-center border border-gray-800 rounded-lg overflow-hidden";
  const imgClass = "w-full h-full object-cover hover:scale-105 transition-all duration-300 cursor-pointer rounded-lg";

  return (
    <>
      {showImage ? <ViewImage image={image} description={description} techStack={techStack} setShowImage={setShowImage} /> : null}
      <a name="projects"></a>
      <div className="relative text-center">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide max-sm:mb-10" style={{ marginTop: "100px", marginBottom: "100px" }}>
          <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
            {languageData.main.portfolioTitle}
          </span>
        </h2>

        {/* Current Projects - Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:mt-20 mx-2 sm:mt-20">
          <div className={cardClass}>
            <img src={altfiIcon} onClick={() => openModal(altfiImage, languageData.portfolio.altfi, 'altfi')} className={imgClass} />
          </div>
          <div className={cardClass}>
            <img src={altfiGalleryIcon} onClick={() => openModal(altfiGalleryIcon, languageData.portfolio.altfiGallery, 'altfiGallery')} className={imgClass} />
          </div>
          <div className={cardClass}>
            <img src={taekookIcon} onClick={() => openModal(taekookIcon, languageData.portfolio.taekook, 'taekook')} className={imgClass} />
          </div>
          <div className={cardClass}>
            <img src={getCertifiedIcon} onClick={() => openModal(getCertifiedImage, languageData.portfolio.getCertified, 'getCertified')} className={imgClass} />
          </div>
        </div>

        {/* Current Projects - Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mx-2 sm:mt-5">
          <div className={cardClass}>
            <img src={larekIcon} onClick={() => openModal(larekIcon, languageData.portfolio.larek, 'larek')} className={imgClass} />
          </div>
          <div className={cardClass}>
            <img src={weddingIcon} onClick={() => openModal(weddingIcon, languageData.portfolio.wedding, 'wedding')} className={imgClass} />
          </div>
          <div className={cardClass}>
            <img src={clsoIcon} onClick={() => openModal(clsoIcon, languageData.portfolio.clso, 'clso')} className={imgClass} />
          </div>
          <div className={cardClass}>
            <img src={edIcon} onClick={() => openModal(edIcon, languageData.portfolio.ed, 'ed')} className={imgClass} />
          </div>
        </div>

        {/* Current Projects - Row 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mx-2 sm:mt-5">
          <div className={cardClass} style={{ height: '250px' }}>
            <img src={kevinpicksIcon} onClick={() => openModal(kevinpicksImage, languageData.portfolio.kevinpicks, 'kevinpicks')} className={imgClass} />
          </div>
          <div className={cardClass} style={{ height: '250px' }}>
            <img src={planeasecIcon} onClick={() => openModal(planeasecImage, languageData.portfolio.planeasec, 'planeasec')} className={imgClass} />
          </div>
        </div>
      </div>

      {/* Old Projects Section */}
      <div className="relative text-center">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide max-sm:mb-10" style={{ marginTop: "100px", marginBottom: "100px" }}>
          <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
            {languageData.main.oldPortfolioTitle}
          </span>
        </h2>

        {/* Old Projects - Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:mt-20 mx-2 sm:mt-20">
          <div className={cardClass}>
            <img src={devadlerIcon} onClick={() => openModal(devadlerImage, languageData.oldPortfolio.devadler, 'devadler')} className={imgClass} />
          </div>
          <div className={cardClass}>
            <img src={redfoxIcon} onClick={() => openModal(redfoxImage, languageData.oldPortfolio.redfox, 'redfox')} className={imgClass} />
          </div>
          <div className={cardClass}>
            <img src={alejandroIcon} onClick={() => openModal(alejandroImage, languageData.oldPortfolio.alejandro, 'alejandro')} className={imgClass} />
          </div>
          <div className={cardClass}>
            <img src={siledoyIcon} onClick={() => openModal(siledoyImage, languageData.oldPortfolio.siledoy, 'siledoy')} className={imgClass} />
          </div>
        </div>

        {/* Old Projects - Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mx-2 sm:mt-5">
          <div className={cardClass}>
            <img src={compuPlusIcon} onClick={() => openModal(compuPlusImage, languageData.oldPortfolio.compuPlus, 'compuPlus')} className={imgClass} />
          </div>
          <div className={cardClass}>
            <img src={uihearIcon} onClick={() => openModal(uihearImage, languageData.oldPortfolio.uiHear, 'uiHear')} className={imgClass} />
          </div>
          <div className={cardClass}>
            <img src={ratachatIcon} onClick={() => openModal(ratachatImage, languageData.oldPortfolio.ratachat, 'ratachat')} className={imgClass} />
          </div>
          <div className={cardClass}>
            <img src={pinchimundoIcon} onClick={() => openModal(pinchimundoImage, languageData.oldPortfolio.pinchimundo, 'pinchimundo')} className={imgClass} />
          </div>
        </div>

        {/* Old Projects - Row 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mx-2 sm:mt-5">
          <div className={cardClass}>
            <img src={sapIcon} onClick={() => openModal(sapImage, languageData.oldPortfolio.sap, 'sap')} className={imgClass} />
          </div>
          <div className={cardClass}>
            <img src={politicusIcon} onClick={() => openModal(politicusImage, languageData.oldPortfolio.politicus, 'politicus')} className={imgClass} />
          </div>
          <div className={cardClass}>
            <img src={lifestanceIcon} onClick={() => openModal(lifestanceImage, languageData.oldPortfolio.lifestance, 'lifestance')} className={imgClass} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;

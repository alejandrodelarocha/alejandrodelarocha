import { ReactTyped } from 'react-typed';
import profile from "../assets/alejandro_fullbody.png";
import { LanguageContext } from '../App';
import { useContext } from 'react';
import '../assets/style.scss';

const HeroSection = () => {
  const { languageData } = useContext(LanguageContext);
  return (
    <div>
      <a name="about"></a>
      <section className="w-full min-h-screen text-center flex flex-col items-center justify-center">
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center">
          {/* Profile Image with Orbiting Tech Icons */}
          <div className="hero-image lg:w-1/2 w-full shadow-blue-400 mx-2 flex justify-center items-center mt-10 lg:mt-0">
            <div className="orbit-container">
              <div className="relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 w-full h-full flex items-center justify-center hover:scale-105">
                <img
                  src={profile}
                  alt="profile"
                  className="w-full h-full object-contain drop-shadow-[0_0_25px_rgba(59,130,246,0.4)]"
                />
              </div>
              <div className="orbit-ring">
                <div className="orbit-icon" data-tooltip="Rails">
                  <img src="https://static.cdnlogo.com/logos/r/26/rails.svg" alt="Rails" />
                </div>
                <div className="orbit-icon" data-tooltip="JavaScript">
                  <img src="https://static.cdnlogo.com/logos/j/44/javascript.svg" alt="JavaScript" />
                </div>
                <div className="orbit-icon" data-tooltip="React">
                  <img src="https://static.cdnlogo.com/logos/r/85/react.svg" alt="React" />
                </div>
                <div className="orbit-icon" data-tooltip="TypeScript">
                  <img src="https://static.cdnlogo.com/logos/t/96/typescript.svg" alt="TypeScript" />
                </div>
                <div className="orbit-icon" data-tooltip="Vue.js">
                  <img src="https://static.cdnlogo.com/logos/v/92/vue-js.svg" alt="VueJS" />
                </div>
                <div className="orbit-icon" data-tooltip="Python">
                  <img src="https://static.cdnlogo.com/logos/p/3/python.svg" alt="Python" />
                </div>
              </div>
            </div>
          </div>


          {/* Title and Description */}
          <div className="rounded-lg lg:w-1/2 w-full shadow-blue-400 mx-2 my-4">
            <h1 className="hero-title text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide" style={{ marginTop: '20px' }}>
              {languageData.main.title}
              <span className="hero-name">
                <ReactTyped strings={["Alejandro"]} typeSpeed={50} />
              </span>
            </h1>
            <p className="hero-desc mt-10 text-lg text-center text-neutral-500 max-w-4xl" style={{ whiteSpace: 'pre-line' }}>
              {languageData.main.description}
            </p>
            <a className="hero-btn inline-block mt-5 mb-10 lg:mb-0" href="https://drive.google.com/file/d/12KwZyaLQOEp0DTYUgjnhk_xOaoKEYINB/view?usp=sharing" target='_blank' rel="noreferrer">
              <button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-400 hover:to-blue-600 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded active:from-blue-700 active:to-blue-900 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]">
                {languageData.main.cv}
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>

  );
};

export default HeroSection;

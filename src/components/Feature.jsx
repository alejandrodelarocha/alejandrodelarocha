import { ReactTyped } from 'react-typed';
import profile from "../assets/photo.jpg";
import { LanguageContext } from '../App';
import { useContext, useEffect, useState } from 'react';

const HeroSection = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [marginTop, setMarginTop] = useState("0px");

  // Update viewport width on window resize
  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log(viewportWidth, marginTop)

  // Update marginTop based on viewport width
  useEffect(() => {
    const updateMarginTop = () => {
      if (viewportWidth < 376) {
        setMarginTop("190px");
      } else if (viewportWidth < 454) {
        setMarginTop("100px");
      } else if (viewportWidth < 859) {
        setMarginTop("60px");
      } else if (viewportWidth < 1024) {
        setMarginTop("50px");
      } else {
        setMarginTop("0px"); // Default value for larger screens
      }
    };

    updateMarginTop();
  }, [viewportWidth]);

  const { languageData } = useContext(LanguageContext);
  return (
    <div>
      <a name="about"></a>
      <section className="w-full h-screen text-center flex flex-col items-center justify-center" style={{ marginTop: marginTop }}>
        <div className="flex sm:flex-wrap lg:flex-nowrap max-sm:flex-wrap justify-center items-center">
          {/* Profile Image */}
          <div className="lg:w-1/2 sm:w-full shadow-blue-400 mx-2 flex justify-center items-center">
            <div className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 h-[400px] w-[400px] bg-blue-500 flex items-center justify-center text-white text-xl shadow-lg shadow-blue-500 hover:scale-110 rounded-full floating max-sm:w-[200px] max-sm:h-[200px] max-sm:mt-[500px] max-lg:mt-[300px]">
              <img
                src={profile}
                alt="profile"
                className="rounded-full w-full h-full object-cover"
                onClick={() => {
                  //window.open("https://www.linkedin.com/in/alejandrodlrocha/", "_blank");
                }}
              />
            </div>
          </div>


          {/* Title and Description */}
          <div className="rounded-lg lg:w-1/2 sm:w-full max-sm:mb-[400px] sm:mb-[100px] shadow-blue-400 mx-2 my-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide" style={{ marginTop: '20px' }}>
              {languageData.main.title}
              <span className="bg-gradient-to-r from-blue-300 to-blue-800 text-transparent bg-clip-text">
                <ReactTyped strings={["Alejandro"]} typeSpeed={50} />
              </span>
            </h1>
            <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl" style={{ whiteSpace: 'pre-line' }}>
              {languageData.main.description}
            </p>
            <a href="https://drive.google.com/file/d/12KwZyaLQOEp0DTYUgjnhk_xOaoKEYINB/view?usp=sharing" target='_blank' rel="noreferrer">
              <button class="bg-gradient-to-r mt-5 max-lg:mb-40 from-blue-500 to-blue-700 hover:from-blue-400 hover:to-blue-600 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded active:from-blue-700 active:to-blue-900">
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

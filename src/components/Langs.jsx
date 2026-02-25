import { LanguageContext } from "../App";
import { useContext } from "react";
import expressPNG from "../assets/express.png";
import nextjsPNG from "../assets/nextjs.png";

const Langs = () => {
  const { languageData } = useContext(LanguageContext);
  const { features } = languageData;
  return (
    <>
    <a name="stack"></a>
      <div className="relative text-center">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide max-sm:mb-10" style={{ marginTop: "100px", marginBottom: "100px" }}>
          <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
            {languageData.main.titleTech}
          </span>
        </h2>

        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:mt-20 mx-2 sm:mt-20">
          {/* JavaScript */}
          <div className="py-10 text-center border border-gray-800 rounded-lg">
            <div>
              <img src="https://static.cdnlogo.com/logos/j/44/javascript.svg" className="block mx-auto w-10 h-10 floating-flat" />
              <p className="pt-4 text-sm font-medium capitalize font-body text-blue-100 lg:text-lg md:text-base md:pt-6 text-3xl">
                JavaScript
              </p>

              <div className="w-full max-w-[80%] h-6 bg-gray-200 rounded-full dark:bg-gray-700 mt-5 mx-auto">
                <div className="h-6 bg-blue-600 rounded-full dark:bg-blue-500 " style={{ width: '96%' }}>
                  16 Years
                </div>
              </div>
            </div>
          </div>

          {/* TypeScript */}
          <div className="py-10 text-center border border-gray-800 rounded-lg">
            <div>
              <img src="https://static.cdnlogo.com/logos/t/96/typescript.svg" className="block mx-auto w-10 h-10 floating-flat" />
              <p className="pt-4 text-sm font-medium capitalize font-body text-blue-100 lg:text-lg md:text-base md:pt-6 text-3xl">
                TypeScript
              </p>
            </div>
            <div className="w-full max-w-[80%] h-6 bg-gray-200 rounded-full dark:bg-gray-700 mt-5 mx-auto">
              <div className="h-6 bg-blue-600 rounded-full dark:bg-blue-500" style={{ width: '82%' }}>
                7 Years
              </div>
            </div>
          </div>

          {/* CSS */}
          <div className="py-10 text-center border border-gray-800 rounded-lg">
            <div>
              <img src="https://static.cdnlogo.com/logos/c/18/css.svg" className="block mx-auto w-10 h-10 floating-flat" />
              <p className="pt-4 text-sm font-medium capitalize font-body text-blue-100 lg:text-lg md:text-base md:pt-6 text-3xl">
                CSS
              </p>
            </div>
            <div className="w-full max-w-[80%] h-6 bg-gray-200 rounded-full dark:bg-gray-700 mt-5 mx-auto">
              <div className="h-6 bg-blue-600 rounded-full dark:bg-blue-500" style={{ width: '96%' }}>
                16 Years
              </div>
            </div>
          </div>

          {/* Ruby */}
          <div className="py-10 text-center border border-gray-800 rounded-lg">
            <div>
              <img src="https://static.cdnlogo.com/logos/r/72/ruby.svg" className="block mx-auto w-10 h-10 floating-flat" />
              <p className="pt-4 text-sm font-medium capitalize font-body text-blue-100 lg:text-lg md:text-base md:pt-6 text-3xl">
                Ruby
              </p>
            </div>
            <div className="w-full max-w-[80%] h-6 bg-gray-200 rounded-full dark:bg-gray-700 mt-5 mx-auto">
              <div className="h-6 bg-blue-600 rounded-full dark:bg-blue-500" style={{ width: '60%' }}>
                5 Years
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 4-column grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mx-2 sm:mt-5">
        {/* C# */}
        <div className="py-10 text-center border border-gray-800 rounded-lg">
          <div>
            <img src="https://www.php.net//images/logos/new-php-logo.svg" className="block mx-auto w-20 h-10 floating-flat" />
            <p className="pt-4 text-sm font-medium capitalize font-body text-blue-100 lg:text-lg md:text-base md:pt-6 text-3xl">
              PHP
            </p>

            <div className="w-full max-w-[80%] h-6 bg-gray-200 rounded-full dark:bg-gray-700 mt-5 mx-auto">
              <div className="h-6 bg-blue-600 rounded-full dark:bg-blue-500 " style={{ width: '96%' }}>
                16 Years
              </div>
            </div>
          </div>
        </div>

        {/* Ruby */}
        <div className="py-10 text-center border border-gray-800 rounded-lg">
          <div>
            <img src="https://static.cdnlogo.com/logos/j/8/java.svg" className="block mx-auto w-10 h-10 floating-flat" />
            <p className="pt-4 text-sm font-medium capitalize font-body text-blue-100 lg:text-lg md:text-base md:pt-6 text-3xl">
              Java
            </p>
          </div>
          <div className="w-full max-w-[80%] h-6 bg-gray-200 rounded-full dark:bg-gray-700 mt-5 mx-auto">
            <div className="h-6 bg-blue-600 rounded-full dark:bg-blue-500" style={{ width: '60%' }}>
              5 Years
            </div>
          </div>
        </div>

        {/* SQL */}
        <div className="py-10 text-center border border-gray-800 rounded-lg">
          <div>
            <div className="block mx-auto w-30 h-10 floating-flat text-blue-600 text-3xl">
              SQL
            </div>
            <p className="pt-4 text-sm font-medium capitalize font-body text-blue-100 lg:text-lg md:text-base md:pt-6 text-3xl">
              SQL
            </p>
            <div className="w-full max-w-[80%] h-6 bg-gray-200 rounded-full dark:bg-gray-700 mt-5 mx-auto">
              <div className="h-6 bg-blue-600 rounded-full dark:bg-blue-500 " style={{ width: '94%' }}>
                15 Years
              </div>
            </div>
          </div>
        </div>

        {/* Python */}
        <div className="py-10 text-center border border-gray-800 rounded-lg">
          <div>
            <img src="https://static.cdnlogo.com/logos/p/3/python.svg" className="block mx-auto w-10 h-10 floating-flat" />
            <p className="pt-4 text-sm font-medium capitalize font-body text-blue-100 lg:text-lg md:text-base md:pt-6 text-3xl">
              Python
            </p>
          </div>
          <div className="w-full max-w-[80%] h-6 bg-gray-200 rounded-full dark:bg-gray-700 mt-5 mx-auto">
            <div className="h-6 bg-blue-600 rounded-full dark:bg-blue-500" style={{ width: '50%' }}>
              3 Years
            </div>
          </div>
        </div>

      </div>




      <div className="relative  border-neutral-800 text-center">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide max-sm:mb-10">
          <span className="bg-gradient-to-r from-blue-100 to-blue-300 text-transparent bg-clip-text">
            {languageData.main.libraries}
          </span>
        </h2>

        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:mt-20 mx-2 sm:mt-20">
          {/* ReactJS */}
          <div className="py-10 text-center border border-gray-800 rounded-lg">
            <div>
              <img src="https://static.cdnlogo.com/logos/r/85/react.svg" className="block mx-auto w-10 h-10 floating-flat" />
              <p className="pt-4 text-sm font-medium capitalize font-body text-blue-100 lg:text-lg md:text-base md:pt-6 text-3xl">
                ReactJS
              </p>

              <div className="w-full max-w-[80%] h-6 bg-gray-200 rounded-full dark:bg-gray-700 mt-5 mx-auto">
                <div className="h-6 bg-blue-600 rounded-full dark:bg-blue-500 " style={{ width: '82%' }}>
                  7 Years
                </div>
              </div>
            </div>
          </div>

          {/* Ruby on Rails */}
          <div className="py-10 text-center border border-gray-800 rounded-lg">
            <div>
              <img src="https://static.cdnlogo.com/logos/r/26/rails.svg" className="block mx-auto w-20 h-10 floating-flat" />
              <p className="pt-4 text-sm font-medium capitalize font-body text-blue-100 lg:text-lg md:text-base md:pt-6 text-3xl">
                Ruby on Rails
              </p>
            </div>
            <div className="w-full max-w-[80%] h-6 bg-gray-200 rounded-full dark:bg-gray-700 mt-5 mx-auto">
              <div className="h-6 bg-blue-600 rounded-full dark:bg-blue-500" style={{ width: '60%' }}>
                5 Years
              </div>
            </div>
          </div>

          {/* VueJS */}
          <div className="py-10 text-center border border-gray-800 rounded-lg">
            <div>
              <img src="https://static.cdnlogo.com/logos/v/92/vue-js.svg" className="block mx-auto w-10 h-10 floating-flat" />
              <p className="pt-4 text-sm font-medium capitalize font-body text-blue-100 lg:text-lg md:text-base md:pt-6 text-3xl">
                VueJS
              </p>
            </div>
            <div className="w-full max-w-[80%] h-6 bg-gray-200 rounded-full dark:bg-gray-700 mt-5 mx-auto">
              <div className="h-6 bg-blue-600 rounded-full dark:bg-blue-500" style={{ width: '25%' }}>
                2 Years
              </div>
            </div>
          </div>

          {/* Tailwind CSS */}
          <div className="py-10 text-center border border-gray-800 rounded-lg">
            <div>
              <div className="block mx-auto w-30 h-10 floating-flat text-blue-600 text-3xl">
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" className="block mx-auto w-10 h-10 floating-flat" />
              </div>
              <p className="pt-4 text-sm font-medium capitalize font-body text-blue-100 lg:text-lg md:text-base md:pt-6 text-3xl">
                Tailwind CSS
              </p>
              <div className="w-full max-w-[80%] h-6 bg-gray-200 rounded-full dark:bg-gray-700 mt-5 mx-auto">
                <div className="h-6 bg-blue-600 rounded-full dark:bg-blue-500 " style={{ width: '60%' }}>
                  5 Years
                </div>
              </div>
            </div>
          </div>
          {/* Ionic */}
          <div className="py-10 text-center border border-gray-800 rounded-lg">
            <div>
              <img src="https://cdn.freebiesupply.com/logos/large/2x/ionic-logo-svg-vector.svg" className="block mx-auto w-20 h-10 floating-flat" />
              <p className="pt-4 text-sm font-medium capitalize font-body text-blue-100 lg:text-lg md:text-base md:pt-6 text-3xl">
                Ionic Framework
              </p>

              <div className="w-full max-w-[80%] h-6 bg-gray-200 rounded-full dark:bg-gray-700 mt-5 mx-auto">
                <div className="h-6 bg-blue-600 rounded-full dark:bg-blue-500 " style={{ width: '72%' }}>
                  6 Years
                </div>
              </div>
            </div>
          </div>

          {/* ExpressJS */}
          <div className="py-10 text-center border border-gray-800 rounded-lg">
            <div>
              <img src={expressPNG} className="block mx-auto w-30 h-10 floating-flat shadow-white rounded-md" />
              <p className="pt-4 text-sm font-medium capitalize font-body text-blue-100 lg:text-lg md:text-base md:pt-6 text-3xl">
                ExpressJS
              </p>
            </div>
            <div className="w-full max-w-[80%] h-6 bg-gray-200 rounded-full dark:bg-gray-700 mt-5 mx-auto">
              <div className="h-6 bg-blue-600 rounded-full dark:bg-blue-500" style={{ width: '50%' }}>
                3 Years
              </div>
            </div>
          </div>

          {/* Redux */}
          <div className="py-10 text-center border border-gray-800 rounded-lg">
            <div>
              <img src="https://redux.js.org/img/redux.svg" className="block mx-auto w-30 h-10 floating-flat" />
              <p className="pt-4 text-sm font-medium capitalize font-body text-blue-100 lg:text-lg md:text-base md:pt-6 text-3xl">
                Redux
              </p>
            </div>
            <div className="w-full max-w-[80%] h-6 bg-gray-200 rounded-full dark:bg-gray-700 mt-5 mx-auto">
              <div className="h-6 bg-blue-600 rounded-full dark:bg-blue-500" style={{ width: '82%' }}>
                7 Years
              </div>
            </div>
          </div>

          {/* NextJS */}
          <div className="py-10 text-center border border-gray-800 rounded-lg">
            <div>
              <div className="block mx-auto w-30 h-10 floating-flat text-blue-600 text-3xl">
                <img src={nextjsPNG} className="block mx-auto w-30 h-10 floating-flat rounded-md" />
              </div>
              <p className="pt-4 text-sm font-medium capitalize font-body text-blue-100 lg:text-lg md:text-base md:pt-6 text-3xl">
                NextJS
              </p>
              <div className="w-full max-w-[80%] h-6 bg-gray-200 rounded-full dark:bg-gray-700 mt-5 mx-auto">
                <div className="h-6 bg-blue-600 rounded-full dark:bg-blue-500 " style={{ width: '50%' }}>
                  3 Years
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>


  );
};

export default Langs;

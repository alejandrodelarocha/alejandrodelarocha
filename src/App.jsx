import Navbar from "./components/Navbar";
import Feature from "./components/Feature";
import Langs from "./components/Langs"
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Portfolio from "./components/Portfolio";
import { createContext, useState, useEffect } from 'react';
import { APP_DATA_ENGLISH, APP_DATA_SPANISH } from './constants';

export const LanguageContext = createContext();

const App = () => {

  const [language, setLanguage] = useState('ENG');
  const [languageData, setLanguageData] = useState(APP_DATA_ENGLISH);

  const toggleLanguage = () => {
    setLanguage(language === 'ESP' ? 'ENG' : 'ESP');
  }

  useEffect(() => {
    setLanguageData(language === 'ESP' ? APP_DATA_SPANISH : APP_DATA_ENGLISH);
  }, [language]);

  return (
    <>
    <LanguageContext.Provider value={{languageData, toggleLanguage}}>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6">
        <Feature />
        <Langs />
        <Portfolio />
        <Testimonials />
        <Footer />
      </div>
      </LanguageContext.Provider>
    </>
  );
};

export default App;

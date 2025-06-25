import { useContext } from "react";
import { LanguageContext } from "../App";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonials = () => {
  const { languageData } = useContext(LanguageContext);
  const { testimonials } = languageData;

  return (
    <>
      <a name="testimonials"></a>
      <div className="text-center mt-50 h-200 flex flex-wrap justify-center" style={{ marginTop: "100px", marginBottom: "100px" }}>
      <h2 className="text-3xl sm:text-5xl lg:text-6xl tracking-wide max-sm:mb-10 h-100">
        <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
          {languageData.main.testimonialsTitle}
        </span>
      </h2>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 15000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        className="w-full mt-10"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <blockquote className="text-xl italic font-semibold text-gray-900 dark:text-white p-6">
              <svg className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4 mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
              </svg>
              <p className="text-gray-300 leading-relaxed text-center w-4/5 mx-auto">{testimonial.text}</p>
              <div className="flex flex-col items-center justify-center mt-6 cursor-pointer" onClick={() => testimonial.href !== "#" ? window.open(testimonial.href, "_blank") : null}>
                <div className="rounded-full w-14 h-14 bg-black overflow-hidden">
                  <img src={testimonial.image} alt="user" />
                </div>
                <div className="flex flex-col tracking-wider text-center mt-2 ">
                  <label className="text-gray-500 font-bold text-base">{testimonial.user}</label>
                  <label className="text-gray-400 font-normal text-sm">{testimonial.company}</label>
                </div>
              </div>
            </blockquote>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </>
  );
};

export default Testimonials;

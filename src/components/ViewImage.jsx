import { useEffect, useState } from "react";

const ViewImage = ({ description, image, setShowImage }) => {
    const [scrollTop, setScrollTop] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Save current scroll position
        setScrollTop(window.scrollY);
        
        // Disable scrolling
        document.body.style.overflow = "hidden";

        // Delay setting opacity for animation
        setTimeout(() => setIsVisible(true), 10);

        return () => {
            // Re-enable scrolling when unmounted
            document.body.style.overflow = "";
        };
    }, []);

    return (
        <section>
            <div 
                className={`absolute w-full h-screen grid transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'} 
                grid-cols-1 sm:grid-cols-[70%_30%]`} // Changes layout on small screens
                style={{ top: `${scrollTop}px`, zIndex: 1000, left: `0px` }}
            >
                {/* Image Section */}
                <div className="bg-gray-700 h-full px-10 overflow-y-scroll flex justify-center items-center">
                    <img src={image} className="max-h-full max-w-full" />
                </div>

                {/* Description Section */}
                <div className="bg-gray-500 w-full h-full flex flex-col justify-center items-center p-5 sm:p-10">
                    <p className="text-right lg:text-2xl whitespace-pre-wrap">{description}</p>
                    <button 
                        type="button" 
                        onClick={() => setShowImage(false)} 
                        className="absolute top-2 right-2 bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    >
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ViewImage;

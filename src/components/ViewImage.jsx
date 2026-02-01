import { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";

const ViewImage = ({ description, image, techStack, setShowImage }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        setTimeout(() => setIsVisible(true), 10);

        const handleEsc = (e) => {
            if (e.key === "Escape") setShowImage(false);
        };
        window.addEventListener("keydown", handleEsc);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleEsc);
        };
    }, [setShowImage]);

    const feString = techStack?.fe ? `const frontEnd = [${techStack.fe.map(t => `'${t}'`).join(', ')}];` : '';
    const beString = techStack?.be ? `const backEnd = [${techStack.be.map(t => `'${t}'`).join(', ')}];` : '';

    return (
        <section>
            <div
                className={`fixed inset-0 w-full h-full transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{ zIndex: 1000 }}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    onClick={() => setShowImage(false)}
                />

                {/* Modal Content */}
                <div className="relative w-full h-full flex flex-col items-center justify-start overflow-y-auto py-10 px-4">
                    {/* Close Button */}
                    <button
                        type="button"
                        onClick={() => setShowImage(false)}
                        className="fixed top-4 right-4 z-50 bg-gray-800 hover:bg-gray-700 rounded-full p-3 text-white transition-colors duration-200 shadow-lg"
                    >
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Description */}
                    <div className="max-w-4xl w-full text-center mb-6">
                        <p className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text whitespace-pre-wrap leading-relaxed">
                            {description}
                        </p>
                    </div>

                    {/* Code Snippet */}
                    {techStack && (
                        <div className="max-w-3xl w-full mb-6 bg-gray-900 rounded-lg p-5 border border-gray-700 font-mono text-sm sm:text-base">
                            <ReactTyped
                                strings={[feString, beString]}
                                typeSpeed={40}
                                backSpeed={25}
                                backDelay={2000}
                                loop
                                showCursor
                                cursorChar="_"
                            >
                                <span className="text-green-400" />
                            </ReactTyped>

                            {/* Tech Badges */}
                            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-700">
                                {techStack.fe?.map((tech) => (
                                    <span key={tech} className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-xs sm:text-sm border border-blue-700">
                                        {tech}
                                    </span>
                                ))}
                                {techStack.be?.map((tech) => (
                                    <span key={tech} className="px-3 py-1 bg-emerald-900/50 text-emerald-300 rounded-full text-xs sm:text-sm border border-emerald-700">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Image */}
                    <div className="max-w-5xl w-full flex justify-center">
                        <img
                            src={image}
                            className="max-w-full max-h-[60vh] object-contain rounded-lg shadow-2xl shadow-blue-500/20 border border-gray-700"
                            alt="Project screenshot"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ViewImage;

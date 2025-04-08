
import { useEffect, useRef } from 'react';
import AnimatedSection from './AnimatedSection';

const EgestorERP = () => {
  const egestorLink = "https://www.egestor.com.br/afl/8071";
  const videoRef = useRef<HTMLVideoElement>(null);

  // Set up proper video loading and error handling
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.onerror = () => {
        console.error("Failed to load eGestor video");
      };
    }
  }, []);

  return (
    <section id="egestor" className="py-10 md:py-16 lg:py-20 bg-white overflow-hidden">
      <div className="container px-4 mx-auto max-w-5xl">
        <AnimatedSection animation="fade-in-up">
          <div className="flex flex-col md:flex-row md:items-center md:gap-6 lg:gap-10 mb-6">
            {/* Left column - Header Text */}
            <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
              <a href={egestorLink} target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-90 transition-opacity">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 leading-tight">Sistema de gestão empresarial</h2>
              </a>
              <p className="text-lg text-gray-600 font-normal">
                Dobre seus lucros otimizando sua gestão
              </p>
            </div>
            
            {/* Right column - Video Container */}
            <div className="md:w-1/2 rounded-xl overflow-hidden shadow-xl">
              <video 
                ref={videoRef}
                className="w-full aspect-video object-cover" 
                autoPlay 
                muted 
                loop 
                playsInline 
                poster="/lovable-uploads/d4683fc4-4da4-4f1c-a855-e5aff549e435.png"
              >
                <source src="https://egestor.com.br/assets/img/egestor-gestao-simples-para-crescer.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
            </div>
          </div>
          
          {/* CTA Button - Centered below both columns */}
          <div className="flex justify-center">
            <a href={egestorLink} target="_blank" rel="noopener noreferrer" className="inline-block w-full max-w-xs">
              <button className="w-full py-3 bg-[#7CFFA0] hover:bg-[#6DF090] text-black font-medium rounded-full transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-[1.02]">
                Teste grátis
              </button>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default EgestorERP;

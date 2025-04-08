
import { useEffect, useRef } from 'react';
import AnimatedSection from './AnimatedSection';

const EgestorERP = () => {
  const egestorLink = "https://www.egestor.com.br/afl/8071";
  const imageRef = useRef<HTMLImageElement>(null);

  // Set up proper image loading and error handling
  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.onerror = () => {
        console.error("Failed to load eGestor image");
        // If needed, we could set a fallback image here
      };
    }
  }, []);

  return (
    <section id="egestor" className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        <AnimatedSection animation="fade-in-up" className="mb-10">
          <div className="flex flex-col md:flex-row md:items-center md:gap-10 mb-8">
            {/* Left column - Header Text */}
            <div className="md:w-1/2 text-left mb-6 md:mb-0">
              <a href={egestorLink} target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-90 transition-opacity">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 leading-tight">Sistema de gestão empresarial</h2>
              </a>
              <p className="text-lg text-gray-600">
                Dobre seus lucros otimizando sua gestão
              </p>
            </div>
            
            {/* Right column - Image */}
            <div className="md:w-1/2 rounded-xl overflow-hidden shadow-xl">
              <a href={egestorLink} target="_blank" rel="noopener noreferrer">
                <img 
                  ref={imageRef}
                  src="/lovable-uploads/d4683fc4-4da4-4f1c-a855-e5aff549e435.png" 
                  alt="eGestor - Sistema de gestão empresarial" 
                  className="w-full h-auto object-cover"
                />
              </a>
            </div>
          </div>
          
          {/* CTA Button - Centered */}
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

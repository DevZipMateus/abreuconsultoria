import { ChevronRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const HeroSection = () => {
  return (
    <section 
      id="início" 
      className="relative min-h-screen flex items-start pt-32 md:pt-28 md:items-center bg-gradient-to-r from-gray-50 to-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-primary/5 skew-x-12 transform origin-bottom"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 rounded-full bg-primary/10"></div>
        <div className="absolute bottom-1/3 right-1/3 w-32 h-32 md:w-40 md:h-40 rounded-full bg-secondary/20"></div>
      </div>

      <div className="container mx-auto px-4 z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <AnimatedSection animation="fade-in-up" className="space-y-6">
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Transformando <br />
              <span className="text-primary">números em resultados</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              Oferecemos soluções personalizadas de BPO Financeiro para empresas que buscam se tornar 
              mais sólidas e lucrativas, com foco em resultados concretos e sustentáveis.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#contato" className="btn-primary flex items-center gap-2">
                Solicitar Orçamento
                <ChevronRight className="h-4 w-4" />
              </a>
              <a href="#serviços" className="btn-secondary">
                Conheça Nossos Serviços
              </a>
            </div>

            <div className="pt-8 grid grid-cols-3 gap-2 md:gap-4 w-full max-w-md">
              <div className="text-center bg-white/50 backdrop-blur-sm rounded-lg p-3 shadow-sm">
                <div className="text-xl md:text-3xl font-bold text-primary">+8</div>
                <div className="text-xs md:text-sm text-gray-600">Anos de Experiência</div>
              </div>
              <div className="text-center bg-white/50 backdrop-blur-sm rounded-lg p-3 shadow-sm">
                <div className="text-xl md:text-3xl font-bold text-primary">100%</div>
                <div className="text-xs md:text-sm text-gray-600">Personalizado</div>
              </div>
              <div className="text-center bg-white/50 backdrop-blur-sm rounded-lg p-3 shadow-sm">
                <div className="text-xl md:text-3xl font-bold text-primary">BPO</div>
                <div className="text-xs md:text-sm text-gray-600">Financeiro</div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in" delay={300} className="hidden md:block">
            <div className="relative">
              <div className="absolute -top-12 -left-8 w-64 h-64 bg-primary/10 rounded-full filter blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary/30 rounded-full filter blur-xl"></div>
              <div className="relative z-10 bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl p-1 transform transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl">
                <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80" alt="Gestão Financeira Profissional" className="rounded-2xl w-full h-auto object-cover" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;

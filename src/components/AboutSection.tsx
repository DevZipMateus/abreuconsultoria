
import { CheckCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const AboutSection = () => {
  const features = [
    'Experiência em gestão financeira',
    'Atendimento personalizado',
    'Visão estratégica de negócios',
    'Confidencialidade e segurança',
    'Suporte contínuo',
    'Análise de indicadores financeiros'
  ];

  return (
    <section id="sobre-nós" className="py-24 bg-white">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Sobre Nós</h2>
          <p className="section-subtitle">
            Conheça nossa história e nossa missão de contribuir para uma sociedade mais próspera
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
          <AnimatedSection animation="slide-in-left">
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Maicon Abreu - Fundador" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-full z-0"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full z-0"></div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-up" className="space-y-6">
            <span className="inline-block text-sm font-semibold py-1 px-3 bg-primary/10 text-primary rounded-full">
              Nossa História
            </span>
            <h3 className="text-3xl font-bold">Compromisso com o seu sucesso financeiro</h3>
            <p className="text-gray-600">
              Em 2015, Maicon Abreu, um administrador com vasta experiência em gestão financeira, estratégica e de pessoas, 
              e terapeuta comportamental formado pela Fundação Napoleon Hill dos EUA, fundou nosso escritório de BPO Financeiro.
            </p>
            <p className="text-gray-600">
              Com uma visão clara de contribuir para uma sociedade mais próspera, o escritório se dedica à gestão financeira terceirizada, 
              auxiliando empresas a se tornarem sólidas e lucrativas.
            </p>
            <p className="text-gray-600">
              Acreditamos que a saúde financeira é a base para o sucesso de qualquer negócio. Por isso, oferecemos serviços personalizados 
              que abrangem desde o controle de fluxo de caixa e contas a pagar e receber até a análise de indicadores financeiros e 
              planejamento estratégico.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            
            <a href="#contato" className="btn-primary inline-block mt-4">
              Fale com um especialista
            </a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

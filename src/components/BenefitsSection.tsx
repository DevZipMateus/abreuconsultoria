
import { Check } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const BenefitsSection = () => {
  const benefits = [
    {
      title: 'Redução de Custos',
      description: 'Reduz os custos operacionais relacionados à contratação, treinamento e manutenção de uma equipe interna.'
    },
    {
      title: 'Profissionais Especializados',
      description: 'Contamos com uma equipe qualificada e em constante atualização para oferecer um serviço de alta qualidade.'
    },
    {
      title: 'Otimização dos Processos',
      description: 'Implementação de melhores práticas e uso de tecnologias avançadas, como os sistemas de gestão OMIE, para garantir precisão e eficiência.'
    },
    {
      title: 'Segurança e Confiabilidade',
      description: 'Com a conciliação bancária em tempo real e organização perfeita da documentação financeira, sua empresa ganha em segurança e compliance.'
    },
    {
      title: 'Foco no Core Business',
      description: 'Libere recursos internos para focar em atividades estratégicas e essenciais ao seu negócio.'
    },
    {
      title: 'Tomada de Decisão Assertiva',
      description: 'Relatórios precisos e indicadores financeiros ajudam na tomada de decisões estratégicas.'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Benefícios do BPO Financeiro</h2>
          <p className="section-subtitle">
            Conheça as vantagens de contar com nossa consultoria financeira especializada
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {benefits.map((benefit, index) => (
            <AnimatedSection 
              key={benefit.title} 
              animation="fade-in-up" 
              delay={index * 100}
              className="flex gap-4"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

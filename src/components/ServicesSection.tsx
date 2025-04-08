
import { Calculator, BarChart3, FileText, DollarSign, PieChart, LineChart } from 'lucide-react';
import ServiceCard from './ServiceCard';
import AnimatedSection from './AnimatedSection';

const ServicesSection = () => {
  const services = [
    {
      icon: Calculator,
      title: 'Contas a Pagar e Receber',
      description: 'Gestão eficiente do fluxo financeiro da sua empresa, garantindo o controle preciso de todos os pagamentos e recebimentos.'
    },
    {
      icon: DollarSign,
      title: 'Fluxo de Caixa',
      description: 'Acompanhamento detalhado das entradas e saídas financeiras, com projeções e análises para uma gestão preventiva.'
    },
    {
      icon: BarChart3,
      title: 'Análise de Indicadores',
      description: 'Avaliação dos principais indicadores financeiros do seu negócio, identificando oportunidades de melhoria e otimização.'
    },
    {
      icon: FileText,
      title: 'Relatórios Gerenciais',
      description: 'Elaboração de relatórios personalizados que auxiliam na tomada de decisões estratégicas com base em dados concretos.'
    },
    {
      icon: PieChart,
      title: 'Orçamento Empresarial',
      description: 'Planejamento financeiro estruturado, com definição de metas e acompanhamento de resultados para maior eficiência.'
    },
    {
      icon: LineChart,
      title: 'Planejamento Estratégico',
      description: 'Desenvolvimento de estratégias financeiras alinhadas aos objetivos do seu negócio, visando crescimento sustentável.'
    }
  ];

  return (
    <section id="serviços" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-subtitle">
            Oferecemos soluções completas de BPO Financeiro para atender todas as necessidades da sua empresa
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, index) => (
            <AnimatedSection 
              key={service.title} 
              animation="fade-in-up" 
              delay={index * 100}
            >
              <ServiceCard 
                icon={service.icon} 
                title={service.title} 
                description={service.description} 
              />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-16">
          <a href="#contato" className="btn-primary inline-block">
            Solicite um orçamento
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesSection;

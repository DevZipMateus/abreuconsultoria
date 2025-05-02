
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import AnimatedSection from './AnimatedSection';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const TeamSection = () => {
  const teamMembers: TeamMember[] = [
    { name: 'André Silva', role: 'CEO & Consultor Financeiro', image: '/lovable-uploads/IMG_2096.jpeg' },
    { name: 'Carla Mendes', role: 'Diretora Financeira', image: '/lovable-uploads/IMG_2084.jpeg' },
    { name: 'Ricardo Oliveira', role: 'Consultor Tributário', image: '/lovable-uploads/IMG_2085.jpeg' },
    { name: 'Fernanda Costa', role: 'Analista Financeira', image: '/lovable-uploads/IMG_2083.jpeg' },
    { name: 'Bruno Santos', role: 'Especialista em BPO', image: '/lovable-uploads/IMG_2082.jpeg' },
    { name: 'Tatiana Almeida', role: 'Contadora', image: '/lovable-uploads/IMG_2081.jpeg' },
    { name: 'Paulo Mendonça', role: 'Gestor de Projetos', image: '/lovable-uploads/IMG_1942.jpeg' },
    { name: 'Renata Vieira', role: 'Analista Contábil', image: '/lovable-uploads/IMG_1955.jpeg' },
    { name: 'Marcelo Pereira', role: 'Consultor de Negócios', image: '/lovable-uploads/IMG_2079.jpeg' },
    { name: 'Luciana Martins', role: 'Especialista Fiscal', image: '/lovable-uploads/IMG_1873.jpeg' },
    { name: 'Roberto Dias', role: 'Analista de Processos', image: '/lovable-uploads/IMG_1939.jpeg' },
    { name: 'Amanda Sousa', role: 'Coordenadora Financeira', image: '/lovable-uploads/IMG_1868.jpeg' },
    { name: 'Diego Lima', role: 'Consultor de ERP', image: '/lovable-uploads/IMG_1861.jpeg' },
    { name: 'Juliana Castro', role: 'Analista de Controladoria', image: '/lovable-uploads/IMG_1867.jpeg' },
    { name: 'Gabriel Torres', role: 'Assistente Financeiro', image: '/lovable-uploads/IMG_1866.jpeg' },
  ];

  return (
    <section id="team" className="py-16 bg-gray-50">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Nossa Equipe</h2>
          <p className="section-subtitle">
            Conheça os profissionais dedicados a fazer sua empresa crescer
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-12">
          {teamMembers.map((member, index) => (
            <AnimatedSection 
              key={index} 
              animation="fade-in-up" 
              delay={index * 50}
              className="flex flex-col items-center"
            >
              <Avatar className="w-28 h-28 mb-3 border-2 border-primary shadow-md">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback className="bg-primary text-white text-xl">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <h3 className="font-semibold text-center">{member.name}</h3>
              <p className="text-sm text-gray-600 text-center">{member.role}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

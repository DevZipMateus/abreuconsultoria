
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip';
import AnimatedSection from './AnimatedSection';

interface OfficeImage {
  src: string;
  alt: string;
  description?: string;
}

const TeamSection = () => {
  const officeImages: OfficeImage[] = [
    { 
      src: '/lovable-uploads/IMG_2096.jpeg', 
      alt: 'Sala de reuniões principal',
      description: 'Sala de reuniões com capacidade para 12 pessoas'
    },
    { 
      src: '/lovable-uploads/IMG_2084.jpeg', 
      alt: 'Espaço colaborativo',
      description: 'Área de trabalho colaborativo'
    },
    { 
      src: '/lovable-uploads/IMG_2085.jpeg', 
      alt: 'Recepção',
      description: 'Recepção moderna e acolhedora'
    },
    { 
      src: '/lovable-uploads/IMG_2083.jpeg', 
      alt: 'Escritório executivo',
      description: 'Escritório da diretoria' 
    },
    { 
      src: '/lovable-uploads/IMG_2082.jpeg', 
      alt: 'Área de descompressão',
      description: 'Espaço para relaxamento e descompressão'
    },
    { 
      src: '/lovable-uploads/IMG_2081.jpeg', 
      alt: 'Sala de conferências',
      description: 'Sala equipada para videoconferências'
    },
    { 
      src: '/lovable-uploads/IMG_1942.jpeg', 
      alt: 'Estação de trabalho',
      description: 'Estações de trabalho ergonômicas'
    },
    { 
      src: '/lovable-uploads/IMG_1955.jpeg', 
      alt: 'Copa e cozinha',
      description: 'Espaço para refeições e café'
    },
    { 
      src: '/lovable-uploads/IMG_2079.jpeg', 
      alt: 'Sala de treinamento',
      description: 'Ambiente para treinamentos e workshops'
    },
    { 
      src: '/lovable-uploads/IMG_1873.jpeg', 
      alt: 'Fachada do prédio',
      description: 'Fachada moderna do nosso escritório'
    },
    { 
      src: '/lovable-uploads/IMG_1861.jpeg', 
      alt: 'Área de inovação',
      description: 'Espaço dedicado à inovação e criatividade'
    },
    { 
      src: '/lovable-uploads/IMG_1866.jpeg', 
      alt: 'Sala de projetos',
      description: 'Ambiente para desenvolvimento de projetos'
    },
    { 
      src: '/lovable-uploads/IMG_1867.jpeg', 
      alt: 'Estação de design',
      description: 'Área dedicada ao design e criação'
    },
    { 
      src: '/lovable-uploads/IMG_1868.jpeg', 
      alt: 'Laboratório tecnológico',
      description: 'Espaço para testes e desenvolvimento tecnológico'
    },
    { 
      src: '/lovable-uploads/IMG_1939.jpeg', 
      alt: 'Sala de reuniões secundária',
      description: 'Sala para reuniões menores e brainstorming'
    },
  ];

  return (
    <section id="team" className="py-16 bg-gray-50">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Nosso Escritório</h2>
          <p className="section-subtitle">
            Conheça os ambientes onde transformamos ideias em soluções financeiras
          </p>
        </AnimatedSection>

        <div className="mt-12">
          {/* Layout para telas grandes */}
          <div className="hidden lg:grid grid-cols-3 gap-6">
            {officeImages.map((image, index) => (
              <AnimatedSection 
                key={index} 
                animation={index % 2 === 0 ? "fade-in-up" : "fade-in"} 
                delay={index * 100}
                className="aspect-square relative group overflow-hidden rounded-lg"
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="w-full h-full relative overflow-hidden rounded-lg">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <p className="text-white font-medium">{image.description}</p>
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="bg-primary text-white">
                    <p>{image.alt}</p>
                  </TooltipContent>
                </Tooltip>
              </AnimatedSection>
            ))}
          </div>
          
          {/* Carrossel para telas menores */}
          <div className="lg:hidden">
            <Carousel className="w-full">
              <CarouselContent>
                {officeImages.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="border-none">
                      <CardContent className="p-1">
                        <div className="aspect-square relative overflow-hidden rounded-lg">
                          <img 
                            src={image.src} 
                            alt={image.alt}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                            <p className="text-white font-medium text-sm">{image.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-4">
                <CarouselPrevious className="relative static left-0 translate-y-0 mr-2" />
                <CarouselNext className="relative static right-0 translate-y-0 ml-2" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

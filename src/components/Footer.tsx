import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Abreu Consultoria</h3>
            <div className="flex items-center mb-4">
              <img src="/lovable-uploads/fe175ac7-bb16-4af1-b64d-7f593ae76356.png" alt="Abreu Consultoria e BPO Financeiro" className="h-10 mr-2" />
            </div>
            <p className="text-gray-400 mb-6">
              Transformando números em resultados. Soluções financeiras completas para empresas que buscam solidez e lucratividade.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/abreuconsultori_/" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Serviços</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#serviços" className="hover:text-white transition-colors">Contas a Pagar e Receber</a></li>
              <li><a href="#serviços" className="hover:text-white transition-colors">Fluxo de Caixa</a></li>
              <li><a href="#serviços" className="hover:text-white transition-colors">Análise de Indicadores</a></li>
              <li><a href="#serviços" className="hover:text-white transition-colors">Relatórios Gerenciais</a></li>
              <li><a href="#serviços" className="hover:text-white transition-colors">Orçamento Empresarial</a></li>
              <li><a href="#serviços" className="hover:text-white transition-colors">Planejamento Estratégico</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Links Úteis</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#início" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#sobre-nós" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#serviços" className="hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <div className="w-5 h-5 mt-1 mr-3 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-3 w-3" />
                </div>
                <div>
                  <p>(51) 99960-5448</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 mt-1 mr-3 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-3 w-3" />
                </div>
                <div>
                  <p>abreuconsultoriaempresarial@gmail.com</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 mt-1 mr-3 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-3 w-3" />
                </div>
                <div>
                  <p>Rua João Mosmann, 492, sala 7</p>
                  <p>segundo andar – Centro, Parobé/RS</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-gray-400 text-sm text-center">
          <p>&copy; {currentYear} Abreu Consultoria e BPO Financeiro. Todos os direitos reservados.</p>
          
        </div>
      </div>
    </footer>;
};
export default Footer;
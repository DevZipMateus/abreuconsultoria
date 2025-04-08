
import { Phone } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = "5551999605448"; // Formato internacional sem caracteres especiais
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="Contato via WhatsApp"
    >
      <Phone className="h-6 w-6 text-white" />
    </a>
  );
};

export default WhatsAppButton;

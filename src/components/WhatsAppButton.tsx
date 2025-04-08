
const WhatsAppButton = () => {
  const phoneNumber = "5551999605448"; // Formato internacional sem caracteres especiais
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="Contato via WhatsApp"
    >
      <img 
        src="/lovable-uploads/e11dee01-8f89-44e0-8885-57a14b31b73c.png" 
        alt="WhatsApp" 
        className="w-14 h-14"
      />
    </a>
  );
};

export default WhatsAppButton;

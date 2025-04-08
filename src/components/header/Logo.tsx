
import { cn } from "@/lib/utils";

interface LogoProps {
  scrolled: boolean;
}

const Logo = ({ scrolled }: LogoProps) => {
  return (
    <a href="#" className="flex items-center z-10 relative">
      <img 
        src="/lovable-uploads/fe175ac7-bb16-4af1-b64d-7f593ae76356.png" 
        alt="Abreu Consultoria e BPO Financeiro" 
        className={cn(
          "h-10 mr-3 transition-all duration-300",
          scrolled ? "opacity-100" : "opacity-100",
          "hover:scale-105"
        )}
      />
      <div
        className={cn(
          "text-xl font-bold transition-all duration-300",
          scrolled ? "text-white" : "text-white",
        )}
      >
        Abreu Consultoria
      </div>
    </a>
  );
};

export default Logo;

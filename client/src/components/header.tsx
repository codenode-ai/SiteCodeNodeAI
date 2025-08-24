import { useState } from "react";
import { Code, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 glass border-b border-gray-800/50" data-testid="header">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2" data-testid="logo">
            <div className="w-10 h-10 bg-gradient-to-r from-tech-blue to-tech-purple rounded-lg flex items-center justify-center">
              <Code className="text-white text-lg" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent">
              CodeNode.AI
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('sobre')}
              className="hover:text-tech-blue transition-colors duration-300"
              data-testid="nav-sobre"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('como-funciona')}
              className="hover:text-tech-blue transition-colors duration-300"
              data-testid="nav-como-funciona"
            >
              Como Funciona
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="hover:text-tech-blue transition-colors duration-300"
              data-testid="nav-faq"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="hover:text-tech-blue transition-colors duration-300"
              data-testid="nav-contato"
            >
              Contato
            </button>
            
            <Button 
              onClick={() => window.open('https://wa.me/554891974158', '_blank')}
              className="bg-gradient-to-r from-tech-blue to-tech-purple px-6 py-2 rounded-full hover:shadow-lg hover:shadow-tech-blue/25 transition-all duration-300"
              data-testid="button-contact"
            >
              Entre em contato
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-800/50" data-testid="mobile-menu">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-left hover:text-tech-blue transition-colors duration-300"
                data-testid="mobile-nav-sobre"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('como-funciona')}
                className="text-left hover:text-tech-blue transition-colors duration-300"
                data-testid="mobile-nav-como-funciona"
              >
                Como Funciona
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-left hover:text-tech-blue transition-colors duration-300"
                data-testid="mobile-nav-faq"
              >
                FAQ
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-left hover:text-tech-blue transition-colors duration-300"
                data-testid="mobile-nav-contato"
              >
                Contato
              </button>
              <Button 
                onClick={() => window.open('https://wa.me/554891974158', '_blank')}
                className="bg-gradient-to-r from-tech-blue to-tech-purple px-6 py-2 rounded-full hover:shadow-lg hover:shadow-tech-blue/25 transition-all duration-300 w-fit"
                data-testid="mobile-button-contact"
              >
                Entre em contato
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

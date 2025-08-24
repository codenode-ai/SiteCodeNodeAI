import { Code, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-12 bg-dark-secondary border-t border-gray-800" data-testid="footer">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Logo and Tagline */}
            <div className="mb-8 md:mb-0" data-testid="footer-logo">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-tech-blue to-tech-purple rounded-lg flex items-center justify-center">
                  <Code className="text-white text-lg" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent">
                  CodeNode.AI
                </span>
              </div>
              <p className="text-muted-gray italic max-w-md" data-testid="footer-tagline">
                "Sistemas que simplificam processos e potencializam resultados."
              </p>
            </div>
            
            {/* Footer Links */}
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex space-x-6 mb-4 md:mb-0" data-testid="footer-nav">
                <button 
                  onClick={() => scrollToSection('sobre')}
                  className="text-muted-gray hover:text-tech-blue transition-colors"
                  data-testid="footer-nav-sobre"
                >
                  Sobre
                </button>
                <button 
                  onClick={() => scrollToSection('como-funciona')}
                  className="text-muted-gray hover:text-tech-blue transition-colors"
                  data-testid="footer-nav-como-funciona"
                >
                  Como Funciona
                </button>
                <button 
                  onClick={() => scrollToSection('faq')}
                  className="text-muted-gray hover:text-tech-blue transition-colors"
                  data-testid="footer-nav-faq"
                >
                  FAQ
                </button>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="text-muted-gray hover:text-tech-blue transition-colors"
                  data-testid="footer-nav-contato"
                >
                  Contato
                </button>
              </div>
              
              <div className="flex space-x-4" data-testid="footer-social">
                <a 
                  href="https://instagram.com/codenode.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-dark-tertiary rounded-lg flex items-center justify-center hover:bg-tech-blue/20 transition-colors"
                  data-testid="social-instagram"
                >
                  <Instagram className="text-tech-purple" />
                </a>
                <a 
                  href="https://linkedin.com/company/codenode-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-dark-tertiary rounded-lg flex items-center justify-center hover:bg-tech-blue/20 transition-colors"
                  data-testid="social-linkedin"
                >
                  <Linkedin className="text-tech-blue" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-muted-gray" data-testid="footer-copyright">
              &copy; 2024 CodeNode.AI. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function CTASection() {
  const [ref, isVisible] = useIntersectionObserver();

  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="cta" className="py-20 bg-gradient-to-b from-dark-secondary to-dark-primary relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-r from-tech-blue/10 to-tech-purple/10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            data-testid="cta-title"
          >
            <span className="bg-gradient-to-r from-white to-tech-blue bg-clip-text text-transparent">
              Reduza custos e aumente a eficiência do seu negócio
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-gray mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            data-testid="cta-description"
          >
            Entre em contato com a CodeNode e descubra como um sistema personalizado pode transformar seus processos.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button 
              onClick={() => window.open('https://wa.me/554891974158', '_blank')}
              className="bg-gradient-to-r from-tech-blue to-tech-purple px-10 py-4 rounded-full text-xl font-semibold hover:shadow-2xl hover:shadow-tech-blue/30 transition-all duration-300 transform hover:scale-105 animate-glow"
              data-testid="button-cta-contact"
            >
              <ArrowRight className="mr-3" />
              Entre em contato
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

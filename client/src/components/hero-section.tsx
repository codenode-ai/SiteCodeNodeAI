import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const scrollToMethodology = () => {
    const element = document.getElementById('como-funciona');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Abstract tech background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-primary via-dark-secondary to-dark-tertiary"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-tech-blue/10 via-tech-purple/10 to-tech-green/10"></div>
      
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-20 left-10 w-20 h-20 bg-tech-blue/20 rounded-full blur-xl"
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-32 h-32 bg-tech-purple/20 rounded-full blur-2xl"
        animate={{ y: [20, -20, 20] }}
        transition={{ duration: 6, repeat: Infinity, delay: -2 }}
      />
      <motion.div 
        className="absolute top-1/2 right-1/4 w-16 h-16 bg-tech-green/20 rounded-full blur-lg"
        animate={{ y: [-15, 15, -15] }}
        transition={{ duration: 6, repeat: Infinity, delay: -4 }}
      />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            data-testid="hero-title"
          >
            <span className="bg-gradient-to-r from-white via-tech-blue to-tech-purple bg-clip-text text-transparent">
              Sistemas de automação e inteligência
            </span>
            <br />
            <span className="text-white">para pequenas e médias empresas.</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-gray mb-10 max-w-3xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            data-testid="hero-subtitle"
          >
            A CodeNode desenvolve sistemas sob medida para PMEs, com ou sem Inteligência Artificial embarcada, sempre com foco em reduzir custos de processos manuais e ineficientes, aumentando a eficiência e os resultados do negócio.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button 
              onClick={scrollToMethodology}
              className="bg-gradient-to-r from-tech-blue to-tech-purple px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-tech-blue/30 transition-all duration-300 transform hover:scale-105 animate-glow"
              data-testid="button-methodology"
            >
              <ArrowRight className="mr-2" />
              Quero conhecer a metodologia
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

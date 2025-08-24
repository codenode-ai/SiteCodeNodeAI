import { motion } from "framer-motion";
import { Settings, Rocket, Target } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function AboutSection() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-dark-primary to-dark-secondary" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            data-testid="about-title"
          >
            <span className="bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent">
              Sobre a CodeNode
            </span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-lg text-muted-gray leading-relaxed" data-testid="about-text-1">
                Na CodeNode acreditamos que toda empresa pode crescer mais quando elimina processos manuais e ineficientes. Nossa missão é automatizar tarefas repetitivas e implementar sistemas inteligentes que reduzam custos e aumentem a produtividade das pequenas e médias empresas.
              </p>
            </motion.div>
            
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="glass p-6 rounded-2xl glow-hover transition-all duration-500" data-testid="feature-personalization">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-tech-blue/20 rounded-xl flex items-center justify-center">
                    <Settings className="text-tech-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Personalização</h3>
                    <p className="text-muted-gray">Cada sistema é desenvolvido sob medida.</p>
                  </div>
                </div>
              </div>
              
              <div className="glass p-6 rounded-2xl glow-hover transition-all duration-500" data-testid="feature-accessible-tech">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-tech-green/20 rounded-xl flex items-center justify-center">
                    <Rocket className="text-tech-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Redução de custos</h3>
                    <p className="text-muted-gray">Eliminamos desperdícios causados por processos manuais.</p>
                  </div>
                </div>
              </div>
              
              <div className="glass p-6 rounded-2xl glow-hover transition-all duration-500" data-testid="feature-results-focus">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-tech-purple/20 rounded-xl flex items-center justify-center">
                    <Target className="text-tech-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Foco em eficiência</h3>
                    <p className="text-muted-gray">Sistemas claros, simples e que realmente funcionam.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

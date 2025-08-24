import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function HowItWorksSection() {
  const [ref, isVisible] = useIntersectionObserver();

  const steps = [
    {
      number: "1",
      title: "Entendimento do negócio",
      description: "Mapeamos os processos atuais da empresa e identificamos gargalos.",
      color: "from-tech-blue to-tech-purple"
    },
    {
      number: "2", 
      title: "Análise personalizada",
      description: "Avaliamos como sistemas e automação podem reduzir custos e otimizar resultados.",
      color: "from-tech-green to-tech-blue"
    },
    {
      number: "3",
      title: "Implementação sob medida", 
      description: "Desenvolvemos o sistema ideal para sua empresa e oferecemos suporte contínuo.",
      color: "from-tech-purple to-tech-green"
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-dark-secondary" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            data-testid="how-it-works-title"
          >
            <span className="bg-gradient-to-r from-tech-green to-tech-blue bg-clip-text text-transparent">
              Como Funciona
            </span>
            <br />
            <span className="text-2xl font-normal text-muted-gray">Metodologia CodeNode</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div 
                key={step.number}
                className="text-center group h-full"
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                data-testid={`step-${step.number}`}
              >
                <div className="glass p-8 rounded-3xl mb-6 group-hover:shadow-2xl group-hover:shadow-tech-blue/20 transition-all duration-500 h-full flex flex-col justify-between min-h-[400px]">
                  <div>
                    <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-3xl font-bold">{step.number}</span>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                  </div>
                  <p className="text-muted-gray leading-relaxed flex-grow flex items-center justify-center">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

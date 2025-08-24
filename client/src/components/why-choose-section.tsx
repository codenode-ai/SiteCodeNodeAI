import { motion } from "framer-motion";
import { Building, Puzzle, TrendingUp, ArrowUpRight } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function WhyChooseSection() {
  const [ref, isVisible] = useIntersectionObserver();

  const features = [
    {
      icon: Building,
      title: "Feito para PMEs",
      description: "Entendemos suas prioridades e seu ritmo.",
      color: "bg-tech-blue/20",
      iconColor: "text-tech-blue"
    },
    {
      icon: Puzzle,
      title: "Soluções sob medida",
      description: "Não vendemos pacotes genéricos, mas sistemas adaptados à sua realidade.",
      color: "bg-tech-green/20",
      iconColor: "text-tech-green"
    },
    {
      icon: TrendingUp,
      title: "Resultados práticos",
      description: "O objetivo é otimizar processos e reduzir desperdícios.",
      color: "bg-tech-purple/20",
      iconColor: "text-tech-purple"
    },
    {
      icon: ArrowUpRight,
      title: "Escalabilidade",
      description: "Começamos simples e crescemos junto com o seu negócio.",
      color: "bg-gradient-to-r from-tech-blue to-tech-purple/20",
      iconColor: "text-white"
    }
  ];

  return (
    <section id="por-que-escolher" className="py-20 bg-gradient-to-b from-dark-secondary to-dark-tertiary" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            data-testid="why-choose-title"
          >
            <span className="bg-gradient-to-r from-tech-purple to-tech-green bg-clip-text text-transparent">
              Por que escolher a CodeNode?
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-gray text-center mb-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            data-testid="why-choose-description"
          >
            Sabemos que pequenas e médias empresas enfrentam desafios diferentes das grandes corporações. É por isso que a CodeNode foi criada: para ser parceira estratégica no uso da tecnologia de forma prática e personalizada.
          </motion.p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.title}
                className="glass p-6 rounded-2xl text-center glow-hover transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                data-testid={`feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <feature.icon className={`${feature.iconColor} text-2xl`} />
                </div>
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-gray text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

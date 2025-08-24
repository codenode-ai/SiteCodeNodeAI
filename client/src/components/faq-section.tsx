import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function FAQSection() {
  const [ref, isVisible] = useIntersectionObserver();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "Preciso ter conhecimento técnico para usar um sistema da CodeNode?",
      answer: "Não. Nossos sistemas são desenvolvidos para serem simples, claros e fáceis de usar no dia a dia."
    },
    {
      question: "Quanto tempo leva para implementar um sistema?",
      answer: "Depende da complexidade do projeto, mas sempre buscamos entregas rápidas e funcionais desde as primeiras etapas."
    },
    {
      question: "E se eu não precisar de IA agora?",
      answer: "Sem problema. Podemos desenvolver sistemas apenas de automação. A IA só entra quando faz sentido para o seu negócio."
    },
    {
      question: "Posso evoluir o sistema no futuro?",
      answer: "Sim. Nossos sistemas são pensados para crescer junto com sua empresa."
    },
    {
      question: "Quem mantém o sistema funcionando?",
      answer: "Nós oferecemos suporte e manutenção contínua para que tudo funcione de forma estável e segura."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-dark-secondary" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            data-testid="faq-title"
          >
            <span className="bg-gradient-to-r from-tech-blue to-tech-green bg-clip-text text-transparent">
              FAQ
            </span>
            <br />
            <span className="text-xl font-normal text-muted-gray">Perguntas Frequentes</span>
          </motion.h2>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                className="glass rounded-2xl overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                data-testid={`faq-${index}`}
              >
                <button 
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                  onClick={() => toggleFAQ(index)}
                  data-testid={`faq-button-${index}`}
                >
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <ChevronDown 
                    className={`transition-transform duration-300 ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFAQ === index && (
                  <motion.div 
                    className="p-6 pt-0 border-t border-gray-800"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    data-testid={`faq-answer-${index}`}
                  >
                    <p className="text-muted-gray">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

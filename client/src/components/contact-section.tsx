import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Mail, MessageSquare, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

export default function ContactSection() {
  const [ref, isVisible] = useIntersectionObserver();
  const { toast } = useToast();

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contacts", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Mensagem enviada!",
        description: data.message,
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente em alguns instantes.",
        variant: "destructive",
      });
      console.error("Contact form error:", error);
    },
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@codenode.com.br",
      color: "bg-tech-blue/20",
      iconColor: "text-tech-blue",
      link: "mailto:contato@codenode.com.br"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      content: "+55 (48) 9 XXXX-XXXX",
      color: "bg-tech-green/20",
      iconColor: "text-tech-green",
      link: "https://wa.me/5548999999999"
    },
    {
      icon: Instagram,
      title: "Instagram",
      content: "@codenode.ai",
      color: "bg-tech-purple/20",
      iconColor: "text-tech-purple",
      link: "https://instagram.com/codenode.ai"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      content: "CodeNode.AI",
      color: "bg-tech-blue/20",
      iconColor: "text-tech-blue",
      link: "https://linkedin.com/company/codenode-ai"
    }
  ];

  return (
    <section id="contato" className="py-20 bg-dark-primary" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            data-testid="contact-title"
          >
            <span className="bg-gradient-to-r from-tech-green to-tech-blue bg-clip-text text-transparent">
              Entre em Contato
            </span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div 
              className="glass p-8 rounded-3xl"
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              data-testid="contact-form-container"
            >
              <h3 className="text-2xl font-semibold mb-6">Vamos conversar sobre seu projeto</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="contact-form">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome completo</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="bg-dark-tertiary border border-gray-700 rounded-xl focus:border-tech-blue"
                            data-testid="input-name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-mail</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="email"
                            className="bg-dark-tertiary border border-gray-700 rounded-xl focus:border-tech-blue"
                            data-testid="input-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Empresa</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="bg-dark-tertiary border border-gray-700 rounded-xl focus:border-tech-blue"
                            data-testid="input-company"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensagem</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            rows={4}
                            className="bg-dark-tertiary border border-gray-700 rounded-xl focus:border-tech-blue resize-none"
                            data-testid="textarea-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-tech-blue to-tech-purple py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-tech-blue/25 transition-all duration-300"
                    disabled={contactMutation.isPending}
                    data-testid="button-submit-contact"
                  >
                    {contactMutation.isPending ? "Enviando..." : "Enviar mensagem"}
                  </Button>
                </form>
              </Form>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div>
                <h3 className="text-2xl font-semibold mb-6">Outras formas de contato</h3>
              </div>
              
              {contactInfo.map((contact, index) => (
                <a
                  key={contact.title}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass p-6 rounded-2xl flex items-center space-x-4 glow-hover transition-all duration-500 block"
                  data-testid={`contact-${contact.title.toLowerCase()}`}
                >
                  <div className={`w-12 h-12 ${contact.color} rounded-xl flex items-center justify-center`}>
                    <contact.icon className={contact.iconColor} />
                  </div>
                  <div>
                    <h4 className="font-semibold">{contact.title}</h4>
                    <p className="text-muted-gray">{contact.content}</p>
                  </div>
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

import banner from "@/assets/happy-nation-banner.png";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Full-width banner background */}
      <div className="relative w-full min-h-[60vh] md:min-h-[80vh] flex items-center justify-center">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={banner}
            alt="Happy Nation Store - Acessórios Mobile e Tecnologia"
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>

        {/* Content overlay */}
        <div className="relative z-10 container mx-auto px-4 pt-20 pb-12 flex flex-col items-center text-center gap-6 mt-auto">
          <div className="max-w-2xl space-y-4 animate-fade-in-up">
            <p className="text-lg md:text-xl text-foreground/80 font-medium">
              Acessórios Mobile • Gestão de Tráfego Pago • Desenvolvimento de Mini Sites
            </p>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Os melhores acessórios para seu dispositivo, com preços que cabem no seu bolso.
              Pagamento rápido via PIX com desconto exclusivo!
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Button variant="neon" size="lg" asChild>
              <a href="#produtos">Ver Produtos</a>
            </Button>
            <Button variant="outline" size="lg" className="border-neon-blue/30 text-foreground hover:bg-neon-blue/10" asChild>
              <a href="https://wa.me/5585991778762" target="_blank" rel="noopener noreferrer">
                Fale Conosco
              </a>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-6 justify-center text-sm text-muted-foreground mt-2">
            <span className="flex items-center gap-2">✅ Envio Rápido</span>
            <span className="flex items-center gap-2">🔒 Pagamento Seguro via PIX</span>
            <span className="flex items-center gap-2">⭐ +500 Clientes Satisfeitos</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

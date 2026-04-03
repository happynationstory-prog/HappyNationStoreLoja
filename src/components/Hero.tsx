import banner from "@/assets/happy-nation-banner.png";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 py-10 md:py-16">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Banner image - large and prominent */}
          <div className="animate-fade-in-up w-full max-w-4xl mx-auto">
            <img
              src={banner}
              alt="Happy Nation Store - Acessórios Mobile e Tecnologia"
              className="w-full h-auto"
            />
          </div>

          {/* Subtitle and description */}
          <div className="max-w-2xl space-y-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <p className="text-lg md:text-xl text-muted-foreground">
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

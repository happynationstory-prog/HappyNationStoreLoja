import logo from "@/assets/logo-happy-nation.png";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(220_90%_56%_/_0.12)_0%,_transparent_70%)]" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-neon-purple/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-neon-blue/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center gap-8">
          <div className="animate-float">
            <img
              src={logo}
              alt="Happy Nation Store"
              width={340}
              height={340}
              className="w-[280px] h-[280px] md:w-[340px] md:h-[340px] rounded-2xl shadow-neon object-contain"
            />
          </div>

          <div className="max-w-2xl space-y-4 animate-fade-in-up">
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black gradient-neon-text leading-tight tracking-tight">
              HAPPY NATION
            </h1>
            <p className="font-heading text-xl md:text-3xl font-bold text-foreground tracking-[0.3em] uppercase">
              STORE
            </p>
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
          <div className="flex flex-wrap gap-6 justify-center text-sm text-muted-foreground mt-4">
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

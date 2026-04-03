import logo from "@/assets/logo-happy-nation.png";

const Footer = () => {
  return (
    <footer id="contato" className="border-t border-border bg-card/50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Happy Nation Store" className="h-12 w-12 rounded-full" />
            <div>
              <span className="font-heading text-lg font-bold gradient-neon-text">HAPPY NATION STORE</span>
              <p className="text-xs text-muted-foreground">Acessórios Mobile Premium</p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-3">
            <a
              href="https://wa.me/+5585991778762?text=Ol%C3%A1%2C%20eu%20quero%20saber%20de%20uma%20informa%C3%A7%C3%A3o%20de%20um%20produto"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              📱 WhatsApp: (85) 99177-8762
            </a>
            <a
              href="https://www.instagram.com/happynationstory/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              📸 Instagram: @happynationstory
            </a>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Happy Nation Store. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

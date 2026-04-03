import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import logo from "@/assets/logo-happy-nation.png";
import { useState } from "react";

const Header = () => {
  const { totalItems, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Happy Nation Store" className="h-10 w-10 rounded-full" />
          <span className="font-heading text-lg font-bold gradient-neon-text hidden sm:block">
            HAPPY NATION
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#produtos" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Produtos</a>
          <a href="#categorias" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Categorias</a>
          <a href="#sobre" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Sobre</a>
          <a href="#contato" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Contato</a>
          <a href="https://www.instagram.com/happynationstory/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">@happynationstory</a>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Abrir carrinho"
          >
            <ShoppingCart className="h-5 w-5 text-foreground" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full gradient-neon text-[10px] font-bold text-primary-foreground">
                {totalItems}
              </span>
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-muted transition-colors md:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <nav className="flex flex-col p-4 gap-3">
            <a href="#produtos" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-muted-foreground hover:text-foreground py-2">Produtos</a>
            <a href="#categorias" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-muted-foreground hover:text-foreground py-2">Categorias</a>
            <a href="#sobre" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-muted-foreground hover:text-foreground py-2">Sobre</a>
            <a href="#contato" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-muted-foreground hover:text-foreground py-2">Contato</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

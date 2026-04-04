import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <h1 className="font-heading text-8xl font-bold gradient-neon-text mb-4">404</h1>
      <p className="font-heading text-2xl text-foreground mb-2">Página não encontrada</p>
      <p className="text-muted-foreground mb-8 max-w-md">
        A página que você está procurando não existe ou foi movida.
      </p>
      <Link to="/">
        <Button variant="neon" size="lg" className="gap-2">
          <Home className="w-5 h-5" />
          Voltar para a Loja
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;

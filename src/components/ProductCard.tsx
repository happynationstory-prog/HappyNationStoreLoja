import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart, type Product } from "@/contexts/CartContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <div className="group relative rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:shadow-neon-sm hover:border-neon-blue/30">
      {product.badge && (
        <span className="absolute top-3 left-3 z-10 rounded-md gradient-neon px-2.5 py-1 text-xs font-bold text-primary-foreground">
          {product.badge}
        </span>
      )}

      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={512}
          height={512}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-4 space-y-3">
        <span className="text-xs font-medium text-neon-cyan uppercase tracking-wider">
          {product.category}
        </span>
        <h3 className="font-heading text-sm font-semibold text-foreground leading-tight">
          {product.name}
        </h3>
        <p className="text-xs text-muted-foreground line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-foreground">
            R$ {product.price.toFixed(2).replace('.', ',')}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              R$ {product.originalPrice.toFixed(2).replace('.', ',')}
            </span>
          )}
        </div>

        <span className="block text-xs text-neon-cyan">
          🏷️ -10% no PIX: R$ {(product.price * 0.9).toFixed(2).replace('.', ',')}
        </span>

        <Button
          variant="neon"
          className="w-full gap-2"
          onClick={() => addToCart(product)}
        >
          <ShoppingCart className="h-4 w-4" />
          Adicionar ao Carrinho
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;

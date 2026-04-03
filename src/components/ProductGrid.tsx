import { useState, useMemo } from "react";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";

const categories = ["Todos", ...Array.from(new Set(products.map(p => p.category)))];

const ProductGrid = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered = useMemo(
    () => activeCategory === "Todos" ? products : products.filter(p => p.category === activeCategory),
    [activeCategory]
  );

  return (
    <section id="produtos" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-bold gradient-neon-text mb-3">
            NOSSOS PRODUTOS
          </h2>
          <p className="text-muted-foreground">
            Acessórios premium com os melhores preços do mercado
          </p>
        </div>

        {/* Category filters */}
        <div id="categorias" className="flex flex-wrap justify-center gap-2 mb-10 scroll-mt-20">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "gradient-neon text-primary-foreground shadow-neon-sm"
                  : "border border-border bg-muted/40 text-muted-foreground hover:border-neon-blue/40 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-12">
            Nenhum produto encontrado nesta categoria.
          </p>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;

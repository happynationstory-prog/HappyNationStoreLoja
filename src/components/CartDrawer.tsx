import { X, Plus, Minus, Trash2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";

const CartDrawer = () => {
  const { items, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
  const [customerName, setCustomerName] = useState("");

  const handleCheckout = () => {
    const phone = "5585991778762";
    const nameLine = customerName ? `\n👤 Nome: ${customerName}` : "";

    const message = `Olá, quero fazer um pedido:\n\n🛒 Produtos:\n${items
      .map(item => `- ${item.name} (Qtd: ${item.quantity}) — R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}`)
      .join("\n")}\n\n💰 Total: R$ ${totalPrice.toFixed(2).replace('.', ',')}
💰 Total no PIX (-10%): R$ ${(totalPrice * 0.9).toFixed(2).replace('.', ',')}${nameLine}\n\n📍 Retirada no local\n\nPode me enviar a chave PIX para pagamento?`;

    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(url, "_blank");
  };

  if (!isCartOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 bg-background/60 backdrop-blur-sm" onClick={() => setIsCartOpen(false)} />
      <div className="fixed right-0 top-0 z-50 h-full w-full max-w-md border-l border-border bg-card shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border p-4">
          <h2 className="font-heading text-lg font-bold text-foreground">Carrinho</h2>
          <button onClick={() => setIsCartOpen(false)} className="p-1 rounded hover:bg-muted transition-colors">
            <X className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-muted-foreground mb-2">Seu carrinho está vazio</p>
              <p className="text-sm text-muted-foreground">Adicione produtos para continuar</p>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} className="flex gap-3 rounded-lg border border-border bg-muted/30 p-3">
                <img src={item.image} alt={item.name} className="h-16 w-16 rounded-md object-cover" />
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-foreground truncate">{item.name}</h4>
                  <p className="text-sm text-neon-cyan font-medium">
                    R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 rounded bg-muted hover:bg-border transition-colors">
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 rounded bg-muted hover:bg-border transition-colors">
                      <Plus className="h-3 w-3" />
                    </button>
                    <button onClick={() => removeFromCart(item.id)} className="p-1 rounded text-destructive hover:bg-destructive/10 transition-colors ml-auto">
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Checkout */}
        {items.length > 0 && (
          <div className="border-t border-border p-4 space-y-3">
            <input
              type="text"
              placeholder="Seu nome (opcional)"
              value={customerName}
              onChange={e => setCustomerName(e.target.value)}
              className="w-full rounded-lg border border-border bg-muted/50 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
            />
            <p className="text-xs text-muted-foreground text-center">📍 Somente retirada no local</p>

            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="text-foreground">R$ {totalPrice.toFixed(2).replace('.', ',')}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-neon-cyan">Desconto PIX (-10%)</span>
                <span className="text-neon-cyan font-semibold">R$ {(totalPrice * 0.9).toFixed(2).replace('.', ',')}</span>
              </div>
            </div>

            <Button variant="whatsapp" size="lg" className="w-full gap-2 text-base" onClick={handleCheckout}>
              <MessageCircle className="h-5 w-5" />
              Finalizar via WhatsApp
            </Button>

            <button
              onClick={clearCart}
              className="w-full text-center text-xs text-muted-foreground hover:text-destructive transition-colors"
            >
              Limpar carrinho
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;

import type { Product } from "@/contexts/CartContext";
import productHeadphone from "@/assets/product-headphone.jpg";
import productEarbuds from "@/assets/product-earbuds.jpg";
import productCase from "@/assets/product-case.jpg";
import productCable from "@/assets/product-cable.jpg";
import productPowerbank from "@/assets/product-powerbank.jpg";
import productCharger from "@/assets/product-charger.jpg";

export const products: Product[] = [
  {
    id: "1",
    name: "Headphone Bluetooth Pro",
    price: 149.90,
    originalPrice: 199.90,
    image: productHeadphone,
    category: "Áudio",
    description: "Som cristalino com cancelamento de ruído ativo. Bateria de 30h.",
    badge: "-25%",
  },
  {
    id: "2",
    name: "Earbuds Wireless Elite",
    price: 89.90,
    originalPrice: 129.90,
    image: productEarbuds,
    category: "Áudio",
    description: "Earbuds com graves profundos e conexão Bluetooth 5.3.",
    badge: "Mais Vendido",
  },
  {
    id: "3",
    name: "Capinha Premium Shield",
    price: 39.90,
    image: productCase,
    category: "Capinhas",
    description: "Proteção militar com design transparente e bordas reforçadas.",
  },
  {
    id: "4",
    name: "Cabo USB-C Turbo 2m",
    price: 29.90,
    originalPrice: 49.90,
    image: productCable,
    category: "Cabos",
    description: "Carregamento turbo 65W com revestimento em nylon trançado.",
    badge: "-40%",
  },
  {
    id: "5",
    name: "Power Bank 20.000mAh",
    price: 119.90,
    originalPrice: 159.90,
    image: productPowerbank,
    category: "Carregadores",
    description: "Carregue 4 dispositivos simultaneamente. Display LED digital.",
    badge: "Novo",
  },
  {
    id: "6",
    name: "Carregador Wireless Qi",
    price: 69.90,
    image: productCharger,
    category: "Carregadores",
    description: "Carregamento sem fio rápido 15W. Design ultra-slim com LED.",
  },
];

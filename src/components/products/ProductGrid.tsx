import { type Product } from "@/types/types";
import { ProductCard } from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  onProductClick: (productId: string) => void;
}

export function ProductGrid({ products, onProductClick }: ProductGridProps) {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Våra bästa erbjudanden</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="h-full">
              <ProductCard product={product} onClickCta={onProductClick} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

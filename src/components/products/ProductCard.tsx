import { type Product, colorSchemes } from "@/types/types";
import { PriceTag } from "./PriceTag";
import { CardButton } from "./CardButton";

interface ProductCardProps {
  product: Product;
  onClickCta: (productId: string) => void;
}

export function ProductCard({ product, onClickCta }: ProductCardProps) {
  const colorScheme = colorSchemes[product.colorScheme];

  return (
    <article
      className="bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 
      hover:scale-105 focus-within:ring-2 focus-within:ring-offset-2 h-full flex flex-col"
    >
      <div style={{ backgroundColor: colorScheme.bg }} className="h-2" aria-hidden="true" />
      <div className="p-6 flex flex-col flex-grow">
        <header>
          <h3 className="text-2xl font-bold text-gray-900">{product.title}</h3>
        </header>
        <p className="text-gray-600 leading-relaxed mt-4 flex-grow">{product.description}</p>
        <div className="mt-auto pt-6">
          <PriceTag
            price={product.price}
            originalPrice={product.originalPrice}
            discountPercent={product.discountPercent}
            color={colorScheme.text}
          />
          <div className="mt-4">
            <CardButton
              onClick={() => onClickCta(product.id)}
              backgroundColor={colorScheme.bg}
              hoverColor={colorScheme.hover}
              productTitle={product.title}
            >
              {product.ctaText}
            </CardButton>
          </div>
        </div>
      </div>
    </article>
  );
}

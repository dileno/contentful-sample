interface PriceTagProps {
  price: string;
  originalPrice?: string;
  discountPercent?: number;
  color: string;
}

export function PriceTag({ price, originalPrice, discountPercent, color }: PriceTagProps) {
  return (
    <div className="flex items-baseline gap-2">
      <span className="font-bold text-2xl" style={{ color }}>
        <span className="sr-only">Pris: </span>
        {price}
      </span>
      {originalPrice && <span className="text-gray-400 line-through text-sm">{originalPrice}</span>}
      {discountPercent && (
        <span
          className="text-sm text-white bg-red-600 px-2 py-1 rounded-full"
          aria-label={`${discountPercent}% rabatt`}
        >
          -{discountPercent}%
        </span>
      )}
    </div>
  );
}

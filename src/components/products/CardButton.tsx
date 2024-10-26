interface CardButtonProps {
  onClick: () => void;
  backgroundColor: string;
  hoverColor: string;
  children: React.ReactNode;
  productTitle: string;
}

export function CardButton({ onClick, backgroundColor, hoverColor, children, productTitle }: CardButtonProps) {
  return (
    <button
      style={
        {
          backgroundColor,
          "--hover-bg": hoverColor,
        } as React.CSSProperties
      }
      className="w-full text-white py-3 px-4 rounded-lg font-semibold 
        transition duration-300
        focus:outline-none focus:ring-2 focus:ring-offset-2
        hover:bg-[--hover-bg]
        active:transform active:scale-95
        disabled:opacity-50 disabled:cursor-not-allowed"
      aria-label={`${children} för ${productTitle}`}
    >
      {children}
    </button>
  );
}

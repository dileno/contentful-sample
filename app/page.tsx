import { getHomePage } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { draftMode } from "next/headers";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { ProductGrid } from "@/src/components/products/ProductGrid";
import { type Product } from "@/types/types";

export default async function Home() {
  const { isEnabled } = await draftMode();
  const page = await getHomePage(isEnabled);

  if (!page) {
    notFound();
  }

  const handleProductClick = (productId: string) => {
    console.log(`Product clicked: ${productId}`);
  };

  const exampleProducts: Product[] = [
    {
      id: "1",
      title: "iPhone 16 Pro",
      description: "Upplev den senaste iPhone med titandesign och banbrytande A17 Pro-chip. Begränsat erbjudande!",
      price: "Från 9.990:-",
      originalPrice: "10.990:-",
      discountPercent: 10,
      ctaText: "Se erbjudande",
      colorScheme: "orangeRed",
    },
    {
      id: "2",
      title: "Samsung Galaxy S25",
      description: "Revolutionerande AI-funktioner och en otrolig kamera. Uppgradera idag!",
      price: "8.990:-",
      ctaText: "Köp nu",
      colorScheme: "limeGreen",
    },
    {
      id: "3",
      title: "Google Pixel 9",
      description: "Perfekt foto varje gång med AI-driven kamera. Specialpris med Tre Tillsammans!",
      price: "7.990:-",
      ctaText: "Läs mer",
      colorScheme: "lightOrange",
    },
    {
      id: "4",
      title: "AirPods Pro",
      description: "Upplev nästa nivå av ljudkvalitet med aktiv brusreducering. Nu med specialrabatt!",
      price: "1.990:-",
      ctaText: "Beställ här",
      colorScheme: "secondOrange",
    },
    {
      id: "5",
      title: "Samsung Watch 7",
      description: "Håll koll på din hälsa med avancerad hälsoövervakning. Extra armband på köpet!",
      price: "2.490:-",
      ctaText: "Se detaljer",
      colorScheme: "darkGreen",
    },
    {
      id: "6",
      title: "iPad Air",
      description: "Kraftfull och lätt med M1-chip. Perfekt för jobb och nöje. Studentrabatt tillgänglig!",
      price: "6.990:-",
      ctaText: "Utforska nu",
      colorScheme: "lightOrange",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center ajustify-between p-4 p-md-24 bg-white">
      <header className="h-[80px] w-full flex flex-col">
        <svg fill="currentColor" viewBox="0 0 29 36" className="h-full">
          <path d="M27.323 24.193c-.412 4.463-2.985 7.15-6.2 8.926-2.195 1.207-4.848 1.96-8.211 1.856-3.316-.102-5.798-.899-7.857-2.265-1.967-1.298-3.682-3.223-3.991-6.092-.183-1.639.286-2.97.984-3.95.709-1.014 1.635-1.754 2.95-2.095 1.555-.399 3.19-.068 4.209.477 1.349.718 2.138 2.028 1.956 4.122-.217-1.138-1.602-2.14-2.791-1.548-.343.171-.71.535-.812 1.002-.057.251.023.581-.15.762-.937-.147-1.211-1.08-1.154-2.14-.515.592-1.098 1.275-1.11 2.334 0 1.082.56 1.742 1.133 2.311.137.137.549.445.549.592 0 .297-.583.41-.892.456a5.082 5.082 0 01-1.247.023c.389.557.915.99 1.487 1.377 1.109.74 2.836 1.184 4.758.808.354-.068.766-.17 1.178-.284.263-.08.938-.387 1.132-.193.149.136.012.557-.046.74-.23.671-.674 1.24-1.052 1.662 2.78-.33 4.815-1.57 6.154-3.507.205-.285.399-.626.606-1.002.137-.227.445-.888.697-.899.355-.012.538.785.606 1.116a6.139 6.139 0 010 2.242c.069.034.137-.057.172-.09 1.292-1.22 2.413-3.246 1.853-5.91-.07-.318-.195-.717-.31-1.093-.102-.284-.331-.865-.125-1.07.274-.262 1.247.091 1.51.171.537.16.903.307 1.326.501-1.555-3.825-5.707-5.158-10.43-5.977-1.51-.262-3.134-.422-4.392-1.07 1.933-.228 3.34-1.025 4.826-1.925a25.839 25.839 0 002.985-2.072c.24-.193.71-.694 1.03-.649.4.057.446.786.48 1.241a4.821 4.821 0 01-.148 1.503c1.04-.649 1.944-1.64 2.115-3.188.092-.865-.091-1.559-.434-2.14-.332-.558-.79-.99-1.133-1.526.412-.649 1.739-.705 2.665-.5-.72-.969-1.75-1.823-3.271-2.027-.857-.114-1.658.011-2.401.193-.71.182-1.384.512-2.116.501.205-1.287 1.132-1.867 1.99-2.505-1.636-.022-2.962.41-4.152.877-2.344.934-4.45 2.197-6.725 3.336-.503.251-1.063.535-1.727.786-.572.216-1.395.512-2.07.352-.697-.159-.537-.83-.194-1.377.48-.786 1.315-1.49 1.99-2.027a18.535 18.535 0 013.294-2.072c2.47-1.24 5.044-2.083 8.497-2.243 4.129-.193 7.354 1.298 8.6 4.02.699 1.513.607 3.654.047 5.236-.412 1.162-1.018 2.084-1.681 3.03-.264.375-.641.841-.504 1.377.126.523.846.91 1.293 1.24 2.39 1.731 4.654 3.952 4.254 8.266m-11.094.308c1.236-1.23 2.345-4.532.48-5.818 2.917.58 5.364 1.833 6.85 3.905-.56-.103-1.177-.478-1.874-.285-.95.262-.332 1.685-.126 2.38.148.524.286 1.115.286 1.765 0 1.48-.55 2.391-1.11 3.21.023-.763-.114-1.48-.39-1.958-.182-.319-.49-.672-.982-.524-.171.045-.343.194-.457.33-.401.478-.641 1.105-.984 1.64-1.018 1.548-2.631 2.698-4.632 3.188.286-.365.972-1.993.172-2.266-.47-.148-1.556.296-1.991.41a8.77 8.77 0 01-2.092.284c-1.601-.01-2.54-.557-3.454-1.286.663-.102 1.578-.319 1.44-1.138-.057-.286-.434-.616-.651-.809-.252-.239-.492-.455-.698-.763-.457-.694-.457-1.446-.091-2.288.183.535.525 1.184 1.109 1.377.32.114.778.068.938-.216.148-.273.045-.49.09-.786.07-.477.528-.922 1.202-.853 1.28.136 1.853 1.935 1.418 3.358.412-.262.766-.785 1.03-1.286 1.955.113 3.419-.479 4.517-1.57m-5.936-9.895c.88-.66 1.876-1.207 2.79-1.856.596-.433 1.717-1.127 1.293-2.243-.48-1.275-2.836-1.457-4.632-1.457-2.035 0-4.094.011-5.981-.068C7.583 7.457 10.568 5.1 14.81 3.996c-.103.227-.526.603-.743 1.047-.183.364-.435 1.162.023 1.378.48.228 1.303-.16 1.772-.308.56-.17 1.075-.318 1.75-.398 1.544-.17 2.516.32 3.317.934-.892.023-2.024.273-1.944 1.161.034.444.697.99.938 1.31.308.398.594.9.65 1.57.093 1.128-.411 2.118-.96 2.767.069-1.002-.125-2.254-1.155-2.14-.4.045-.8.421-1.11.671-1.611 1.298-3.407 2.528-5.41 3.382a7.84 7.84 0 01-1.291.455c-.423.114-1.007.262-1.464 0 .126-.57.675-.888 1.109-1.218m12.489-.205c.904-1.264 1.785-2.584 2.288-4.28.56-1.89.446-3.986-.263-5.546C23.446 1.582 20.369.193 16.183 0h-.915c-3.705.205-6.484 1.15-9.16 2.516-1.842.933-3.695 2.14-4.998 3.711-.538.65-1.407 2.027-.606 2.881 1.086 1.15 4.368.933 6.827.933 1.647 0 3.477-.01 4.975.285.48.091 1.076.262 1.11.615.046.466-.95 1.024-1.247 1.218-1.018.683-1.967 1.173-2.928 2.004-.55.478-1.361 1.127-1.006 2.117.423 1.207 2.253 1.64 3.626 1.925 1.795.375 4.219.307 4.712 1.833.228.717.045 1.582-.15 2.163-.617 1.821-2.035 2.948-4.494 2.926.25-2.027-.423-3.439-1.487-4.383-1.03-.923-2.7-1.48-4.632-1.31-1.796.16-3.03.9-4.037 1.947-.984 1.025-1.658 2.425-1.75 4.212H0v.592c.252 3.45 2.002 5.636 4.175 7.196 2.207 1.583 5.215 2.47 8.817 2.62h1.179c4.129-.229 7.354-1.573 9.756-3.553 2.4-1.982 4.242-4.702 4.448-8.835v-.899c-.126-2.198-.87-3.747-1.898-5.044-1.03-1.31-2.425-2.198-3.695-3.268"></path>
        </svg>
      </header>
      <section className="w-full pt-12">
        <div className="mx-auto container space-y-12 px-4 md:px-6">
          {page?.heroBanner && (
            <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
              <Image
                src={page.heroBanner.url}
                alt={page.heroBanner.title}
                fill
                style={{ objectFit: "cover" }}
                priority
                aria-hidden
              />

              <div className="absolute inset-0 bg-black/50" />

              <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-1xl mx-auto text-white text-center md:text-left space-y-12">
                  {page.heading && <h1 className="text-6xl font-bold tracking-tight">{page.heading}</h1>}
                  <div className="bg-white rounded-lg p-4 w-full md:w-2/5">
                    {page.duplexSection && (
                      <div className="text-sm text-gray-900">{documentToReactComponents(page.duplexSection.json)}</div>
                    )}

                    <div className="flex flex-col sm:flex-row gap-2 mt-4">
                      <a
                        href="#erbjudanden"
                        className="inline-flex items-center justify-center px-3 py-2 text-base text-xs text-white bg-orange-600 text-white hover:bg-orange-500 rounded-lg transition duration-150 ease-in-out min-w-[150px]"
                      >
                        Se våra erbjudanden
                      </a>
                      <a
                        href="#lasmer"
                        className="inline-flex items-center justify-center px-3 py-2 text-base text-xs text-black bg-white border border-solid border-1 border-black hover:bg-gray-100 rounded-lg transition duration-150 ease-in-out min-w-[150px]"
                      >
                        Läs om Tre
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <ProductGrid products={exampleProducts} onProductClick={handleProductClick} />

          {page?.videoEmbed && (
            <div className="relative w-full aspect-video rounded-lg overflow-hidden">
              <video src={page.videoEmbed.url} title={page.videoEmbed.title} controls className="w-full h-full" />
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

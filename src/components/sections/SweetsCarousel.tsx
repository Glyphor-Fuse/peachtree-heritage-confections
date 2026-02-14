
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function SweetsCarousel() {
  const sweets = [
    {
      name: "Old-Fashioned Fudge",
      desc: "Rich, creamy chocolate fudge made with real butter and cream.",
      price: "$24.00 / lb",
      image: "/images/sweet-fudge.jpg"
    },
    {
      name: "Southern Pralines",
      desc: "Georgia pecans glazed in a caramelized brown sugar reduction.",
      price: "$28.00 / doz",
      image: "/images/sweet-praline.jpg"
    },
    {
      name: "English Toffee",
      desc: "Crunchy buttery toffee coated in milk chocolate and almond dust.",
      price: "$22.00 / lb",
      image: "/images/sweet-toffee.jpg"
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-4 max-w-xl">
            <h2 className="text-4xl font-serif font-bold text-primary">Signature Collections</h2>
            <p className="text-muted-foreground font-sans">
              Timeless recipes passed down through four generations of the Peachtree family.
            </p>
          </div>
          <Button variant="link" className="text-accent hover:text-accent/80 font-serif italic text-lg p-0">
            View Full Catalog <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        <Carousel className="w-full" opts={{ align: "start", loop: true }}>
          <CarouselContent className="-ml-4">
            {sweets.map((sweet, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="border-none bg-transparent group cursor-pointer">
                  <CardContent className="p-0 space-y-6">
                    <div className="aspect-[4/5] overflow-hidden rounded-lg relative">
                      <div className="absolute inset-0 bg-background/20 group-hover:bg-background/0 transition-colors duration-500 z-10" />
                      <img 
                        src={sweet.image} 
                        alt={sweet.name}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/80 to-transparent z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                         <span className="inline-block px-3 py-1 bg-accent/90 text-foreground text-xs font-bold tracking-widest uppercase mb-2">
                           Best Seller
                         </span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-baseline border-b border-border/30 pb-2">
                        <h3 className="text-2xl font-serif text-primary group-hover:text-accent transition-colors">
                          {sweet.name}
                        </h3>
                        <span className="font-mono text-muted-foreground">{sweet.price}</span>
                      </div>
                      <p className="text-muted-foreground font-sans text-sm line-clamp-2">
                        {sweet.desc}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:flex justify-end gap-2 mt-8 pr-4">
            <CarouselPrevious className="static translate-y-0 hover:bg-accent hover:text-foreground border-primary/20" />
            <CarouselNext className="static translate-y-0 hover:bg-accent hover:text-foreground border-primary/20" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}

export default SweetsCarousel;

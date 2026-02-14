
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-workshop.jpg"
          alt="Artisan confectionery workshop with copper kettles"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <span className="inline-block text-accent tracking-[0.2em] uppercase text-sm font-semibold mb-4 bg-accent/10 px-4 py-2 rounded-full border border-accent/20">
            Est. Atlanta, GA • 1892
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground leading-tight">
            Handcrafted <br />
            <span className="text-primary italic">Southern Heritage</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-sans font-light leading-relaxed">
            Small-batch confections born from copper kettles and century-old recipes. 
            Experience the taste of timeless Georgia tradition.
          </p>
          <div className="pt-8">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-serif text-lg px-8 py-6 h-auto rounded-none border border-primary/20 shadow-[0_0_20px_-5px_rgba(253,245,230,0.3)]"
            >
              View Today's Batches
            </Button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
      </motion.div>
    </section>
  );
}

export default Hero;

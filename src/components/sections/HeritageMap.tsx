
import { MapPin } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function HeritageMap() {
  const [activeLocation, setActiveLocation] = useState<number | null>(null);

  const locations = [
    { id: 1, x: 50, y: 40, name: "The Original Workshop", desc: "Where our first batch was stirred in 1892." },
    { id: 2, x: 30, y: 60, name: "Peachtree Market", desc: "Our flagship storefront since 1924." },
    { id: 3, x: 70, y: 55, name: "Pecan Groves", desc: "Source of our heritage nuts." },
  ];

  return (
    <section className="py-24 bg-card relative border-y border-border">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/3 space-y-6">
          <h2 className="text-4xl font-serif font-bold text-foreground">Roots in Atlanta</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our history is woven into the streets of Atlanta. From the original brick workshop 
            to the local groves that supply our pecans, we remain true to our origins.
          </p>
          <div className="space-y-4 pt-4">
            {locations.map((loc) => (
              <div 
                key={loc.id}
                onMouseEnter={() => setActiveLocation(loc.id)}
                className={`p-4 border-l-2 cursor-pointer transition-colors duration-300 ${
                  activeLocation === loc.id 
                    ? "border-accent bg-accent/5" 
                    : "border-border/30 hover:border-accent/50"
                }`}
              >
                <h4 className="font-serif text-lg text-primary">{loc.name}</h4>
                <p className="text-sm text-muted-foreground">{loc.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-2/3 w-full aspect-[4/3] bg-card rounded-xl relative overflow-hidden shadow-2xl border border-border/20 group">
          {/* Abstract Map Graphic */}
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(var(--muted) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
          
          <svg className="w-full h-full text-muted" viewBox="0 0 100 100">
            {/* Abstract Roads/Rivers */}
            <path d="M10,50 Q30,40 50,50 T90,60" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <path d="M40,10 Q45,50 40,90" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <path d="M20,20 Q60,30 80,80" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </svg>

          {/* Interactive Pins */}
          {locations.map((loc) => (
            <button
              key={loc.id}
              onClick={() => setActiveLocation(loc.id)}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 focus:outline-none group/pin"
              style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
            >
              <div className={`relative flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${activeLocation === loc.id ? 'bg-accent scale-110' : 'bg-primary text-background hover:bg-accent hover:text-foreground'}`}>
                <MapPin className="w-4 h-4" />
                {activeLocation === loc.id && (
                  <span className="absolute w-full h-full rounded-full border-2 border-accent animate-ping opacity-75" />
                )}
              </div>
            </button>
          ))}

          {/* Tooltip Popup */}
          <AnimatePresence>
            {activeLocation && (
              <motion.div
                key="tooltip"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute bottom-8 right-8 bg-popover border border-accent/20 p-4 max-w-xs shadow-xl rounded-lg"
              >
                <h4 className="font-serif text-accent mb-1">
                  {locations.find(l => l.id === activeLocation)?.name}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {locations.find(l => l.id === activeLocation)?.desc}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default HeritageMap;

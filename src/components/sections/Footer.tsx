
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-background text-muted-foreground py-16 border-t border-border/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-foreground font-serif text-xl">Peachtree Heritage</h3>
            <p className="text-sm leading-relaxed">
              Artisan confections crafted with patience, passion, and Georgia pecans.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-foreground font-serif text-sm uppercase tracking-widest">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">All Sweets</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Fudge</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Pralines</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Gift Boxes</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-foreground font-serif text-sm uppercase tracking-widest">Visit</h4>
            <ul className="space-y-2 text-sm">
              <li>128 Peachtree St.</li>
              <li>Atlanta, GA 30303</li>
              <li className="pt-2">Mon-Sat: 9am - 6pm</li>
              <li>Sun: Closed</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-foreground font-serif text-sm uppercase tracking-widest">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>(404) 555-0192</li>
              <li>hello@peachtreeheritage.com</li>
            </ul>
          </div>
        </div>

        <Separator className="bg-border/20 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-xs gap-4">
          <p>© 2024 Peachtree Heritage Confections. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">Privacy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms</a>
            <a href="#" className="hover:text-accent transition-colors">Shipping</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

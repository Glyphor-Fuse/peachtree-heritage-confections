
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ApothecarySignup() {
  return (
    <section className="py-24 bg-background flex justify-center px-4">
      <div className="w-full max-w-2xl bg-primary text-primary-foreground p-8 md:p-12 rounded-sm shadow-2xl relative overflow-hidden">
        {/* Paper Texture Overlay (CSS) */}
        <div className="absolute inset-0 pointer-events-none opacity-10 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')]" />
        
        {/* Ledger Lines */}
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'linear-gradient(var(--muted) 1px, transparent 1px)', backgroundSize: '100% 32px' }} />

        <div className="relative z-10 text-center space-y-8">
          <div className="space-y-2 border-b-2 border-primary-foreground pb-6 mx-auto max-w-md">
            <h2 className="text-3xl font-serif font-bold uppercase tracking-widest text-primary-foreground">
              The Confectioner's Ledger
            </h2>
            <p className="font-sans text-sm font-medium tracking-wide text-primary-foreground/80">
              Join our registry for seasonal batch announcements.
            </p>
          </div>

          <form className="space-y-6 max-w-md mx-auto text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="font-serif font-bold text-primary-foreground">First Name</Label>
                <Input 
                  id="firstName" 
                  placeholder="e.g. William" 
                  className="bg-transparent border-b border-primary-foreground/30 border-t-0 border-x-0 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary-foreground placeholder:text-primary-foreground/40 font-serif"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="font-serif font-bold text-primary-foreground">Last Name</Label>
                <Input 
                  id="lastName" 
                  placeholder="e.g. Pemberton" 
                  className="bg-transparent border-b border-primary-foreground/30 border-t-0 border-x-0 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary-foreground placeholder:text-primary-foreground/40 font-serif"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="font-serif font-bold text-primary-foreground">Email Address</Label>
              <Input 
                id="email" 
                type="email"
                placeholder="e.g. william@example.com" 
                className="bg-transparent border-b border-primary-foreground/30 border-t-0 border-x-0 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary-foreground placeholder:text-primary-foreground/40 font-serif"
              />
            </div>

            <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-serif uppercase tracking-widest py-6 mt-4">
              Sign the Ledger
            </Button>
          </form>

          <p className="text-xs text-primary-foreground/60 font-sans mt-4">
            * We respect the privacy of our patrons. Your information remains sealed within our archives.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ApothecarySignup;

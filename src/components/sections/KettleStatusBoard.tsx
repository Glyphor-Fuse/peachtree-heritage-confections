
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Clock, Star, Thermometer } from 'lucide-react';

export function KettleStatusBoard() {
  const batches = [
    {
      id: 1,
      name: "Bourbon Pecan Fudge",
      status: "Cooling",
      temp: "112°F",
      readyIn: "45 min",
      progress: 65,
      chef: "Head Confectioner Miller"
    },
    {
      id: 2,
      name: "Savannah Pralines",
      status: "Pouring",
      temp: "238°F",
      readyIn: "1 hr 20 min",
      progress: 20,
      chef: "Artisan Baker Sarah"
    },
    {
      id: 3,
      name: "English Toffee Bark",
      status: "Setting",
      temp: "85°F",
      readyIn: "15 min",
      progress: 90,
      chef: "Master Chocolatier James"
    }
  ];

  return (
    <section className="py-24 px-4 bg-muted/10 relative border-y border-border/40">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Fresh From the Kettle
          </h2>
          <p className="text-muted-foreground font-sans max-w-2xl mx-auto">
            Live status from our copper kettles. Reserve your batch while it cools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {batches.map((batch) => (
            <Card key={batch.id} className="bg-card border-border/40 shadow-xl overflow-hidden group hover:border-accent/40 transition-colors duration-300">
              <CardHeader className="pb-3 bg-muted/20 border-b border-border/20">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className="border-accent/50 text-accent bg-accent/5 font-sans tracking-wide">
                    Batch #{202400 + batch.id}
                  </Badge>
                  {batch.progress > 80 && (
                    <span className="animate-pulse w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(46,90,71,0.8)]" />
                  )}
                </div>
                <CardTitle className="font-serif text-xl text-primary leading-tight">
                  {batch.name}
                </CardTitle>
                <CardDescription className="flex items-center gap-2 text-sm pt-1">
                  <Star className="w-3 h-3" /> {batch.chef}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-6 space-y-6">
                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                    <span className="text-xs uppercase tracking-wider text-muted-foreground">Current Temp</span>
                    <div className="flex items-center gap-2 text-2xl font-mono text-foreground font-medium">
                      <Thermometer className="w-5 h-5 text-accent" />
                      {batch.temp}
                    </div>
                  </div>
                  <div className="text-right space-y-1">
                     <span className="text-xs uppercase tracking-wider text-muted-foreground">Ready In</span>
                     <div className="flex items-center justify-end gap-2 text-xl font-mono text-foreground">
                       <Clock className="w-4 h-4 text-muted-foreground" />
                       {batch.readyIn}
                     </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs uppercase tracking-wider text-muted-foreground">
                    <span>Process Status</span>
                    <span>{batch.status}</span>
                  </div>
                  <Progress value={batch.progress} className="h-2 bg-muted-foreground/20" indicatorClassName="bg-accent" />
                </div>

                <Button className="w-full bg-transparent border border-primary/20 hover:bg-primary/5 text-primary-foreground font-sans uppercase tracking-widest text-xs h-12">
                  Reserve This Batch
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default KettleStatusBoard;

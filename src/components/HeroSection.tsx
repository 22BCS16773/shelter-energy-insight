import { ArrowRight, Shield, TrendingDown, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden gradient-hero py-16 md:py-24">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }} />
      </div>
      
      <div className="container relative px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-primary-foreground text-sm font-medium">
            <Shield className="w-4 h-4" />
            <span>Empowering Communities with Smart Technology</span>
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight animate-fade-up">
            Smart Utility Metering for 
            <span className="block mt-2">Homeless Shelters</span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Monitor, optimize, and reduce utility costs while ensuring comfortable living conditions for those who need it most.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8">
              View Dashboard
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-primary-foreground hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
            <TrendingDown className="w-8 h-8 text-primary-foreground mx-auto mb-3" />
            <div className="text-3xl font-display font-bold text-primary-foreground">30%</div>
            <p className="text-primary-foreground/80 text-sm mt-1">Cost Reduction</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
            <Shield className="w-8 h-8 text-primary-foreground mx-auto mb-3" />
            <div className="text-3xl font-display font-bold text-primary-foreground">12</div>
            <p className="text-primary-foreground/80 text-sm mt-1">Shelters Connected</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
            <Leaf className="w-8 h-8 text-primary-foreground mx-auto mb-3" />
            <div className="text-3xl font-display font-bold text-primary-foreground">45T</div>
            <p className="text-primary-foreground/80 text-sm mt-1">CO₂ Saved Monthly</p>
          </div>
        </div>
      </div>
    </section>
  );
}

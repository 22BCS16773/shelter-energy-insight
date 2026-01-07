import { Zap, Droplets, Flame, Leaf } from "lucide-react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { MetricCard } from "@/components/MetricCard";
import { UsageChart } from "@/components/UsageChart";
import { AlertsPanel } from "@/components/AlertsPanel";
import { ShelterOverview } from "@/components/ShelterOverview";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      
      <main className="container px-4 md:px-6 py-12">
        {/* Metrics Grid */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-2xl font-bold">Real-Time Metrics</h2>
            <span className="text-sm text-muted-foreground">Last updated: Just now</span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              title="Electricity Usage"
              value="2,847"
              unit="kWh"
              change={-12}
              icon={Zap}
              variant="electricity"
            />
            <MetricCard
              title="Water Consumption"
              value="15,420"
              unit="gal"
              change={8}
              icon={Droplets}
              variant="water"
            />
            <MetricCard
              title="Gas Usage"
              value="892"
              unit="therms"
              change={-5}
              icon={Flame}
              variant="gas"
            />
            <MetricCard
              title="Carbon Footprint"
              value="12.4"
              unit="tons CO₂"
              change={-18}
              icon={Leaf}
              variant="carbon"
            />
          </div>
        </section>
        
        {/* Charts and Alerts */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <div className="lg:col-span-2">
            <UsageChart />
          </div>
          <div>
            <AlertsPanel />
          </div>
        </section>
        
        {/* Shelter Overview */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ShelterOverview />
          
          {/* Quick Actions */}
          <div className="space-y-6">
            <div className="rounded-2xl gradient-hero p-6 text-primary-foreground">
              <h3 className="font-display text-xl font-bold mb-2">AI-Powered Insights</h3>
              <p className="text-primary-foreground/90 text-sm mb-4">
                Our machine learning algorithms analyze consumption patterns to identify optimization opportunities and predict maintenance needs.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground" />
                  Predictive maintenance alerts
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground" />
                  Anomaly detection in real-time
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground" />
                  Automated efficiency recommendations
                </li>
              </ul>
            </div>
            
            <div className="rounded-2xl bg-card border p-6 shadow-card">
              <h3 className="font-display text-xl font-bold mb-4">Impact Summary</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 rounded-xl bg-success/10">
                  <div className="text-2xl font-display font-bold text-success">$47,200</div>
                  <p className="text-sm text-muted-foreground mt-1">Annual Savings</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-primary/10">
                  <div className="text-2xl font-display font-bold text-primary">460</div>
                  <p className="text-sm text-muted-foreground mt-1">Residents Served</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="border-t bg-card mt-12">
        <div className="container px-4 md:px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 ShelterSense. Empowering communities through smart technology.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
              <a href="#" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

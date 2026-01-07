import { Activity, Bell, Settings, Menu, AlertTriangle, CheckCircle, Info, Zap, Moon, Sun, Volume2, Mail, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { cn } from "@/lib/utils";

const notifications = [
  {
    id: 1,
    type: "warning",
    title: "High Water Usage",
    description: "Building A showing 40% above average",
    time: "5 min ago",
    icon: AlertTriangle,
    read: false,
  },
  {
    id: 2,
    type: "success",
    title: "Energy Goal Achieved",
    description: "Monthly electricity target met early",
    time: "1 hour ago",
    icon: CheckCircle,
    read: false,
  },
  {
    id: 3,
    type: "info",
    title: "Smart Meter Update",
    description: "12 devices successfully synced",
    time: "2 hours ago",
    icon: Info,
    read: true,
  },
  {
    id: 4,
    type: "warning",
    title: "Peak Demand Alert",
    description: "Approaching grid peak hours",
    time: "3 hours ago",
    icon: Zap,
    read: true,
  },
];

const notificationStyles = {
  warning: "bg-warning/20 text-warning",
  success: "bg-success/20 text-success",
  info: "bg-primary/20 text-primary",
};

const navLinks = [
  { name: "Dashboard", href: "#", active: true },
  { name: "Analytics", href: "#analytics", active: false },
  { name: "Shelters", href: "#shelters", active: false },
  { name: "Reports", href: "#reports", active: false },
];

export function Header() {
  const [notificationsRead, setNotificationsRead] = useState<number[]>([3, 4]);
  const [settings, setSettings] = useState({
    darkMode: false,
    emailAlerts: true,
    soundAlerts: true,
    realTimeUpdates: true,
  });

  const unreadCount = notifications.filter(n => !notificationsRead.includes(n.id)).length;

  const markAsRead = (id: number) => {
    if (!notificationsRead.includes(id)) {
      setNotificationsRead([...notificationsRead, id]);
    }
  };

  const markAllAsRead = () => {
    setNotificationsRead(notifications.map(n => n.id));
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-3">
          <div className="gradient-hero p-2 rounded-xl">
            <Activity className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-display font-bold text-lg">ShelterSense</h1>
            <p className="text-xs text-muted-foreground">Smart Utility Metering</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                link.active ? "text-foreground" : "text-muted-foreground"
              )}
            >
              {link.name}
            </a>
          ))}
        </nav>
        
        <div className="flex items-center gap-2">
          {/* Notifications Popover */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                {unreadCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs bg-destructive">
                    {unreadCount}
                  </Badge>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-0" align="end">
              <div className="flex items-center justify-between px-4 py-3 border-b">
                <h3 className="font-display font-semibold">Notifications</h3>
                <Button variant="ghost" size="sm" onClick={markAllAsRead} className="text-xs text-primary">
                  Mark all read
                </Button>
              </div>
              <div className="max-h-80 overflow-y-auto">
                {notifications.map((notification) => {
                  const Icon = notification.icon;
                  const isRead = notificationsRead.includes(notification.id);
                  return (
                    <div 
                      key={notification.id}
                      onClick={() => markAsRead(notification.id)}
                      className={cn(
                        "flex items-start gap-3 p-4 border-b last:border-0 cursor-pointer transition-colors hover:bg-muted/50",
                        !isRead && "bg-primary/5"
                      )}
                    >
                      <div className={cn("p-2 rounded-lg", notificationStyles[notification.type as keyof typeof notificationStyles])}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-sm">{notification.title}</span>
                          {!isRead && <span className="w-2 h-2 rounded-full bg-primary" />}
                        </div>
                        <p className="text-xs text-muted-foreground mt-0.5">{notification.description}</p>
                        <span className="text-xs text-muted-foreground">{notification.time}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="p-3 border-t">
                <Button variant="outline" className="w-full text-sm">
                  View All Notifications
                </Button>
              </div>
            </PopoverContent>
          </Popover>

          {/* Settings Sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Settings className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="font-display">Settings</SheetTitle>
                <SheetDescription>
                  Configure your dashboard preferences and notifications.
                </SheetDescription>
              </SheetHeader>
              <div className="space-y-6 mt-6">
                <div className="space-y-4">
                  <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">Appearance</h4>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {settings.darkMode ? <Moon className="w-4 h-4 text-muted-foreground" /> : <Sun className="w-4 h-4 text-muted-foreground" />}
                      <Label htmlFor="dark-mode">Dark Mode</Label>
                    </div>
                    <Switch 
                      id="dark-mode" 
                      checked={settings.darkMode}
                      onCheckedChange={(checked) => setSettings({...settings, darkMode: checked})}
                    />
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">Notifications</h4>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <Label htmlFor="email-alerts">Email Alerts</Label>
                    </div>
                    <Switch 
                      id="email-alerts" 
                      checked={settings.emailAlerts}
                      onCheckedChange={(checked) => setSettings({...settings, emailAlerts: checked})}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Volume2 className="w-4 h-4 text-muted-foreground" />
                      <Label htmlFor="sound-alerts">Sound Alerts</Label>
                    </div>
                    <Switch 
                      id="sound-alerts" 
                      checked={settings.soundAlerts}
                      onCheckedChange={(checked) => setSettings({...settings, soundAlerts: checked})}
                    />
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">Data</h4>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Activity className="w-4 h-4 text-muted-foreground" />
                      <Label htmlFor="realtime">Real-time Updates</Label>
                    </div>
                    <Switch 
                      id="realtime" 
                      checked={settings.realTimeUpdates}
                      onCheckedChange={(checked) => setSettings({...settings, realTimeUpdates: checked})}
                    />
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">Account</h4>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center">
                      <Shield className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Admin User</p>
                      <p className="text-xs text-muted-foreground">admin@sheltersense.org</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">Manage Account</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Mobile Menu Sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <div className="flex items-center gap-3">
                  <div className="gradient-hero p-2 rounded-xl">
                    <Activity className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <SheetTitle className="font-display">ShelterSense</SheetTitle>
                </div>
              </SheetHeader>
              <nav className="flex flex-col gap-2 mt-8">
                {navLinks.map((link) => (
                  <a 
                    key={link.name}
                    href={link.href} 
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                      link.active 
                        ? "bg-primary/10 text-primary font-medium" 
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
              
              <div className="mt-8 p-4 rounded-lg bg-muted/50">
                <p className="text-sm font-medium">Need Help?</p>
                <p className="text-xs text-muted-foreground mt-1">Contact our support team for assistance with your IoT devices.</p>
                <Button className="w-full mt-3" size="sm">Contact Support</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

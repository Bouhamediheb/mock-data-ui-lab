
import {
  LayoutDashboard,
  TicketCheck,
  MessageSquare,
  Users,
  BarChart3,
  Settings,
  Menu
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const NavItem = ({ icon, label, active, onClick }: NavItemProps) => (
  <Button
    variant="ghost"
    className={cn(
      "w-full justify-start mb-1",
      active ? "bg-brand-green/20 text-brand-green" : "text-muted-foreground"
    )}
    onClick={onClick}
  >
    <div className="flex items-center">
      <div className="mr-3">{icon}</div>
      <span>{label}</span>
    </div>
  </Button>
);

const MobileNav = () => {
  const [activeItem, setActiveItem] = useState('dashboard');
  const [open, setOpen] = useState(false);

  const handleNavClick = (item: string) => {
    setActiveItem(item);
    setOpen(false);
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 backdrop-blur-sm bg-brand-darkest/90 border-t border-brand-dark">
      <div className="grid grid-cols-5 h-16">
        <Button 
          variant="ghost" 
          className="flex flex-col items-center justify-center gap-1 h-full rounded-none" 
          onClick={() => handleNavClick('dashboard')}
        >
          <LayoutDashboard className={cn("h-5 w-5", activeItem === 'dashboard' ? 'text-brand-green' : 'text-muted-foreground')} />
          <span className="text-xs">Dashboard</span>
        </Button>
        <Button 
          variant="ghost" 
          className="flex flex-col items-center justify-center gap-1 h-full rounded-none" 
          onClick={() => handleNavClick('tickets')}
        >
          <TicketCheck className={cn("h-5 w-5", activeItem === 'tickets' ? 'text-brand-green' : 'text-muted-foreground')} />
          <span className="text-xs">Tickets</span>
        </Button>
        <Button 
          variant="ghost" 
          className="flex flex-col items-center justify-center gap-1 h-full rounded-none" 
          onClick={() => handleNavClick('feedback')}
        >
          <MessageSquare className={cn("h-5 w-5", activeItem === 'feedback' ? 'text-brand-green' : 'text-muted-foreground')} />
          <span className="text-xs">Feedback</span>
        </Button>
        <Button 
          variant="ghost" 
          className="flex flex-col items-center justify-center gap-1 h-full rounded-none" 
          onClick={() => handleNavClick('team')}
        >
          <Users className={cn("h-5 w-5", activeItem === 'team' ? 'text-brand-green' : 'text-muted-foreground')} />
          <span className="text-xs">Team</span>
        </Button>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="flex flex-col items-center justify-center gap-1 h-full rounded-none">
              <Menu className="h-5 w-5 text-muted-foreground" />
              <span className="text-xs">More</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-brand-dark border-brand-dark/60 pt-12">
            <div className="flex-1 py-4">
              <NavItem 
                icon={<LayoutDashboard size={20} />} 
                label="Dashboard" 
                active={activeItem === 'dashboard'} 
                onClick={() => handleNavClick('dashboard')}
              />
              <NavItem 
                icon={<TicketCheck size={20} />} 
                label="Tickets" 
                active={activeItem === 'tickets'} 
                onClick={() => handleNavClick('tickets')}
              />
              <NavItem 
                icon={<MessageSquare size={20} />} 
                label="Feedback" 
                active={activeItem === 'feedback'}
                onClick={() => handleNavClick('feedback')}
              />
              <NavItem 
                icon={<Users size={20} />} 
                label="Team" 
                active={activeItem === 'team'}
                onClick={() => handleNavClick('team')}
              />
              <NavItem 
                icon={<BarChart3 size={20} />} 
                label="Reports" 
                active={activeItem === 'reports'}
                onClick={() => handleNavClick('reports')}
              />
              <Separator className="my-4" />
              <NavItem 
                icon={<Settings size={20} />} 
                label="Settings" 
                active={activeItem === 'settings'}
                onClick={() => handleNavClick('settings')}
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default MobileNav;

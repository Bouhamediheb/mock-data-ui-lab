
import { useState } from 'react';
import { 
  LayoutDashboard, 
  TicketCheck, 
  MessageSquare, 
  Users, 
  BarChart3, 
  Settings, 
  ChevronRight, 
  ChevronLeft 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
  collapsed?: boolean;
}

const NavItem = ({ icon, label, active, onClick, collapsed }: NavItemProps) => (
  <Button
    variant="ghost"
    className={cn(
      "w-full justify-start mb-1 transition-all duration-300",
      active ? "bg-brand-green/20 text-brand-green hover:bg-brand-green/30" : 
               "text-muted-foreground hover:bg-brand-dark hover:text-foreground",
      collapsed ? "px-3" : "px-4"
    )}
    onClick={onClick}
  >
    <div className="flex items-center">
      <div className={cn("flex-shrink-0", collapsed ? "mr-0" : "mr-3")}>{icon}</div>
      {!collapsed && <span>{label}</span>}
    </div>
  </Button>
);

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('dashboard');
  const [collapsed, setCollapsed] = useState(false);
  const isMobile = useIsMobile();

  // Don't show sidebar at all on mobile - we'll use a different navigation
  if (isMobile) return null;

  return (
    <div 
      className={cn(
        "h-[calc(100vh-64px)] sticky top-16 border-r border-brand-dark bg-brand-darkest transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex flex-col h-full p-3">
        <div className="flex-1 py-2">
          <NavItem 
            icon={<LayoutDashboard size={20} />} 
            label="Dashboard" 
            active={activeItem === 'dashboard'} 
            onClick={() => setActiveItem('dashboard')}
            collapsed={collapsed}
          />
          <NavItem 
            icon={<TicketCheck size={20} />} 
            label="Tickets" 
            active={activeItem === 'tickets'} 
            onClick={() => setActiveItem('tickets')}
            collapsed={collapsed}
          />
          <NavItem 
            icon={<MessageSquare size={20} />} 
            label="Feedback" 
            active={activeItem === 'feedback'}
            onClick={() => setActiveItem('feedback')}
            collapsed={collapsed}
          />
          <NavItem 
            icon={<Users size={20} />} 
            label="Team" 
            active={activeItem === 'team'}
            onClick={() => setActiveItem('team')}
            collapsed={collapsed}
          />
          <NavItem 
            icon={<BarChart3 size={20} />} 
            label="Reports" 
            active={activeItem === 'reports'}
            onClick={() => setActiveItem('reports')}
            collapsed={collapsed}
          />
        </div>
        <div className="pt-2 border-t border-brand-dark">
          <NavItem 
            icon={<Settings size={20} />} 
            label="Settings" 
            active={activeItem === 'settings'}
            onClick={() => setActiveItem('settings')}
            collapsed={collapsed}
          />
          <Button
            variant="ghost"
            size="icon"
            className="w-full mt-2 text-muted-foreground hover:text-foreground"
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

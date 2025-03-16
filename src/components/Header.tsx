
import { useState, useEffect } from 'react';
import { Bell, User, Search, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { ChangeNotification } from '@/types';
import { notifications } from '@/data/mockData';
import { useToast } from '@/hooks/use-toast';

const Header = () => {
  const [unreadCount, setUnreadCount] = useState(0);
  const [notifs, setNotifs] = useState<ChangeNotification[]>(notifications);
  const { toast } = useToast();

  useEffect(() => {
    const count = notifs.filter(n => !n.seen).length;
    setUnreadCount(count);
  }, [notifs]);

  const markAsRead = (id: string) => {
    setNotifs(prev => 
      prev.map(n => n.id === id ? { ...n, seen: true } : n)
    );
    toast({
      title: "Notification marked as read",
      description: "The notification has been marked as read.",
    });
  };

  const markAllAsRead = () => {
    setNotifs(prev => prev.map(n => ({ ...n, seen: true })));
    toast({
      title: "All notifications marked as read",
      description: "All notifications have been marked as read.",
    });
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-sm bg-brand-darkest/90 border-b border-brand-dark">
      <div className="container h-16 flex items-center justify-between px-4 md:px-6">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-sm bg-brand-green" />
            <span className="font-bold text-lg tracking-tight">PROJECT<span className="text-brand-green">11</span></span>
          </div>
          <div className="hidden md:flex">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search tickets, feedback..."
                className="w-[300px] pl-8 bg-brand-dark border-brand-dark focus-visible:ring-brand-green"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="icon" className="relative bg-transparent border-0">
                <Bell className="h-5 w-5" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-brand-green text-brand-dark text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                    {unreadCount}
                  </span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-0 bg-brand-dark" align="end">
              <div className="flex items-center justify-between p-4">
                <h4 className="font-medium text-sm">Notifications</h4>
                {unreadCount > 0 && (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={markAllAsRead}
                    className="text-xs h-auto py-1"
                  >
                    Mark all as read
                  </Button>
                )}
              </div>
              <Separator />
              <div className="max-h-80 overflow-auto">
                {notifs.length > 0 ? (
                  notifs.map(notification => (
                    <div 
                      key={notification.id} 
                      className={`p-4 ${!notification.seen ? 'bg-brand-darker' : ''}`}
                    >
                      <div className="flex items-start gap-4">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={notification.user.avatar} alt={notification.user.name} />
                          <AvatarFallback>{notification.user.name.slice(0, 2)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium">{notification.user.name}</p>
                            <Badge variant="outline" className="h-5 text-xs">
                              {notification.ticketId}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground">{notification.message}</p>
                          <p className="text-xs text-muted-foreground">
                            {new Date(notification.timestamp).toLocaleString()}
                          </p>
                          {!notification.seen && (
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="text-xs h-auto py-1 mt-1"
                              onClick={() => markAsRead(notification.id)}
                            >
                              Mark as read
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-8 text-center">
                    <p className="text-sm text-muted-foreground">No notifications</p>
                  </div>
                )}
              </div>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" className="h-9 w-9 p-0 rounded-full">
                <Avatar>
                  <AvatarImage src="https://i.pravatar.cc/150?img=8" alt="User" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-56 p-0 bg-brand-dark" align="end">
              <div className="p-4 space-y-1">
                <p className="text-sm font-medium">John Doe</p>
                <p className="text-xs text-muted-foreground">Senior Project Manager</p>
              </div>
              <Separator />
              <div className="p-2">
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
};

export default Header;

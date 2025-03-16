
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { timeline } from '@/data/mockData';
import { TimelineItem } from '@/types';
import { cn } from '@/lib/utils';

const typeClasses = {
  ticket: "bg-brand-green/20 text-brand-green",
  feedback: "bg-blue-500/20 text-blue-500",
  notification: "bg-yellow-500/20 text-yellow-500"
};

const iconClasses = {
  ticket: "bg-brand-green/20 border-brand-green/30",
  feedback: "bg-blue-500/20 border-blue-500/30",
  notification: "bg-yellow-500/20 border-yellow-500/30"
};

const TimelineActivity = () => {
  // Sort timeline by timestamp (newest first)
  const recentActivity = [...timeline]
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

  return (
    <Card className="h-full bg-brand-dark border-brand-dark/60 overflow-hidden hover:border-brand-green/30 transition-all duration-300 card-hover">
      <CardHeader className="pb-3">
        <CardTitle className="text-md font-medium">Activity Timeline</CardTitle>
        <CardDescription>Recent system activity</CardDescription>
      </CardHeader>
      <CardContent className="relative pl-6 pr-3 pt-2 pb-2">
        <div className="absolute inset-y-0 left-9 mt-10 w-[1px] bg-border/60" />
        <div className="space-y-6">
          {recentActivity.map((item) => (
            <TimelineItemComponent key={item.id} item={item} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const TimelineItemComponent = ({ item }: { item: TimelineItem }) => {
  return (
    <div className="relative animate-slideInRight">
      <div className={cn(
        "absolute left-[-20px] h-6 w-6 rounded-full border-2 flex items-center justify-center",
        iconClasses[item.type]
      )}>
        <div className={cn("h-2 w-2 rounded-full", 
          item.type === 'ticket' ? 'bg-brand-green' : 
          item.type === 'feedback' ? 'bg-blue-500' : 
          'bg-yellow-500'
        )} />
      </div>
      <div className="mb-1 flex items-baseline justify-between">
        <div className="flex items-center gap-2">
          <Avatar className="h-5 w-5">
            <AvatarImage src={item.user.avatar} alt={item.user.name} />
            <AvatarFallback>{item.user.name.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <p className="text-sm font-medium">{item.title}</p>
          <Badge variant="outline" className={cn("h-5 text-xs capitalize px-2 py-0", typeClasses[item.type])}>
            {item.type}
          </Badge>
        </div>
        <time className="text-xs text-muted-foreground">
          {new Date(item.timestamp).toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </time>
      </div>
      <p className="text-xs text-muted-foreground pl-7">{item.description}</p>
    </div>
  );
};

export default TimelineActivity;

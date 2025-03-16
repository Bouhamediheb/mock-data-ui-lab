
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { jiraTickets } from '@/data/mockData';
import { JiraTicket } from '@/types';
import { cn } from '@/lib/utils';

const priorityClasses = {
  low: "bg-blue-500/20 text-blue-500 hover:bg-blue-500/30",
  medium: "bg-yellow-500/20 text-yellow-500 hover:bg-yellow-500/30",
  high: "bg-orange-500/20 text-orange-500 hover:bg-orange-500/30",
  critical: "bg-red-500/20 text-red-500 hover:bg-red-500/30"
};

const statusClasses = {
  'to do': "bg-gray-500/20 text-gray-400 hover:bg-gray-500/30",
  'in progress': "bg-brand-green/20 text-brand-green hover:bg-brand-green/30",
  'review': "bg-purple-500/20 text-purple-500 hover:bg-purple-500/30",
  'done': "bg-blue-500/20 text-blue-500 hover:bg-blue-500/30"
};

const TasksOverview = () => {
  // Get the 5 most recent tickets
  const recentTasks = [...jiraTickets]
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
    .slice(0, 5);

  return (
    <Card className="h-full bg-brand-dark border-brand-dark/60 overflow-hidden hover:border-brand-green/30 transition-all duration-300 card-hover">
      <CardHeader className="pb-3">
        <CardTitle className="text-md font-medium">Recent Tickets</CardTitle>
        <CardDescription>Latest activity across all tickets</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-1">
          {recentTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const TaskItem = ({ task }: { task: JiraTicket }) => {
  return (
    <div className="flex items-center justify-between p-4 hover:bg-brand-darker/40 transition-colors">
      <div className="flex items-center space-x-4">
        <Avatar className="h-8 w-8">
          <AvatarImage src={task.assignee.avatar} alt={task.assignee.name} />
          <AvatarFallback>{task.assignee.name.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div>
          <div className="flex items-center space-x-2">
            <p className="text-sm font-medium">{task.title}</p>
            <Badge variant="outline" className="h-5 text-xs">{task.id}</Badge>
          </div>
          <div className="flex items-center space-x-2 mt-1">
            <p className="text-xs text-muted-foreground">
              {new Date(task.updatedAt).toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
            <Badge variant="outline" className={cn("h-5 text-xs", priorityClasses[task.priority])}>
              {task.priority}
            </Badge>
          </div>
        </div>
      </div>
      <Badge variant="outline" className={cn("h-6 capitalize", statusClasses[task.status])}>
        {task.status}
      </Badge>
    </div>
  );
};

export default TasksOverview;

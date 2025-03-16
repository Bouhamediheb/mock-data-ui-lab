
import { useEffect } from 'react';
import { 
  LayoutDashboard, 
  TicketCheck, 
  Clock, 
  AlertOctagon,
  CheckSquare
} from 'lucide-react';
import AppLayout from '@/components/AppLayout';
import StatCard from '@/components/dashboard/StatCard';
import StatusChart from '@/components/dashboard/StatusChart';
import TasksOverview from '@/components/dashboard/TasksOverview';
import RecentFeedback from '@/components/dashboard/RecentFeedback';
import TimelineActivity from '@/components/dashboard/TimelineActivity';
import TaskCompletionChart from '@/components/dashboard/TaskCompletionChart';
import { 
  statistics, 
  getStatusDistribution, 
  getPriorityDistribution,
  getFeedbackTypeDistribution
} from '@/data/mockData';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();

  useEffect(() => {
    // Welcome toast notification
    toast({
      title: "Welcome to Project 11",
      description: "Unified Feedback and Change Tracking System",
    });
  }, [toast]);

  return (
    <AppLayout>
      <div className="space-y-6 animate-fadeIn">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Welcome to the Unified Feedback and Change Tracking System
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatCard 
            title="Total Tasks" 
            value={statistics.totalTasks}
            icon={<LayoutDashboard className="h-5 w-5 text-muted-foreground" />}
            variant="info"
          />
          <StatCard 
            title="Completed Tasks" 
            value={statistics.completedTasks}
            icon={<CheckSquare className="h-5 w-5 text-muted-foreground" />}
            trend={{
              value: "28%",
              direction: "up",
              label: "from last week"
            }}
            variant="positive"
          />
          <StatCard 
            title="Pending Feedback" 
            value={statistics.pendingFeedback}
            icon={<TicketCheck className="h-5 w-5 text-muted-foreground" />}
            trend={{
              value: "2",
              direction: "up",
              label: "since yesterday"
            }}
            variant="caution"
          />
          <StatCard 
            title="Delayed Tasks" 
            value={statistics.delayedTasks}
            icon={<AlertOctagon className="h-5 w-5 text-muted-foreground" />}
            trend={{
              value: statistics.avgResolutionTime + "h",
              direction: "neutral",
              label: "avg. resolution"
            }}
            variant="negative"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatusChart 
            data={getStatusDistribution()} 
            title="Task Status Distribution"
            colors={['#818CF8', '#B4F479', '#F59E0B', '#60A5FA']}
          />
          <StatusChart 
            data={getPriorityDistribution()} 
            title="Task Priority Distribution"
            colors={['#60A5FA', '#F59E0B', '#EF4444', '#E91E63']}
          />
          <StatusChart 
            data={getFeedbackTypeDistribution()} 
            title="Feedback Type Distribution"
            colors={['#EF4444', '#60A5FA', '#B4F479']}
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TaskCompletionChart />
          <TimelineActivity />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TasksOverview />
          <RecentFeedback />
        </div>
      </div>
    </AppLayout>
  );
};

export default Index;

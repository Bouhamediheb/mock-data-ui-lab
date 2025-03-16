
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { feedbacks } from '@/data/mockData';
import { Feedback } from '@/types';
import { cn } from '@/lib/utils';

const typeClasses = {
  bug: "bg-red-500/20 text-red-500 hover:bg-red-500/30",
  improvement: "bg-blue-500/20 text-blue-500 hover:bg-blue-500/30",
  feature: "bg-brand-green/20 text-brand-green hover:bg-brand-green/30"
};

const statusClasses = {
  new: "bg-purple-500/20 text-purple-500 hover:bg-purple-500/30",
  acknowledged: "bg-blue-500/20 text-blue-500 hover:bg-blue-500/30",
  implemented: "bg-brand-green/20 text-brand-green hover:bg-brand-green/30",
  rejected: "bg-red-500/20 text-red-500 hover:bg-red-500/30"
};

const RecentFeedback = () => {
  // Sort feedbacks by submission date (newest first)
  const recentFeedback = [...feedbacks]
    .sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime())
    .slice(0, 5);

  return (
    <Card className="h-full bg-brand-dark border-brand-dark/60 overflow-hidden hover:border-brand-green/30 transition-all duration-300 card-hover">
      <CardHeader className="pb-3">
        <CardTitle className="text-md font-medium">Recent Feedback</CardTitle>
        <CardDescription>Latest feedback from testers</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-1">
          {recentFeedback.map((feedback) => (
            <FeedbackItem key={feedback.id} feedback={feedback} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const FeedbackItem = ({ feedback }: { feedback: Feedback }) => {
  return (
    <div className="flex items-center justify-between p-4 hover:bg-brand-darker/40 transition-colors">
      <div className="flex items-center space-x-4">
        <Avatar className="h-8 w-8">
          <AvatarImage src={feedback.submittedBy.avatar} alt={feedback.submittedBy.name} />
          <AvatarFallback>{feedback.submittedBy.name.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div>
          <div className="flex items-center space-x-2">
            <p className="text-sm font-medium">{feedback.title}</p>
            {feedback.ticketId && (
              <Badge variant="outline" className="h-5 text-xs">{feedback.ticketId}</Badge>
            )}
          </div>
          <div className="flex items-center space-x-2 mt-1">
            <p className="text-xs text-muted-foreground">
              {new Date(feedback.submittedAt).toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
            <Badge variant="outline" className={cn("h-5 text-xs capitalize", typeClasses[feedback.type])}>
              {feedback.type}
            </Badge>
          </div>
        </div>
      </div>
      <Badge variant="outline" className={cn("h-6 capitalize", statusClasses[feedback.status])}>
        {feedback.status}
      </Badge>
    </div>
  );
};

export default RecentFeedback;

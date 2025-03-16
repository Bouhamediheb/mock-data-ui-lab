
export type Priority = 'low' | 'medium' | 'high' | 'critical';
export type Status = 'to do' | 'in progress' | 'review' | 'done';
export type FeedbackType = 'bug' | 'improvement' | 'feature';

export interface JiraTicket {
  id: string;
  title: string;
  description: string;
  status: Status;
  priority: Priority;
  assignee: User;
  reporter: User;
  createdAt: string;
  updatedAt: string;
  tags: string[];
  timeEstimate: number; // in hours
  timeSpent: number; // in hours
  linkedTickets?: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: string;
  department: string;
}

export interface Feedback {
  id: string;
  title: string;
  description: string;
  type: FeedbackType;
  submittedBy: User;
  submittedAt: string;
  status: 'new' | 'acknowledged' | 'implemented' | 'rejected';
  ticketId?: string;
}

export interface ChangeNotification {
  id: string;
  message: string;
  ticketId: string;
  timestamp: string;
  user: User;
  seen: boolean;
}

export interface StatSummary {
  totalTasks: number;
  completedTasks: number;
  pendingFeedback: number;
  delayedTasks: number;
  avgResolutionTime: number; // in hours
}

export interface TimelineItem {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  type: 'ticket' | 'feedback' | 'notification';
  user: User;
  relatedId: string;
}

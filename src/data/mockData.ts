
import { JiraTicket, User, Feedback, ChangeNotification, StatSummary, TimelineItem } from '@/types';

// Mock Users
export const users: User[] = [
  {
    id: 'user1',
    name: 'Alex Morgan',
    email: 'alex.morgan@example.com',
    avatar: 'https://i.pravatar.cc/150?img=1',
    role: 'Senior QA Engineer',
    department: 'Quality Assurance'
  },
  {
    id: 'user2',
    name: 'Taylor Swift',
    email: 'taylor.swift@example.com',
    avatar: 'https://i.pravatar.cc/150?img=2',
    role: 'Software Engineer',
    department: 'Development'
  },
  {
    id: 'user3',
    name: 'James Wilson',
    email: 'james.wilson@example.com',
    avatar: 'https://i.pravatar.cc/150?img=3',
    role: 'Product Manager',
    department: 'Product'
  },
  {
    id: 'user4',
    name: 'Lena Kim',
    email: 'lena.kim@example.com',
    avatar: 'https://i.pravatar.cc/150?img=4',
    role: 'UX Designer',
    department: 'Design'
  },
  {
    id: 'user5',
    name: 'Rajiv Patel',
    email: 'rajiv.patel@example.com',
    avatar: 'https://i.pravatar.cc/150?img=5',
    role: 'DevOps Engineer',
    department: 'Infrastructure'
  }
];

// Mock Jira Tickets
export const jiraTickets: JiraTicket[] = [
  {
    id: 'TRACK-101',
    title: 'Implement real-time notifications system',
    description: 'Create a system that sends notifications when Jira tickets are updated or have status changes.',
    status: 'in progress',
    priority: 'high',
    assignee: users[1],
    reporter: users[2],
    createdAt: '2023-05-15T10:30:00Z',
    updatedAt: '2023-05-16T14:22:00Z',
    tags: ['frontend', 'notifications'],
    timeEstimate: 16,
    timeSpent: 8,
    linkedTickets: ['TRACK-105']
  },
  {
    id: 'TRACK-102',
    title: 'Design unified dashboard for task tracking',
    description: 'Create a dashboard that displays task statuses, feedback summaries, and Jira ticket changes.',
    status: 'review',
    priority: 'high',
    assignee: users[3],
    reporter: users[2],
    createdAt: '2023-05-14T09:20:00Z',
    updatedAt: '2023-05-17T11:45:00Z',
    tags: ['design', 'dashboard'],
    timeEstimate: 20,
    timeSpent: 18
  },
  {
    id: 'TRACK-103',
    title: 'Setup daily automated reminders',
    description: 'Implement a system to send daily reminders to testers for submitting feedback before 10 AM.',
    status: 'to do',
    priority: 'medium',
    assignee: users[0],
    reporter: users[2],
    createdAt: '2023-05-16T15:10:00Z',
    updatedAt: '2023-05-16T15:10:00Z',
    tags: ['automation', 'reminders'],
    timeEstimate: 8,
    timeSpent: 0
  },
  {
    id: 'TRACK-104',
    title: 'Jira API integration for task management',
    description: 'Integrate with Jira API to automate task assignment and prioritization based on ticket details.',
    status: 'done',
    priority: 'critical',
    assignee: users[4],
    reporter: users[2],
    createdAt: '2023-05-10T08:45:00Z',
    updatedAt: '2023-05-15T16:30:00Z',
    tags: ['backend', 'integration', 'api'],
    timeEstimate: 24,
    timeSpent: 30
  },
  {
    id: 'TRACK-105',
    title: 'Task delay detection algorithm',
    description: 'Create an algorithm that flags tasks that have been pending for too long or consistently delayed.',
    status: 'in progress',
    priority: 'medium',
    assignee: users[1],
    reporter: users[0],
    createdAt: '2023-05-12T13:20:00Z',
    updatedAt: '2023-05-16T10:15:00Z',
    tags: ['algorithm', 'optimization'],
    timeEstimate: 16,
    timeSpent: 10,
    linkedTickets: ['TRACK-101']
  },
  {
    id: 'TRACK-106',
    title: 'User authentication system',
    description: 'Implement secure authentication for the feedback and tracking system.',
    status: 'to do',
    priority: 'high',
    assignee: users[1],
    reporter: users[2],
    createdAt: '2023-05-17T09:30:00Z',
    updatedAt: '2023-05-17T09:30:00Z',
    tags: ['security', 'authentication'],
    timeEstimate: 12,
    timeSpent: 0
  },
  {
    id: 'TRACK-107',
    title: 'Feedback submission form',
    description: 'Create an intuitive form for testers to submit detailed feedback.',
    status: 'done',
    priority: 'medium',
    assignee: users[3],
    reporter: users[0],
    createdAt: '2023-05-08T11:45:00Z',
    updatedAt: '2023-05-12T14:30:00Z',
    tags: ['frontend', 'feedback'],
    timeEstimate: 10,
    timeSpent: 8
  }
];

// Mock Feedback
export const feedbacks: Feedback[] = [
  {
    id: 'FB-001',
    title: 'Notification sounds needed',
    description: 'Please add audio alerts for important notifications to draw attention.',
    type: 'improvement',
    submittedBy: users[0],
    submittedAt: '2023-05-16T09:15:00Z',
    status: 'new',
    ticketId: 'TRACK-101'
  },
  {
    id: 'FB-002',
    title: 'Dashboard loading too slowly',
    description: 'The dashboard takes more than 5 seconds to load on slower connections.',
    type: 'bug',
    submittedBy: users[0],
    submittedAt: '2023-05-15T14:30:00Z',
    status: 'acknowledged',
    ticketId: 'TRACK-102'
  },
  {
    id: 'FB-003',
    title: 'Add export functionality for reports',
    description: 'Would be helpful to export dashboard data to PDF or Excel.',
    type: 'feature',
    submittedBy: users[3],
    submittedAt: '2023-05-14T10:45:00Z',
    status: 'implemented',
    ticketId: 'TRACK-102'
  },
  {
    id: 'FB-004',
    title: 'Reminders should be configurable',
    description: 'Allow users to set their preferred reminder time instead of fixed 10 AM.',
    type: 'improvement',
    submittedBy: users[0],
    submittedAt: '2023-05-17T08:50:00Z',
    status: 'new',
    ticketId: 'TRACK-103'
  },
  {
    id: 'FB-005',
    title: 'API connection intermittently fails',
    description: 'Sometimes the Jira API connection drops, requiring a page refresh.',
    type: 'bug',
    submittedBy: users[4],
    submittedAt: '2023-05-13T16:20:00Z',
    status: 'rejected',
    ticketId: 'TRACK-104'
  }
];

// Mock Change Notifications
export const notifications: ChangeNotification[] = [
  {
    id: 'NOTIF-001',
    message: 'Status changed from "To Do" to "In Progress"',
    ticketId: 'TRACK-101',
    timestamp: '2023-05-16T14:22:00Z',
    user: users[1],
    seen: false
  },
  {
    id: 'NOTIF-002',
    message: 'New feedback submitted for your ticket',
    ticketId: 'TRACK-101',
    timestamp: '2023-05-16T09:15:00Z',
    user: users[0],
    seen: true
  },
  {
    id: 'NOTIF-003',
    message: 'Status changed from "In Progress" to "Review"',
    ticketId: 'TRACK-102',
    timestamp: '2023-05-17T11:45:00Z',
    user: users[3],
    seen: false
  },
  {
    id: 'NOTIF-004',
    message: 'Task flagged for delay - pending for 5 days',
    ticketId: 'TRACK-103',
    timestamp: '2023-05-16T15:10:00Z',
    user: users[2],
    seen: true
  },
  {
    id: 'NOTIF-005',
    message: 'Status changed from "Review" to "Done"',
    ticketId: 'TRACK-104',
    timestamp: '2023-05-15T16:30:00Z',
    user: users[4],
    seen: true
  }
];

// Mock Statistics
export const statistics: StatSummary = {
  totalTasks: 7,
  completedTasks: 2,
  pendingFeedback: 3,
  delayedTasks: 1,
  avgResolutionTime: 72 // 3 days in hours
};

// Mock Timeline
export const timeline: TimelineItem[] = [
  {
    id: 'TL-001',
    title: 'Status Update',
    description: 'Changed status from "To Do" to "In Progress"',
    timestamp: '2023-05-16T14:22:00Z',
    type: 'ticket',
    user: users[1],
    relatedId: 'TRACK-101'
  },
  {
    id: 'TL-002',
    title: 'New Feedback',
    description: 'Submitted feedback on notification system',
    timestamp: '2023-05-16T09:15:00Z',
    type: 'feedback',
    user: users[0],
    relatedId: 'FB-001'
  },
  {
    id: 'TL-003',
    title: 'Status Update',
    description: 'Changed status from "In Progress" to "Review"',
    timestamp: '2023-05-17T11:45:00Z',
    type: 'ticket',
    user: users[3],
    relatedId: 'TRACK-102'
  },
  {
    id: 'TL-004',
    title: 'Task Flagged',
    description: 'Task automatically flagged for delay',
    timestamp: '2023-05-16T15:10:00Z',
    type: 'notification',
    user: users[2],
    relatedId: 'NOTIF-004'
  },
  {
    id: 'TL-005',
    title: 'Status Update',
    description: 'Changed status from "Review" to "Done"',
    timestamp: '2023-05-15T16:30:00Z',
    type: 'ticket',
    user: users[4],
    relatedId: 'TRACK-104'
  }
];

// Helper for ticket status distribution
export const getStatusDistribution = () => {
  const statusCounts = {
    'to do': 0,
    'in progress': 0,
    'review': 0,
    'done': 0
  };
  
  jiraTickets.forEach(ticket => {
    statusCounts[ticket.status]++;
  });
  
  return [
    { name: 'To Do', value: statusCounts['to do'] },
    { name: 'In Progress', value: statusCounts['in progress'] },
    { name: 'Review', value: statusCounts['review'] },
    { name: 'Done', value: statusCounts['done'] }
  ];
};

// Helper for priority distribution
export const getPriorityDistribution = () => {
  const priorityCounts = {
    'low': 0,
    'medium': 0,
    'high': 0,
    'critical': 0
  };
  
  jiraTickets.forEach(ticket => {
    priorityCounts[ticket.priority]++;
  });
  
  return [
    { name: 'Low', value: priorityCounts['low'] },
    { name: 'Medium', value: priorityCounts['medium'] },
    { name: 'High', value: priorityCounts['high'] },
    { name: 'Critical', value: priorityCounts['critical'] }
  ];
};

// Helper for feedback type distribution
export const getFeedbackTypeDistribution = () => {
  const typeCounts = {
    'bug': 0,
    'improvement': 0,
    'feature': 0
  };
  
  feedbacks.forEach(feedback => {
    typeCounts[feedback.type]++;
  });
  
  return [
    { name: 'Bugs', value: typeCounts['bug'] },
    { name: 'Improvements', value: typeCounts['improvement'] },
    { name: 'Features', value: typeCounts['feature'] }
  ];
};

// Helper for recent activity
export const getRecentActivity = () => {
  return timeline.sort((a, b) => 
    new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  ).slice(0, 5);
};

// Weekly task completion data
export const weeklyTaskCompletion = [
  { name: 'Mon', completed: 3, estimated: 4 },
  { name: 'Tue', completed: 2, estimated: 3 },
  { name: 'Wed', completed: 4, estimated: 4 },
  { name: 'Thu', completed: 1, estimated: 3 },
  { name: 'Fri', completed: 5, estimated: 5 },
  { name: 'Sat', completed: 0, estimated: 0 },
  { name: 'Sun', completed: 0, estimated: 0 }
];

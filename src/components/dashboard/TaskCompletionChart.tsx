
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { weeklyTaskCompletion } from '@/data/mockData';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-brand-dark p-3 rounded-md border border-brand-darkest shadow-lg">
        <p className="text-sm font-medium mb-1">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={`tooltip-${index}`} className="text-xs" style={{ color: entry.color }}>
            {entry.name}: {entry.value} tasks
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const TaskCompletionChart = () => {
  return (
    <Card className="h-full bg-brand-dark border-brand-dark/60 hover:border-brand-green/30 transition-all duration-300 card-hover">
      <CardHeader>
        <CardTitle className="text-md font-medium">Weekly Task Completion</CardTitle>
        <CardDescription>Completed vs estimated tasks</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[250px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={weeklyTaskCompletion}
              margin={{ top: 5, right: 5, left: -20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis 
                dataKey="name" 
                tick={{ fill: 'hsl(var(--muted-foreground))' }}
                axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
              />
              <YAxis 
                tick={{ fill: 'hsl(var(--muted-foreground))' }}
                axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                wrapperStyle={{ 
                  padding: '10px 0 0 0',
                  fontSize: '12px',
                  color: 'hsl(var(--muted-foreground))'
                }} 
              />
              <Bar dataKey="estimated" name="Estimated" fill="#666666" radius={[4, 4, 0, 0]} />
              <Bar dataKey="completed" name="Completed" fill="#B4F479" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskCompletionChart;

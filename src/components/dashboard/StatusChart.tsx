
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface StatusChartProps {
  data: { name: string; value: number }[];
  title: string;
  colors?: string[];
}

const COLORS = ['#B4F479', '#4ADE80', '#2DD4BF', '#818CF8'];
const DEFAULT_COLORS = ['#B4F479', '#60A5FA', '#F59E0B', '#EF4444'];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-brand-dark p-3 rounded-md border border-brand-darkest shadow-lg">
        <p className="text-sm font-medium">{payload[0].name}: {payload[0].value}</p>
      </div>
    );
  }
  return null;
};

const StatusChart = ({ data, title, colors = DEFAULT_COLORS }: StatusChartProps) => {
  // Calculate total to show percentage
  const total = data.reduce((sum, item) => sum + item.value, 0);

  // If total is 0, show empty state
  if (total === 0) {
    return (
      <Card className="h-full bg-brand-dark border-brand-dark/60">
        <CardHeader className="pb-2">
          <CardTitle className="text-md font-medium">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center h-[180px]">
          <p className="text-muted-foreground text-sm">No data available</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="h-full bg-brand-dark border-brand-dark/60 hover:border-brand-green/30 transition-all duration-300 card-hover">
      <CardHeader className="pb-2">
        <CardTitle className="text-md font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[180px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={70}
                paddingAngle={2}
                dataKey="value"
                strokeWidth={2}
                stroke="rgba(0, 0, 0, 0.1)"
                animationBegin={200}
                animationDuration={800}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="grid grid-cols-2 gap-2 mt-2">
          {data.map((entry, index) => (
            <div key={`legend-${index}`} className="flex items-center">
              <div
                className="w-3 h-3 rounded-sm mr-2"
                style={{ backgroundColor: colors[index % colors.length] }}
              />
              <span className="text-xs flex-1 truncate">{entry.name}</span>
              <span className="text-xs font-medium">
                {Math.round((entry.value / total) * 100)}%
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default StatusChart;

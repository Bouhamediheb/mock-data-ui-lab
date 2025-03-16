
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { cva } from 'class-variance-authority';

const statVariants = cva(
  "inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset",
  {
    variants: {
      variant: {
        default: "bg-secondary/50 text-secondary-foreground ring-secondary",
        positive: "bg-green-500/20 text-green-500 ring-green-500/30",
        caution: "bg-yellow-500/20 text-yellow-500 ring-yellow-500/30",
        negative: "bg-red-500/20 text-red-500 ring-red-500/30",
        info: "bg-brand-green/20 text-brand-green ring-brand-green/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: {
    value: string | number;
    direction: 'up' | 'down' | 'neutral';
    label: string;
  };
  variant?: 'default' | 'positive' | 'caution' | 'negative' | 'info';
  className?: string;
}

const StatCard = ({
  title,
  value,
  icon,
  trend,
  variant = 'default',
  className,
}: StatCardProps) => {
  return (
    <Card className={cn("bg-brand-dark border-brand-dark/60 overflow-hidden group transition-all duration-300 hover:border-brand-green/30 card-hover", className)}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <h3 className="text-2xl font-bold mt-1">{value}</h3>
            {trend && (
              <div className="mt-2">
                <span
                  className={statVariants({
                    variant: 
                      trend.direction === 'up' 
                        ? variant === 'negative' ? 'negative' : 'positive'
                        : trend.direction === 'down'
                          ? variant === 'negative' ? 'positive' : 'negative'
                          : 'info',
                  })}
                >
                  {trend.value} {trend.label}
                </span>
              </div>
            )}
          </div>
          <div className="p-2 rounded-full bg-brand-darker/50 group-hover:bg-brand-green/10 transition-colors duration-300">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;

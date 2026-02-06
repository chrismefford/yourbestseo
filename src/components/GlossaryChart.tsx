import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, PieChart, Pie, Cell } from 'recharts';

const CHART_COLORS = ['hsl(40, 91%, 55%)', 'hsl(220, 25%, 30%)', 'hsl(220, 25%, 40%)', 'hsl(220, 25%, 50%)', 'hsl(220, 25%, 60%)'];

interface ChartData {
  type: 'bar' | 'pie';
  title: string;
  data: { name: string; value: number; color?: string }[];
}

interface GlossaryChartProps {
  chartData: ChartData;
}

const GlossaryChart = ({ chartData }: GlossaryChartProps) => {
  const chartConfig = chartData.data.reduce((acc, item, index) => {
    acc[item.name] = {
      label: item.name,
      color: item.color || CHART_COLORS[index % CHART_COLORS.length],
    };
    return acc;
  }, {} as Record<string, { label: string; color: string }>);

  return (
    <div className="p-6 rounded-xl bg-card border border-border/50">
      <ChartContainer config={chartConfig} className="h-64 w-full">
        {chartData.type === 'bar' ? (
          <BarChart data={chartData.data}>
            <XAxis dataKey="name" tick={{ fill: 'hsl(215, 15%, 60%)', fontSize: 12 }} />
            <YAxis tick={{ fill: 'hsl(215, 15%, 60%)', fontSize: 12 }} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="value" fill="hsl(40, 91%, 55%)" radius={[4, 4, 0, 0]} />
          </BarChart>
        ) : (
          <PieChart>
            <Pie
              data={chartData.data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              dataKey="value"
              label={({ name, percent }: { name: string; percent: number }) => 
                `${name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {chartData.data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />
              ))}
            </Pie>
            <ChartTooltip content={<ChartTooltipContent />} />
          </PieChart>
        )}
      </ChartContainer>
    </div>
  );
};

export default GlossaryChart;

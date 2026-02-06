import { lazy, Suspense } from 'react';

// Lazy load recharts components - they're heavy (~200KB)
const LazyBarChart = lazy(() => 
  import('recharts').then(module => ({ default: module.BarChart }))
);
const LazyBar = lazy(() => 
  import('recharts').then(module => ({ default: module.Bar }))
);
const LazyXAxis = lazy(() => 
  import('recharts').then(module => ({ default: module.XAxis }))
);
const LazyYAxis = lazy(() => 
  import('recharts').then(module => ({ default: module.YAxis }))
);
const LazyPieChart = lazy(() => 
  import('recharts').then(module => ({ default: module.PieChart }))
);
const LazyPie = lazy(() => 
  import('recharts').then(module => ({ default: module.Pie }))
);
const LazyCell = lazy(() => 
  import('recharts').then(module => ({ default: module.Cell }))
);
const LazyResponsiveContainer = lazy(() => 
  import('recharts').then(module => ({ default: module.ResponsiveContainer }))
);
const LazyTooltip = lazy(() => 
  import('recharts').then(module => ({ default: module.Tooltip }))
);

const CHART_COLORS = ['#F59E0B', '#10B981', '#3B82F6', '#8B5CF6', '#EC4899'];

interface ChartData {
  type: 'bar' | 'pie';
  title: string;
  data: { name: string; value: number }[];
}

interface LazyChartProps {
  chartData: ChartData;
  className?: string;
}

const ChartFallback = () => (
  <div className="h-64 w-full flex items-center justify-center bg-card/30 rounded-xl animate-pulse">
    <span className="text-muted-foreground text-sm">Loading chart...</span>
  </div>
);

export const LazyChart = ({ chartData, className = "" }: LazyChartProps) => {
  return (
    <Suspense fallback={<ChartFallback />}>
      <div className={`h-64 ${className}`}>
        <LazyResponsiveContainer width="100%" height="100%">
          {chartData.type === 'bar' ? (
            <LazyBarChart data={chartData.data}>
              <LazyXAxis dataKey="name" tick={{ fill: '#9CA3AF' }} />
              <LazyYAxis tick={{ fill: '#9CA3AF' }} />
              <LazyTooltip
                contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }}
                labelStyle={{ color: '#F9FAFB' }}
              />
              <LazyBar dataKey="value" fill="#F59E0B" radius={[4, 4, 0, 0]} />
            </LazyBarChart>
          ) : (
            <LazyPieChart>
              <LazyPie
                data={chartData.data}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label={({ name, percent }: { name: string; percent: number }) => 
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
              >
                {chartData.data.map((_, index) => (
                  <LazyCell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />
                ))}
              </LazyPie>
              <LazyTooltip
                contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }}
                labelStyle={{ color: '#F9FAFB' }}
              />
            </LazyPieChart>
          )}
        </LazyResponsiveContainer>
      </div>
    </Suspense>
  );
};

export default LazyChart;

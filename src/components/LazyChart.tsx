import { lazy, Suspense } from 'react';

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

const ChartInner = lazy(() => import('./ChartInner'));

export const LazyChart = ({ chartData, className = "" }: LazyChartProps) => {
  return (
    <Suspense fallback={<ChartFallback />}>
      <ChartInner chartData={chartData} className={className} />
    </Suspense>
  );
};

export default LazyChart;

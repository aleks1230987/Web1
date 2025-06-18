import { BarChart, LineChart } from '@mui/x-charts';
import Container from '@mui/material/Container';
import { tGroup } from "../groupdata";

type GroupChartProps = {
  data: tGroup;
  series: {
    'Максимальная высота': boolean;
    'Средняя высота': boolean;
    'Минимальная высота': boolean;
  };
  isBar: boolean;
};

function GroupChart({ data, series, isBar }: GroupChartProps) {
  const chartSetting = {
    yAxis: [{ label: 'Высота (м)' }],
    height: 400,
  };

  const numSelectedSeries = Object.values(series).filter(Boolean).length;
  const seriesY = Object.entries(series)
    .filter(item => item[1])
    .map(item => ({ 
      dataKey: item[0], 
      label: item[0],
      ...(Object.keys(series).filter(k => series[k as keyof typeof series]).length === 1 
    ? { valueFormatter: (value: number | null) => value !== null ? `${value} м` : '' } 
    : {})
    }));

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      {isBar ? (
        <BarChart
          dataset={data}
          xAxis={[{ scaleType: 'band', dataKey: 'Группа' }]}
          series={seriesY}
          slotProps={{
          legend: {
          position: { vertical: 'bottom', horizontal: 'center' },
          },
          }}

          {...chartSetting}
          barLabel={numSelectedSeries === 1 ? "value" : undefined}
        />
      ) : (
        <LineChart
          dataset={data}
          xAxis={[{ scaleType: 'band', dataKey: 'Группа' }]}
          series={seriesY}
          slotProps={{
          legend: {
          position: { vertical: 'bottom', horizontal: 'center' },
          },
          }}

          {...chartSetting}
        />
      )}
    </Container>
  );
}

export default GroupChart;
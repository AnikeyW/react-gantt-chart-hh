interface IChart {
  id: number,
  title: string,
  period_start: string,
  period_end: string,
  sub: IChart[],
}

export interface IChartGant {
  project: string,
  period: string,
  chart: IChart
}



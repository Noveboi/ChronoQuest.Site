export type ChartProps = {
    type: 'line' | 'bar' | 'pie'
    datasets: ChartDatasets
    title?: string
    xLabels?: any[]
    xAxis?: AxisOptions
    yAxis?: AxisOptions
}

export type ChartDatasets = {
    data: any[]
}[];

type AxisOptions = {
    display?: boolean,
    min?: number,
    max?: number
}
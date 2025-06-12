export type ChartProps = {
    type: 'line' | 'bar' | 'pie'
    datasets: ChartDatasets
    labels?: any[]
    title?: string
    xLabels?: any[]
    xAxis?: AxisOptions
    yAxis?: AxisOptions
    showLegend?: boolean
}

export type ChartDatasets = {
    data: any[],
    colorPalette?: string[]
}[];

export type ChartData = {
    labels?: any[]
    xLabels?: any[],
    datasets: ChartDatasets
}

type AxisOptions = {
    display?: boolean,
    min?: number,
    max?: number
}
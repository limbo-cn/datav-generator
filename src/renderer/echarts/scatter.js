import Common from './common'
// import merge from 'lodash/merge'
export default {
    getMockBasicScatter() {
        return {
            title: Common.getCommonTitle(),
            legend: Common.getCommonLegend(),
            grid: Common.getCommonGrid(),
            tooltip: Common.getCommonyTooltip(),
            xAxis: Common.getCommonxAxis(),
            yAxis: Common.getCommonyAxis(),
            dataset: {
                source: [
                    [10.0, 8.04],
                    [8.0, 6.95],
                    [13.0, 7.58],
                    [9.0, 8.81],
                    [11.0, 8.33],
                    [14.0, 9.96],
                    [6.0, 7.24],
                    [4.0, 4.26],
                    [12.0, 10.84],
                    [7.0, 4.82],
                    [5.0, 5.68]
                ]
            },
            series: [{
                symbolSize: 25,
                type: 'scatter'
            }],
            data: Common.getCommonData()
        }
    }
}

import Common from './common'
import merge from 'lodash/merge'
export default {
    getMockBasicScatter() {
        return {
            title: Common.getCommonTitle(),
            legend: Common.getCommonLegend(),
            grid: Common.getCommonGrid(),
            tooltip: Common.getCommonyTooltip(),
            xAxis: merge(Common.getCommonxAxis(), { type: 'value' }),
            yAxis: Common.getCommonyAxis(),
            series: [{
                symbolSize: 20,
                data: [
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
                ],
                type: 'scatter',
                name: '2019'
            },
            {
                symbolSize: 20,
                data: [
                    [12.3, 5.38],
                    [4.3, 7.25],
                    [14.4, 8.58],
                    [9.9, 9.81]
                ],
                type: 'scatter',
                name: '2020'
            }],
            data: Common.getCommonData()
        }
    }
}

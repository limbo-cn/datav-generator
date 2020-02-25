import Common from './common'
import merge from 'lodash/merge'
export default {
    getMockBasicBar() {
        return {
            title: Common.getCommonTitle(),
            legend: Common.getCommonLegend(),
            grid: Common.getCommonGrid(),
            xAxis: merge(Common.getCommonxAxis(), { data: ['Matcha Latte', 'Milk Tea', 'Cheese Cocoa', 'Walnut Brownie'] }),
            yAxis: Common.getCommonyAxis(),
            tooltip: merge(Common.getCommonyTooltip(), {
                trigger: 'axis'
            }),
            // dataset: Common.getCommonDataset(),
            series: [
                {
                    type: 'bar',
                    name: '2018',
                    data: [89.3, 92.1, 94.4, 85.4]
                },
                {
                    type: 'bar',
                    name: '2019',
                    data: [95.8, 89.4, 91.2, 76.9]
                },
                {
                    type: 'bar',
                    name: '2020',
                    data: [97.7, 83.1, 92.5, 78.1]
                }
            ],
            data: Common.getCommonData()
        }
    }
}

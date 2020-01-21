import Common from './common'
import merge from 'lodash/merge'
export default {
    getMockBasicLine() {
        return {
            title: Common.getCommonTitle(),
            legend: Common.getCommonLegend(),
            grid: Common.getCommonGrid(),
            xAxis: Common.getCommonxAxis(),
            yAxis: Common.getCommonyAxis(),
            tooltip: merge(Common.getCommonyTooltip(), {
                trigger: 'axis'
            }),
            dataset: Common.getCommonDataset(),
            series: [{
                type: 'line'
            }, {
                type: 'line'
            }],
            data: Common.getCommonData()
        }
    }
}

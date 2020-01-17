import Common from './common'
import merge from 'lodash/merge'
export default {
    getMockBasicBar() {
        return {
            title: Common.getCommonTitle(),
            legend: Common.getCommonLegend(),
            grid: Common.getCommonGrid(),
            xAxis: merge(Common.getCommonxAxis(), {
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            }),
            yAxis: Common.getCommonyAxis(),
            tooltip: merge(Common.getCommonyTooltip(), {
                trigger: 'axis'
            }),
            series: [
                {
                    type: 'bar',
                    barWidth: '60%',
                    data: [10, 52, 200, 334, 390, 330, 220]
                }
            ]
        }
    }
}

import Common from './common'
// import merge from 'lodash/merge'
export default {
    getMockBasicGauge() {
        return {
            title: Common.getCommonTitle(),
            legend: Common.getCommonLegend(),
            grid: Common.getCommonGrid(),
            tooltip: Common.getCommonyTooltip(),
            series: [
                {
                    name: 'sample',
                    radius: '50%',
                    label: {
                        fontSize: 24
                    },
                    type: 'gauge',
                    detail: { formatter: '{value}%' },
                    data: [{ value: 50, name: 'cent' }]
                }
            ],
            data: Common.getCommonData()
        }
    }
}

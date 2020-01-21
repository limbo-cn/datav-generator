import Common from './common'
// import merge from 'lodash/merge'
export default {
    getMockBasicPie() {
        return {
            title: Common.getCommonTitle(),
            legend: Common.getCommonLegend(),
            grid: Common.getCommonGrid(),
            tooltip: Common.getCommonyTooltip(),
            series: [
                {
                    type: 'pie',
                    roseType: '',
                    radius: '50%',
                    label: {
                        fontSize: 24
                    },
                    data: [
                        { value: 335, name: '1' },
                        { value: 310, name: '2' },
                        { value: 234, name: '3' },
                        { value: 135, name: '4' },
                        { value: 1548, name: '5' }
                    ]
                }
            ],
            data: Common.getCommonData()
        }
    }
}

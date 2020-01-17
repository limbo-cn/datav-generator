import Common from './common'
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
                    radius: '55%',
                    center: ['50%', '50%'],
                    data: [
                        { value: 335, name: '1' },
                        { value: 310, name: '2' },
                        { value: 234, name: '3' },
                        { value: 135, name: '4' },
                        { value: 1548, name: '5' }
                    ]
                }
            ]
        }
    }
}

export default {
    getMockBasicBar() {
        return {
            tooltip: {},
            legend: {
                data: ['mock']
            },
            xAxis: {
                data: ['1', '2', '3', '4', '5', '6']
            },
            yAxis: {

            },
            series: [{
                name: 'mock',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        }
    }
}

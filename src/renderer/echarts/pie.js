export default {
    getMockBasicPie() {
        return {
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
    },
    getMockVPie() {
        var option = {
            title: {
                text: 'Mock Pie',
                left: 'center',
                top: 20,
                textStyle: {
                    color: '#fff',
                    fontSize: 32
                }
            },

            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },

            series: [
                {
                    name: 'mock',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '50%'],
                    data: [
                        { value: 335, name: '1' },
                        { value: 310, name: '2' },
                        { value: 274, name: '3' },
                        { value: 235, name: '4' },
                        { value: 400, name: '5' }
                    ].sort(function (a, b) { return a.value - b.value }),
                    roseType: 'radius',
                    label: {
                        normal: {
                            textStyle: {
                                color: 'rgba(255, 255, 255, 1)',
                                fontSize: 26
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 1)'
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#c23531',
                            shadowBlur: 200,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },

                    animationType: 'scale',
                    animationEasing: 'elasticOut',
                    animationDelay: function (idx) {
                        return Math.random() * 200
                    }
                }
            ]
        }
        return option
    }
}

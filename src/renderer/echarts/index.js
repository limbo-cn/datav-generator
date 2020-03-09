import Line from './line'
import Bar from './bar'
import Pie from './pie'
import Scatter from './scatter'
import Gauge from './gauge'

export default {
    getListData() {
        const data = [
            {
                type: 'line',
                icon: '#icon-jibenzhexiantu',
                title: '折线图',
                categorys: [
                    {
                        title: '基本折线图',
                        image: './static/images/line-simple.jpg',
                        option: Line.getMockBasicLine
                    }
                ]
            },
            {
                type: 'bar',
                icon: '#icon-jibenzhuzhuangtu',
                title: '柱状图',
                categorys: [
                    {
                        title: '基本柱状图',
                        image: './static/images/bar-simple.png',
                        option: Bar.getMockBasicBar
                    }
                ]
            },
            {
                type: 'pie',
                icon: '#icon-bingtu',
                title: '饼图',
                categorys: [
                    {
                        title: '基本饼图',
                        image: './static/images/pie-simple.png',
                        option: Pie.getMockBasicPie
                    }
                ]
            },
            {
                type: 'scatter',
                icon: '#icon-bingtu',
                title: '散点图',
                categorys: [
                    {
                        title: '基本散点图',
                        image: './static/images/scatter-simple.png',
                        option: Scatter.getMockBasicScatter
                    }
                ]
            },
            {
                type: 'gauge',
                icon: '#icon-bingtu',
                title: '仪表盘',
                categorys: [
                    {
                        title: '基本仪表盘',
                        image: './static/images/gauge-simple.png',
                        option: Gauge.getMockBasicGauge
                    }
                ]
            }
        ]
        return data
    }
}

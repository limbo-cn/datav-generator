export default {
    getCommonTitle() {
        return {
            text: 'title',
            show: false,
            textStyle: {
                color: '#fff',
                fontSize: 48
            },
            left: 'center',
            top: 0
        }
    },
    getCommonLegend() {
        return {
            show: false,
            bottom: 20
        }
    },
    getCommonGrid() {
        return {
            top: 50,
            right: 50,
            bottom: 50,
            left: 50
        }
    },
    getCommonxAxis() {
        return {
            show: true,
            type: 'category',
            name: '',
            nameTextStyle: {
                fontSize: 24
            },
            inverse: false,
            boundaryGap: true,
            axisLabel: {
                fontSize: 16
            }
        }
    },
    getCommonyAxis() {
        return {
            show: true,
            type: 'value',
            name: '',
            nameTextStyle: {
                fontSize: 24
            },
            inverse: false,
            boundaryGap: true,
            axisLabel: {
                fontSize: 16
            }
        }
    },
    getCommonyTooltip() {
        return {
            show: true,
            trigger: 'item',
            axisPointer: {
                type: 'cross'
            }
        }
    },
    getCommonDataset() {
        return {
            // 提供一份数据。
            source: [
                ['Mon', 820],
                ['Tue', 932],
                ['Wed', 901],
                ['Thu', 934],
                ['Fri', 1290],
                ['Sat', 1330],
                ['Sun', 1320]
            ]
        }
    },
    getCommonData() {
        return {
            intervalAPI: {
                use: false,
                url: '',
                interval: 60
            }
        }
    }
}

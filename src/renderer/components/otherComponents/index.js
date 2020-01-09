import merge from 'lodash/merge'
export default {
    getListData() {
        const data = [
            {
                type: 'placeholder',
                icon: '#icon-jibenzhexiantu',
                title: '空白区域',
                defaultLayout: { 'x': 16, 'y': 9, 'w': 4, 'h': 4, 'i': 0 }
            },
            {
                type: 'text',
                icon: '#icon-jibenzhexiantu',
                title: '文字',
                defaultLayout: { 'x': 16, 'y': 9, 'w': 8, 'h': 2, 'i': 0 }
            },
            {
                type: 'image',
                icon: '#icon-jibenzhexiantu',
                title: '图片',
                defaultLayout: { 'x': 16, 'y': 9, 'w': 3, 'h': 4, 'i': 0 }
            },
            {
                type: 'svg',
                icon: '#icon-jibenzhexiantu',
                title: 'SVG',
                defaultLayout: { 'x': 16, 'y': 9, 'w': 3, 'h': 4, 'i': 0 }
            },
            {
                type: 'slider',
                icon: '#icon-jibenzhexiantu',
                title: '滑块',
                defaultLayout: { 'x': 16, 'y': 9, 'w': 8, 'h': 1, 'i': 0 }
            },
            {
                type: 'button',
                icon: '#icon-jibenzhuzhuangtu',
                title: '按钮',
                defaultLayout: { 'x': 16, 'y': 9, 'w': 2, 'h': 1, 'i': 0 }
            }
        ]
        return data
    },
    getDefaultOptionText(theme = 'default') {
        let basic = {
            textAlign: 'center',
            marginLeft: 0,
            marginTop: 0,
            fontSize: 50,
            text: 'default',
            animate: false
        }
        let themedOption = {
            default: {
                color: '#ffffff'
            }
        }
        return merge(basic, themedOption[theme])
    },
    getDefaultOptionImage(theme = 'default') {
        let basic = {
            type: 'network',
            url: '/static/images/empty_image.png',
            dataUrl: '',
            fit: 'fill'
        }
        let themedOption = {
            default: {

            }
        }
        return merge(basic, themedOption[theme])
    },
    getDefaultOptionSVG(theme = 'default') {
        let basic = {
            marginLeft: 0,
            marginTop: 0,
            svg: `<svg t="1578460627945" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2442" width="200" height="200"><path d="M187.733333 0h648.533334v1024H187.733333z" fill="#D10D0D" p-id="2443"></path><path d="M187.733333 0h648.533334v1024" fill="#8C0000" p-id="2444"></path><path d="M785.066667 972.8H238.933333V119.466667h34.133334v819.2h477.866666V119.466667h34.133334z" fill="#FFC50B" p-id="2445"></path><path d="M785.066667 972.8V119.466667h-34.133334v819.2zM273.066667 938.666667V119.466667h-34.133334" fill="#FF7C10" p-id="2446"></path><path d="M187.733333 138.24L512 298.666667l324.266667-160.426667V0H187.733333z" fill="#FF642E" p-id="2447"></path><path d="M512 300.373333l324.266667-162.133333V0H187.733333" fill="#FF0606" p-id="2448"></path><path d="M512 300.373333l324.266667-162.133333V0" fill="#D10D0D" p-id="2449"></path><path d="M512 602.453333m-175.786667 0a175.786667 175.786667 0 1 0 351.573334 0 175.786667 175.786667 0 1 0-351.573334 0Z" fill="#FFC50B" p-id="2450"></path><path d="M512 428.373333c97.28 0 175.786667 78.506667 175.786667 175.786667s-78.506667 174.08-175.786667 174.08" fill="#FF7C10" p-id="2451"></path><path d="M512.580267 694.389333l-90.5216-90.493866 90.496-90.519467 90.517333 90.496z" fill="#D10D0D" p-id="2452"></path><path d="M512 513.706667l90.453333 88.746666-90.453333 90.453334" fill="#8C0000" p-id="2453"></path><path d="M512 63.146667m-13.653333 0a13.653333 13.653333 0 1 0 27.306666 0 13.653333 13.653333 0 1 0-27.306666 0Z" fill="#FFC50B" p-id="2454"></path><path d="M512 133.12m-13.653333 0a13.653333 13.653333 0 1 0 27.306666 0 13.653333 13.653333 0 1 0-27.306666 0Z" fill="#FFC50B" p-id="2455"></path><path d="M512 203.093333m-13.653333 0a13.653333 13.653333 0 1 0 27.306666 0 13.653333 13.653333 0 1 0-27.306666 0Z" fill="#FFC50B" p-id="2456"></path><path d="M512 482.986667m-11.946667 0a11.946667 11.946667 0 1 0 23.893334 0 11.946667 11.946667 0 1 0-23.893334 0Z" fill="#8C0000" p-id="2457"></path><path d="M512 723.626667m-11.946667 0a11.946667 11.946667 0 1 0 23.893334 0 11.946667 11.946667 0 1 0-23.893334 0Z" fill="#8C0000" p-id="2458"></path><path d="M631.466667 602.453333m-11.946667 0a11.946667 11.946667 0 1 0 23.893333 0 11.946667 11.946667 0 1 0-23.893333 0Z" fill="#8C0000" p-id="2459"></path><path d="M392.533333 602.453333m-11.946666 0a11.946667 11.946667 0 1 0 23.893333 0 11.946667 11.946667 0 1 0-23.893333 0Z" fill="#8C0000" p-id="2460"></path></svg>`
        }
        let themedOption = {
            default: {

            }
        }
        return merge(basic, themedOption[theme])
    },
    getDefaultOptionSlider(theme = 'default') {
        let basic = {
            min: 0,
            max: 100,
            showStops: false,
            vertical: false,
            height: 200,
            step: 10,
            value: 20,
            showMarks: false,
            marks: JSON.stringify({ 20: 'no much', 50: 'narmal', 100: 'full' }),
            marginLeft: 0,
            marginTop: 0
        }
        let themedOption = {
            default: {

            }
        }
        return merge(basic, themedOption[theme])
    },
    getDefaultOptionButton(theme = 'default') {
        let basic = {
            textAlign: 'center',
            marginLeft: 0,
            marginTop: 0,
            text: 'default',
            size: 'medium'
        }
        let themedOption = {
            default: {

            }
        }
        return merge(basic, themedOption[theme])
    }
}

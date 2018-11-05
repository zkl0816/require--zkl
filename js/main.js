//配置路径
require.config({
    baseUrl: '/js/',
    paths: {
        'jquery': "libs/jquery",
        'scroll': "libs/better-scroll",
        'swiper': "libs/swiper-4.1.6.min",
        'child': "child",
        'index': 'libs/index'
    }
})
require(['index', 'child'])
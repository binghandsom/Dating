/**
 * Created at 6/7/15.
 * @Author Ling.
 * @Email i@zeroling.com
 */
require.config({
    baseUrl: "../../src/lib",
    paths: {
        avalon: "../../src/lib/avalon.mobile.shim",
        jquery: "jquery-2.1.3",

        dialog: "tools/jq.dialog",
        avaFilters: "tools/avaFilters",
        userCenter: "tools/userCenter",
        urls: "tools/urls",
        swiper: "tools/swiper",
        eventproxy: "tools/eventproxy",
        noop: "tools/noop",
        DateTimePicker: "tools/DateTimePicker",
        moment: "tools/moment",
        score: "tools/jq.score",
        navState: "tools/navState"
    }
});

//Logger
var log = window.console ? console.log.bind(console, "%c DEBUG! Ling: ", "background:#404040;color:#fff;border-radius:5px") : function(){};
var $$ = {}; //share vars obj

require([
    'avalon',
    'mmState',

    //状态页面
    'states/home',//主页
    //'states/collect',//收藏
    //'states/history', //历史记录
    //'states/litterLetter', //私信列表
    //'states/letters',//私信详情
    //'states/userInfo', //用户中心
    //'states/userInfoPublic', //公共用户界面
    //'states/userInfoEdit', //个人中心修改
    //'states/login', //登陆
    //'states/publishDating', //发布界面
    //'states/detail', //详情

], function(avalon) {
    avalon.history.start({
        basepath: "/"
    });

    avalon.router.navigate(avalon.history.fragment);
});
/**
 * Created by Liuchenling on 5/30/15.
 */
define('urls', function(){
    var urls = {
        "login": "../mock.php?type=login",
        "slider": "../mock.php?type=pics",
        "publish": "http://106.184.7.12:8002/index.php/api/date/createdate",
        "showBox": "http://106.184.7.12:8002/index.php/api/date/datelist",
        "category": "http://106.184.7.12:8002/index.php/api/date/datetype",
        "detail": "http://106.184.7.12:8002/index.php/api/date/detaildate",
        "userInfo": "http://106.184.7.12:8002/index.php/api/person/userinfo",
        "historyCreate": "http://106.184.7.12:8002/index.php/api/person/create",
        "historyJoin": "http://106.184.7.12:8002/index.php/api/person/join",
        "dateList": "http://106.184.7.12:8002/index.php/api/date/datelist",
        "detaildate": "http://106.184.7.12:8002/index.php/api/date/detaildate",
        "collect": "http://106.184.7.12:8002/index.php/api/person/collect",
        "report": "http://106.184.7.12:8002/index.php/api/date/report",
        "academy": "http://106.184.7.12:8002/index.php/api/public/academy",
        "collection": "http://106.184.7.12:8002/index.php/api/person/collection",
        "gradeHash": "http://106.184.7.12:8002/index.php/api/public/grade",
        "getletter": "http://106.184.7.12:8002/index.php/api/letter/getletter",
        "letters": "http://106.184.7.12:8002/index.php/api/letter/detailletter", //单条私信
        "dateaction": "http://106.184.7.12:8002/index.php/api/letter/dateaction"
    };

    return urls;
})
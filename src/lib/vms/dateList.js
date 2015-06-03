/**
 * Created by liuhzz on 2015/5/30.
 */
define('vms/dateList', ['urls', 'mmState', 'dialog', 'avaFilters', 'vms/main'], function(urls){
    avalon.state("litterLetter",{
        url:"/litterLetter",
        templateUrl:"tpl/litterLetterCtrl.html",
        onEnter:function() {
            avalon.vmodels['nav']['title'] = "私信";

            $.post(urls.dateList, {
                date_type: 0,
                page: 1,
                size: 3,
                order: 1
            }).success(function(res) {
                if(res.status == 200){
                    log(res.data);
                    avalon.scan();
                    avalon.vmodels.main.state = 'ok';
                }else{
                    log("err", res);
                    return $.Dialog.fail("服务器提了一个问题");
                }
            });

        }
    })
})
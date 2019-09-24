$(function(){
    function ajax_method(url,type,data,down,header){
        $.ajax({
            url:url,
            type:type,
            header:header,
            data:data,
            success:down
        })
    }
})
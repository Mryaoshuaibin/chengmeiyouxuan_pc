layui.use('upload', function(){
  var $ = layui.jquery
  ,upload = layui.upload;
  
  //普通图片上传
  var uploadInst = upload.render({
    elem: '#test1'
    ,url: '/upload/'
    ,size:5120
    ,acceptMime:  'image/jpg, image/png'
    ,before: function(obj){
      //预读本地文件示例，不支持ie8
      obj.preview(function(index, file, result){
        $('#demo1').attr('src', result); //图片链接（base64）
        $("#layui-upload").css("display","block")
      });
    }
    ,done: function(res){
      //如果上传失败
      if(res.code > 0){
        return layer.msg('上传失败');
      }else{
        //   $(".layui-upload").css("display","block")
      }
      //上传成功
    }
    ,error: function(){
      //演示失败状态，并实现重传
      var demoText = $('#demoText');
      demoText.html('<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-xs demo-reload">重试</a>');
      demoText.find('.demo-reload').on('click', function(){
        uploadInst.upload();
      });
    }
  });
  var uploadInst = upload.render({
    elem: '#test2'
    ,url: '/upload/'
    ,size:5120
    ,acceptMime:  'image/jpg, image/png'
    ,before: function(obj){
      //预读本地文件示例，不支持ie8
      obj.preview(function(index, file, result){
        $('#demo2').attr('src', result); //图片链接（base64）
        $("#layui-upload1").css("display","block")
      });
    }
    ,done: function(res){
      //如果上传失败
      if(res.code > 0){
        return layer.msg('上传失败');
      }else{
        //   $(".layui-upload").css("display","block")
      }
      //上传成功
    }
    ,error: function(){
      //演示失败状态，并实现重传
      var demoText = $('#demoText');
      demoText.html('<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-xs demo-reload">重试</a>');
      demoText.find('.demo-reload').on('click', function(){
        uploadInst.upload();
      });
    }
  });


  var fileCount = 0;
  var fileCount1 = 0;
  upload.render({
    elem: '#test11'
    ,url: '/upload/'
    ,multiple: true
    ,number:5
    ,size:5120
    ,acceptMime:  'image/jpg, image/png'
    ,before: function(obj){
        
        // console.log(this.number)
        var _number = this.number
        if(fileCount>_number-1){
            return alert("只能上传五张")
        }
      //预读本地文件示例，不支持ie8
      obj.preview(function(index, file, result){
          fileCount++;
        $("#from_7_img").css("display","none")
        $('#demo11').append('<img src="'+ result +'" alt="'+ file.name +'" class="layui-upload-img">')
        $("#test111").text(fileCount);
    }); 
          
    }
    // ,choose:function(obj){
    //     // var fileCount = obj.upload.length;
    //     // this.data.fileCount = fileCount;
    //     console.log(obj);
    //     var a = $(".layui-upload-img").lenght
    //     console.log(obj.successful)
    // }
    ,done: function(res){
      //上传完毕
    }
  });

  upload.render({
    elem: '#test22'
    ,url: '/upload/'
    ,multiple: true
    ,number:5
    ,size:5120
    ,acceptMime:  'image/jpg, image/png'
    ,before: function(obj){
        
        // console.log(this.number)
        var _number = this.number
        if(fileCount1>_number-1){
            return alert("只能上传五张")
        }
      //预读本地文件示例，不支持ie8
      obj.preview(function(index, file, result){
          fileCount1++;
        $("#from_7_img1").css("display","none")
        $('#demo22').append('<img src="'+ result +'" alt="'+ file.name +'" class="layui-upload-img">')
        $("#test222").text(fileCount1);
    }); 
          
    }
    // ,choose:function(obj){
    //     // var fileCount = obj.upload.length;
    //     // this.data.fileCount = fileCount;
    //     console.log(obj);
    //     var a = $(".layui-upload-img").lenght
    //     console.log(obj.successful)
    // }
    ,done: function(res){
      //上传完毕
    }
  });
})
layui.use("laydate",function(){
    var laydate = layui.laydate

    laydate.render({
    elem: '#test'
    ,format: 'yyyy年MM月dd日'
  });
})
layui.use(['form','layedit','laydate'],function(){
    var form = layui.form
    ,layer = layui.layer
    ,layedit = layui.layedit
    ,laydate = layui.laydate
    ,$= layui.$;


    form.on('select(type_mid)', function(data){
    //   console.log(data.elem); //得到select原始DOM对象
    //   console.log(data.value); //得到被选中的值]
    //   $("#quiz2").val(data.value)
    //   console.log(data.othis); //得到美化后的DOM对象
    $html = ""
    if(data.value == 2){
        // $("#quiz3").remove()
        $("#quiz3").empty();
            for(var i=1;  i<=28;i++){
                $html+="<option value="+i+">"+i+"</option>"
                
            }
            console.log($html)
        }
        else if(data.value  == 4 ||data.value  == 6 ||data.value  == 9 ||data.value  == 11 ){
            $("#quiz3").empty();
            for(var i=1;  i<=30;i++){
                $html+="<option value="+i+">"+i+"</option>"
                
            }
            console.log($html)
        }
        else{
            $("#quiz3").empty();
            for(var i=1;  i<=31;i++){
                $html+="<option value="+i+">"+i+"</option>"
                
            }
            console.log($html)
        }
        $("#quiz3").append($html)
        form.render('select');
    }); 
})

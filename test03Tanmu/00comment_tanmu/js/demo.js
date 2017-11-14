function getCmtDataList() {
    var cmtArr = [];
	
    // 可以使用jsonp获取服务器的字幕数据
    /*$.ajax({
        type : 'GET',
        url : '',
        dataType : 'jsonp',
        data : {sid : 100},
        success : function(data) {
            cmtArr = data.dataList;

            if (cmtArr && cmtArr.length > 0) {
         		sendMsg(cmtArr);
            }
        }
    });*/

    // 测试数据
    cmtArr = [
        {"text":$('.send_input').val(), "bgColor":randomColor(), "icon":"img/f2.jpg"},
        {"text":"会有什么惊喜吗？", "bgColor":randomColor(), "icon":"img/f1.jpg"},
        {"text":"等待中。。", "bgColor":randomColor(), "icon":"img/f3.png"},
        {"text":"会有什么新产品呢？", "bgColor":randomColor(), "icon":"img/f4.jpg"},
        {"text":"定时执行", "bgColor":randomColor(), "icon":"img/f5.jpg"},
       
    ]
    
    var danmaku = {
		    "mode": 1,
		    "text":"hello world",
		    "stime": 0,
		    "size": 25,
		    "dur": Math.floor(Math.random()*4000 + 20000),
		    "bgColor":randomColor(),
		    "icon":'img/f1.jpg',
		};
 	var anoArr = [];
    
    var firCha = {
    	"text":'Hello World',
    	"dur":Math.floor(Math.random()*5000 + 4000),
    	"bgColor":randomColor(),
    	"icon":"img/f2.jpg"
    }
    
	trys(danmaku);
    sendMsg(cmtArr);
	keyBind(danmaku)
}


//默认字幕
function sendMsg(cmtArr) {
		
		var fir = {"text":$('.send_input').val(), "bgColor":randomColor(), "icon":"img/f2.jpg"};
		
	    for (var i=0; i<cmtArr.length; i++) {
	        var cmtItem = cmtArr[i],
	            iconStr = '';
	
	        if (cmtItem.icon && cmtItem.icon.length > 0) {
	            iconStr = '<span class="icon"><img src="'+ cmtItem.icon +'"></span>';
	        }
			
	        // 字幕的节点内容
	        cmtItem.text = iconStr + cmtItem.text;
	        cmtItem.mode = 1;
	        cmtItem.dur = Math.floor(Math.random()*6000 + 20000);

	        CM.send(cmtItem);
	    }
	
}


function append(anoArr){
	
	$('.send_data').click(function(){
		
	})
	
}

//文本框输入
function trys(danmaku){
	
	$('.send_btn').click(function(){
		
		var iStr = ''
		console.log(danmaku)
		
		if( $('.send_input').val() != '' && danmaku.icon.length > 0){
			iStr = '<span class="icon"><img src="'+danmaku.icon+'"></span>'
			danmaku.text = iStr + $('.send_input').val();
			
			console.log(danmaku.text)
			CM.send(danmaku)
			$('.send_input').val('');
			
		}
	})
	
}

//
function keyBind(danmaku){
		
	$(document).keydown(function(e){
		
		if(e.keyCode == 13){
			var iStr = ''
			console.log(danmaku)
			
			if( $('.send_input').val() != '' && danmaku.icon.length > 0){
				iStr = '<span class="icon"><img src="'+danmaku.icon+'"></span>'
				danmaku.text = iStr + $('.send_input').val();
				
				console.log(danmaku.text)
				CM.send(danmaku)
				$('.send_input').val('');
				
			}
		}
		
	})
	
	
}


//控制弹幕
function cmtController() {
    getCmtDataList();

    setTimeout(function(){
        cmtController();
    }, 5000);
}

//弹幕范围
document.addEventListener('DOMContentLoaded', function(){
    var CM = new CommentManager(document.getElementById('commentCanvas'));
    CM.init();
  
    // 启动播放弹幕（在未启动状态下弹幕不会移动）
    CM.start();
	
	// 更新时间轴时间
	CM.time(500);
	CM.time(1000);
	
    // 开放 CM 对象到全局这样就可以在 console 终端里操控
    window.CM = CM;

    // 弹幕播放
    cmtController();
} ,false);


//randomColor
function randomColor(){
	
	var arr = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
	var str = '';
	for(var i = 0; i < 6; i++){
		var n = Math.floor(Math.random()*15);
		str += arr[n]
	}
	return '#'+str
}
console.log(randomColor())
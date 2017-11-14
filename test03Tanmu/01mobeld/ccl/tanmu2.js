
	
	
	

/*function getCmtDataList(barragesContent) {
    var cmtArr = [];
    // 使用jsonp获取服务器的字幕数据
    $.ajax({
        type : 'GET',
        url : ' http://119.23.48.68/barrage',
        dataType : 'json',
        data: {
        	getCmtDataList: getCmtDataList
        },
        success : function(data) {
            //cmtArr = data.dataList;
			console.log(data);
            if (cmtArr && cmtArr.length > 0) {
         		sendBox(cmtArr);
            }
        }
    });*/
function getCmtDataList() {
    // 测试数据
    var cmtArr = []
    /*var cmtArr = [
        {"text":$('.send_input').val(), "bgColor":randomColor(), "icon":"img/f2.jpg"},
        {"text":"会有什么惊喜吗？", "bgColor":randomColor(), "icon":"img/f1.jpg"},
        {"text":"等待中。。", "bgColor":randomColor(), "icon":"img/f3.png"},
        {"text":"会有什么新产品呢？", "bgColor":randomColor(), "icon":"img/f4.jpg"},
        {"text":"定时执行", "bgColor":randomColor(), "icon":"img/f5.jpg"},
       
    ]*/
    
    var danmaku = {
		    "mode": 1,
		    "text":"hello world",
		    "stime": 0,
		    "size": 25,
		    "dur": Math.floor(Math.random()*2000 + 12000),
		    "bgColor":randomColor(),
		    "icon":'img/f1.jpg',
		};
		
 	var anoArr = [];
    
    var firCha = [];
    firCha = {
    	"text":'Hello World',
    	"mode":1,
    	"dur":Math.floor(Math.random()*5000 + 20000),
    	"bgColor":randomColor(),
    	"icon":"img/f2.jpg"
    }
    
    anoArr = [
        {"text":$('.send_box').text(), "bgColor":randomColor(), "icon":"img/f1.jpg"},
    ]
    
	trys(danmaku);
    sendMsg(cmtArr);
	keyBind(danmaku)
	
	sendBox(firCha)
	
}



//默认字幕
function sendMsg(cmtArr) {
	    for (var i=0; i<cmtArr.length; i++) {
	        var cmtItem = cmtArr[i],
	            iconStr = '';
	
	        if (cmtItem.icon && cmtItem.icon.length > 0) {
	            iconStr = '<span class="icon"><img src="'+ cmtItem.icon +'"></span>';
	        }
			
	        // 字幕的节点内容
	        cmtItem.text = iconStr + cmtItem.text;
	        cmtItem.mode = 1;
	        cmtItem.dur = Math.floor(Math.random()*10000 + 10000);
	        console.log(Math.random()*1000)
	        console.log(cmtItem.dur)

	        CM.send(cmtItem);
	    }
} 

//send_box
function sendBox(tanmuBox){
	
	$('.send_btn').click(function(){
		
		var iStr = ''
		if( $('.send_box').text() != '' && tanmuBox.icon.length > 0){
			iStr = '<span class="icon"><img src="'+tanmuBox.icon+'"></span>'
			tanmuBox.text = iStr + $('.send_box').text();
			
			CM.send(tanmuBox)
			$('.send_box').text('');
			
		}
		
		/*for(var i=0; i<tanmuBox.length; i++){
			var cmtItem = tanmuBox[i],
				iconStr = '';
			if(cmtItem.icon && cmtItem.icon.length >0){
				iconStr = '<span class="icon"><img src="'+cmtItem.icon+'"></span>'
			}
			//
			 cmtItem.text = iconStr + cmtItem.text;
	        cmtItem.mode = 1;
	        cmtItem.dur = Math.floor(Math.random()*4000 + 20000);

	        CM.send(cmtItem);
	        console.log(iconStr);
		}*/
		
		
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
		
		/*var iStr = '';
		if( $('.send_input').val() != '' && danmaku.icon.length > 0){
			danmaku.text = iStr + $('.send_input').val();
			CM.send(danmaku);
			
		}*/
		
	})
	
	/*$('.send_btn').on('tap',function(e){
		
		e.preventDefault();
		var iStr = '';
		if( $('.send_input').val() != '' && danmaku.icon.length > 0){
			danmaku.text = iStr + $('.send_input').val();
			CM.send(danmaku);
			
		}
	})*/
	
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
    getCmtDataList('juihuih');

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


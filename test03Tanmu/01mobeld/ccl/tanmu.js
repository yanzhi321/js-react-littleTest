
	
function getCmtDataList(barragesContent) {
    
    var danmaku = {
		    "mode": 1,
		    "text":barragesContent,
		    "stime": 0,
		    "size": 25,
		    "dur": Math.floor(Math.random()*2000 + 12000),
		    "bgColor":randomColor(),
		    "icon":'img/f1.jpg',
		};
		
	 $.ajax({
        type : 'GET',
        url : 'http://119.23.48.68/barrage',
        dataType : 'json',
        data : {
        	barragesContent: barragesContent
        },
        success : function(data) {
        	//console.log(data);
       	}
        
    });	
    CM.send(danmaku)
}

//deepstream
var ds = deepstream( 'ws://119.23.48.68:6001/deepstream' );
	
		var client = ds.login()
	
		var list = client.record.getList('barragesList')
	
		list.subscribe( function( data ) {
		 //do something
		 console.log(data);
		 console.log(data[data.length-1])
	})

//send_box
/*!(function send_box(){
	
	$('.send_btn').click(function(){
		
		var send_txt = $('.send_box').html();
		
		getCmtDataList(send_txt);
		//clear
		$('.send_box').html('')
	})
	
})()*/
//send_box()

function send_box(){
	
	$('.send_btn').click(function(){
		
		var send_txt = $('.send_box').html();
		
		getCmtDataList(send_txt);
		//clear
		$('.send_box').html('')
		console.log(send_txt)
	})
	
}
send_box()
//setInterval(send_box,1)


//弹幕范围
document.addEventListener('DOMContentLoaded', function(){
    var CM = new CommentManager(document.getElementById('commentCanvas'));
    CM.init();
  
    // 启动播放弹幕（在未启动状态下弹幕不会移动）
    CM.start();
	
	// 更新时间轴时间
	CM.time(5000);
	
    // 开放 CM 对象到全局这样就可以在 console 终端里操控
    window.CM = CM;
    // 弹幕播放
    
	//CM.send(fir);
	
    //deepstream
    
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





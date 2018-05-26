
//JS的完美运动框架
function move(obj, attrObj, callBack) {

	//停止上一次的定时器
	clearInterval(obj.timerID);

	
	//保存当前定时器的ID值
	obj.timerID = setInterval(function() {
		
		//声明一个量
		//假设要停止定时器
		var stop = true;

		for(var attr in attrObj) {

			if(attr == 'opacity') {
				var current = Math.round(getStyleObj(obj, attr) * 100);
			} else {
				var current = parseInt(getStyleObj(obj, attr));
			}

			var speed = (attrObj[attr] - current) / 5;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

			//思考：如何知道所有属性值都达到了目标值
			if(attrObj[attr] != current) {
				
				//推翻理论
				stop = false;
			}

			//判断是否为透明度
			if(attr == 'opacity') {
				obj.style[attr] = (current + speed) / 100;
				obj.style.filter = 'alpha(' + attr + '=' + (current + speed) + ')';
			} else {
				obj.style[attr] = current + speed + 'px';
			}
		}
		
		//判断stop值是否仍未true
		if(stop) {

			clearInterval(obj.timerID);

			if(callBack) {
				callBack();
			}

			return;
		}

	}, 30);

}

//获取最新的样式对象
function getStyleObj(obj, attr) {

	var styleObj = obj.currentStyle || getComputedStyle(obj, null);

	return styleObj[attr];

}
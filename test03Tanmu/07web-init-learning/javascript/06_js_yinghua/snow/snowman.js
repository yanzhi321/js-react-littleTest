var iBase = {
    Id: function(name){
        return document.getElementById(name);
    },
    SetOpacity: function(ev, v){
        ev.filters ? ev.style.filter = 'alpha(opacity=' + v + ')' : ev.style.opacity = v / 100;
        }
    }
    function fadeIn(elem, speed, opacity){
        speed = speed || 20;
        opacity = opacity || 100;
        elem.style.display = 'block';
        iBase.SetOpacity(elem, 0);
        var val = 0;
        (function(){
            iBase.SetOpacity(elem, val);
            val += 5;
            if (val <= opacity) {
                setTimeout(arguments.callee, speed)
            }
        })();
    }
    function fadeOut(elem, speed, opacity){
        speed = speed || 20;
        opacity = opacity || 0;
        var val = 100;
        (function(){
            iBase.SetOpacity(elem, val);
            val -= 10;
            if (val >= opacity) {
                setTimeout(arguments.callee, speed);
            }else if (val < 0) {
                elem.style.display = 'none';
            }
        })();
    }
    function DispMagicEmot(MagicID,H,W){
        fadeIn(document.getElementById('MagicFace'), 20, 100);
        MagicFaceUrl = "http://hsdate.qiniudn.com/merry/christmas.html";
        document.getElementById("MagicFace").innerHTML = '<iframe width="'+W+'" height="'+H+'" allowtransparency="true" seamless="seamless" frameborder="0" src="'+MagicFaceUrl+'" style="position: fixed;"></iframe>';
        document.getElementById("MagicFace").style.bottom = (H+50)+"px";
        document.getElementById("MagicFace").style.right = (W-50)+"px"; 
        document.getElementById("MagicFace").style.visibility = 'visible';
        MagicID += Math.random();
        setTimeout(fadeOut(document.getElementById('MagicFace'), 1000, 0), 10000);
        NowMeID = MagicID;
    }
    DispMagicEmot(144,370,500);
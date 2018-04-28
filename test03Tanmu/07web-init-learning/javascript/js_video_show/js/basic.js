$(function() {

    // $('.btn-list li').on('click', function() {
    //     let str = `<li><img src="public/images/th.jpg" /></li>`
    //     $('.show-list').html(str)
        
    // })
   

    
    $('.btn-fir').on('click', function() {
        let str = `<li><img src="public/images/th.jpg" /></li>
                    <li><video src="public/videos/movie.mp4" width="100%" height="100%" controls="controls" autoplay="autoplay" loop="loop">
                    您的浏览器不支持 video 标签。
                    </video></li>    
                `
        $('.show-list').html(str)
    })

    $('.btn-sec').on('click', function() {
        let str = `<li><img src="public/images/th.jpg" /></li>
                    <li><video src="public/videos/m2.mp4" width="100%" height="100%" controls="controls" autoplay="autoplay" loop="loop">
                    您的浏览器不支持 video 标签。
                    </video></li>  
                `
        $('.show-list').html(str)
    })

    $('.btn-third').on('click', function() {
        
        let str = `<li><img src="public/images/th.jpg" /></li>
                    <li><video src="public/videos/chuying2.mp4" width="100%" height="100%" controls="controls" autoplay="autoplay" loop="loop">
                    您的浏览器不支持 video 标签。
                    </video></li>  
               `
        $('.show-list').html(str)
    })

    $('.btn-forth').on('click', function() {
        let str = `<li><img src="public/images/th.jpg" /></li>
                    <li><video src="http://www.runoob.com/try/demo_source/mov_bbb.mp4" width="100%" height="100%"  autoplay="autoplay" loop="loop">
                    您的浏览器不支持 video 标签。
                    </video></li>  
               `
        $('.show-list').html(str)
    })

    const url  = 'http://192.168.30.136:3000/project_num'
    const url2 = 'http://192.168.30.136:3000/project_detail'
    let fetchGet = function() {
        
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        
        })
        .then( (res) => {
            return res.json()
        })
        .then( (json) => {
            console.log("received", json)
            
            const txt = document.createTextNode(json.time)
            showTime.innerText = json.time
        })
        .catch( (err) => {
            console.log('err', err)
        })
        
        return fetchGet
    }
    
    fetchGet()

})

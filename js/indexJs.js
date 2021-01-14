// 时间模块Star
function time() {
    var date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var str = "Time : " + hour + " : " + minutes + " : " + seconds;
    var div1 = document.getElementById("timeText");
    div1.innerHTML = str;
}
time();
setInterval(time,1000);
// 时间模块End
// 音乐播放Star
var scoreMusic = document.getElementById('scoreMusic');
var scoreImg = document.getElementById('scoreImg');
var Musicswitch = false;

scoreImg.onclick = function(){
    Musicswitch = true;
    playMusic(Musicswitch);
}
scoreImg.ondblclick = function(){
    Musicswitch = false;
    playMusic(Musicswitch);
}
function playMusic(s){
    if(s){
        // 播放
        scoreMusic.play();
        console.log("播放")
        scoreImg.style.animation = 'scoreMove 183s infinite linear';
    }else{
        // 暂停
        scoreMusic.pause();
        console.log("暂停");
        scoreImg.style.animationPlayState = 'paused'
    }
    
}

// 音乐播放End
// 图片弹窗star
var popup = document.getElementById('popup');
var popupImg = document.getElementById('popupImg');
var popupText = document.getElementById('popupText');
    // e.childNodes
    // NodeList(5) [text, img, text, div.imgMask, text]
    // 0: text
    // 1: img
    // 2: text
    // 3: div.imgMask
    // 4: text
    // length: 5
    // __proto__: NodeList
    
function showPopupImg(e) {
    // 变实体
    popup.style.opacity = 1;
    popup.style.filter = 'alpha(opacity=100)';
    popup.style.display = 'block';
    // 找到选中图片的src和文字，设置到弹窗上
    popupImg.src = (e.childNodes[1]).src;
    popupText.innerText = ((e.childNodes[3]).childNodes[1]).innerText;

    console.log(e.childNodes);
    
}
popup.onclick = function() {
    // 变透明直至消失
    popup.style.opacity = 0;
    popup.style.filter = 'alpha(opacity=0)';
    setTimeout(closePopup,500);
    
}
function closePopup(){
    // 消失
    popup.style.display = 'none';
}
// 图片弹窗End
// 回到顶部Star
var easeout = function (position, destination, rate, callback) {
    if (position === destination || typeof destination !== 'number') {
        return false;
    }
    destination = destination || 0;
    rate = rate || 2;
    // 不存在原生`requestAnimationFrame`，用`setTimeout`模拟替代 
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function (fn) {
            return setTimeout(fn, 17);
        }
    }
    var step = function () {
        position = position + (destination - position) / rate;
        if (Math.abs(destination - position) < 1) {
            callback(destination, true);
            return;
        }
        callback(position, false);
        requestAnimationFrame(step);
    };
    step();
}

var scrollTopSmooth = function (position) {
    // 当前滚动高度 
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    easeout(scrollTop, position, 5, function (val) {
        window.scrollTo(0, val);
    });
}
function backToTop() {
    scrollTopSmooth(0);
}
//按钮隐藏到显现
window.onscroll = function(){
    // console.log("我懂了")
    var toTop = document.getElementById('toTop');
    var scrollTop = document.documentElement.scrollTop;
    scrollTop = Number(scrollTop)
    // console.log(scrollTop)
    if(scrollTop >= 420){
        toTop.style.display = 'block';
        setTimeout(showToTop,100);
    }
    if(scrollTop < 420){
        toTop.style.opacity = 0;
        toTop.style.filter = 'alpha(opacity=0)';
        // Bug未解决 滑动到顶部 设置display为none 由乱闪情况
        // setTimeout(closeToTop,1000);
    }

    var addContent = document.getElementById('addContent');
    var scrollTop = document.documentElement.scrollTop;
    scrollTop = Number(scrollTop)
    // console.log(scrollTop)
    if(scrollTop >= 420){
        addContent.style.display = 'block';
        setTimeout(showAddContent,100);
    }
    if(scrollTop < 420){
        addContent.style.opacity = 0;
        addContent.style.filter = 'alpha(opacity=0)';
        // Bug未解决 滑动到顶部 设置display为none 由乱闪情况
        // setTimeout(addContent,1000);
    }
}
function showToTop(){
    toTop.style.opacity = 1;
    toTop.style.filter = 'alpha(opacity=100)';
}
// function closeToTop(){
//     toTop.style.display = 'none';
// }

function showAddContent(){
    addContent.style.opacity = 1;
    addContent.style.filter = 'alpha(opacity=100)';
}
// function closeaddContent(){
//     addContent.style.display = 'none';
// }
// 按钮隐藏到显现
// 回到顶部End

// 首页弹窗Star
// 关闭变透明
function closeBox() {
    // opacity: 0;
    // filter:Alpha(opacity=0)
    document.getElementById('homePopup').style.opacity = 0;
    document.getElementById('homePopup').style.filter = 'alpha(opacity=0)';
    setTimeout(closeBoxNone, 1000);
}
// 把他的位置none掉
function closeBoxNone() {
    document.getElementById('homePopup').style.display = 'none';
}
// 首页弹窗End

// 添加Content 弹窗 Star
var addContentPopup = document.getElementById('addContentPopup');
var PopupSwitchBl = true
function addPopupSwitch(){
    if(PopupSwitchBl){
        addContentPopup.style.opacity = 1;
        addContentPopup.style.filter = 'alpha(opacity=100)';
        addContentPopup.style.display='block'
        PopupSwitchBl = false;
    }else{
        addContentPopup.style.opacity = 0;
        addContentPopup.style.filter = 'alpha(opacity=0)';
        PopupSwitchBl = true;
        setTimeout(closeAddContentPopup,500);
    }
}
function closeAddContentPopup(){
    addContentPopup.style.display='none'
}
// 添加Content 弹窗 End

// addContent 添加内容 Star
function appendContent() {
    // 获取用户输入的内容
    // 简介
    var addIntro = document.getElementById('addIntro');
    var intro =String(addIntro.value);
    console.log(intro)
    // 作者
    var addAuthor = document.getElementById('addAuthor');
    var author = String(addAuthor.value);
    console.log(author)
    //图片
    var addImg = document.getElementById('addImg'),
        blob = URL.createObjectURL(addImg.files[0]),
        newImg = new Image();
    // newImg.onload = drawCanvasImage;
    newImg.src = blob;
    console.log(newImg);
    // newImg 是一个Img Node

    // <li onclick="showPopupImg(this)">
    // <img src="images/content80.jpg" alt="">
    // <div class="imgMask">
    //     <p>
    //         Ship</br>
    //         by Son of Alan</br>
    //         IKEA
    //     </p>
    // </div>
    // </li>

    // 创建一个p
    var addP = document.createElement('p');
    // 把作者和简介添加到p中
    addP.innerHTML = intro + "</br>" + author;
    // 创建一个div
    var addDiv = document.createElement('div');
    addDiv.className = "imgMask";
    // 把p放到div中
    addDiv.appendChild(addP);
    //创建一个li
    var addLi = document.createElement('li');
    addLi.onclick = function () {//正确  
        // bug
        showPopupImg(this)
    }
    // 把img和div放入li中
    addLi.appendChild(newImg);
    addLi.appendChild(addDiv);
    // 把li放到ul中
    document.getElementById('contentBodyUl').appendChild(addLi);



}
// addContent 添加内容 End

// 关灯 Star
var LightSwitchbl = true;
function LightSwitch(){
    if(LightSwitchbl){
        openLightSwitch();
        LightSwitchbl = false;
    }else{
        closeLightSwitch();
        LightSwitchbl = true;
    }
    
}
function openLightSwitch(){
    document.body.style.backgroundColor = '#2A2A2A';

    var headerLeft = document.getElementsByClassName('headerLeft')[0];
    headerLeft.getElementsByTagName('h1')[0].style.color = '#F8F8F8';
    headerLeft.getElementsByTagName('p')[0].style.color = '#F8F8F8';

    document.getElementById('time').style.color = "#F8F8F8";
    document.getElementById('light').style.color = "#F8F8F8";
    document.getElementById('boom').style.color = "#F8F8F8";
    document.getElementById('light').style.borderLeft = "2px solid #F8F8F8";

    var navUl = document.getElementsByClassName('nav')[0].getElementsByTagName('ul')[0];
    navUl.getElementsByTagName('li')[0].getElementsByTagName('a')[0].style.color = "#F8F8F8";
    navUl.getElementsByTagName('li')[1].getElementsByTagName('a')[0].style.color = "#F8F8F8";
    navUl.getElementsByTagName('li')[2].getElementsByTagName('a')[0].style.color = "#F8F8F8";
    document.getElementsByClassName('nav')[0].getElementsByTagName('p')[0].style.color = "#F8F8F8";

    document.getElementById('scoreImg').src="images/historyPiano02.png";

    var contentTitle = document.getElementsByClassName('contentTitle')[0];
    contentTitle.getElementsByTagName('h2')[0].style.color = "#F8F8F8";
    contentTitle.getElementsByTagName('p')[0].style.color = "#F8F8F8";

    document.getElementsByClassName('lightHint')[0].innerHTML = '<div></div>您要开灯？';

    L2Dwidget.init({
        "model": {
            // 这里改模型，前面后面都要改
            // 模型链接 https://www.cnblogs.com/strengthen/p/11112215.html
            // 白猫
            jsonPath: "https://unpkg.com/live2d-widget-model-tororo@1.0.5/assets/tororo.model.json",
            // 黑猫
            // jsonPath: "https://unpkg.com/live2d-widget-model-hijiki@1.0.5/assets/hijiki.model.json",
            "scale": 1
        },
        // 设置看板娘的上下左右位置
        "display": {
            "position": "left",
            "width": 100,
            "height": 100,
            "hOffset": 30,
            "vOffset": 30
        },
        "mobile": {
            "show": true,
            "scale": 0.5
        },
        "react": {
            // 设置透明度
            "opacityDefault": 1,
            "opacityOnHover": 0.2
        }
    });
}
function closeLightSwitch() {
    document.body.style.backgroundColor = '#F8F8F8';

    var headerLeft = document.getElementsByClassName('headerLeft')[0];
    headerLeft.getElementsByTagName('h1')[0].style.color = '#000000'
    headerLeft.getElementsByTagName('p')[0].style.color = '#000000'

    document.getElementById('time').style.color = "#333333"
    document.getElementById('light').style.color = "#333333"
    document.getElementById('boom').style.color = "#333333"
    document.getElementById('light').style.borderLeft = "2px solid #333333";

    var navUl = document.getElementsByClassName('nav')[0].getElementsByTagName('ul')[0];
    navUl.getElementsByTagName('li')[0].getElementsByTagName('a')[0].style.color = "#000000";
    navUl.getElementsByTagName('li')[1].getElementsByTagName('a')[0].style.color = "#000000";
    navUl.getElementsByTagName('li')[2].getElementsByTagName('a')[0].style.color = "#000000";
    document.getElementsByClassName('nav')[0].getElementsByTagName('p')[0].style.color = "#000000";

    document.getElementById('scoreImg').src="images/historyPiano01.png";

    var contentTitle = document.getElementsByClassName('contentTitle')[0];
    contentTitle.getElementsByTagName('h2')[0].style.color = "#000000";
    contentTitle.getElementsByTagName('p')[0].style.color = "#000000";

    document.getElementsByClassName('lightHint')[0].innerHTML = '<div></div>您要关灯？';

    L2Dwidget.init({
        "model": {
            // 这里改模型，前面后面都要改
            // 模型链接 https://www.cnblogs.com/strengthen/p/11112215.html
            // 白猫
            // jsonPath: "https://unpkg.com/live2d-widget-model-tororo@1.0.5/assets/tororo.model.json",
            // 黑猫
            jsonPath: "https://unpkg.com/live2d-widget-model-hijiki@1.0.5/assets/hijiki.model.json",
            "scale": 1
        },
        // 设置看板娘的上下左右位置
        "display": {
            "position": "left",
            "width": 100,
            "height": 100,
            "hOffset": 30,
            "vOffset": 30
        },
        "mobile": {
            "show": true,
            "scale": 0.5
        },
        "react": {
            // 设置透明度
            "opacityDefault": 1,
            "opacityOnHover": 0.2
        }
    });
}
// 关灯 End
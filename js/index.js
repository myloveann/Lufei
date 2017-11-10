window.onload=function  () {
    'use strict';
    var music=document.getElementById('music');
    var audio=document.getElementsByTagName('audio')[0];

    //获取所有页面
    var page1=document.getElementById('page1');
    var page2=document.getElementById('page2');
    var page3=document.getElementById('page3');
    var page4=document.getElementById('page4');
    var page5=document.getElementById('page5');
    var page6=document.getElementById('page6');
    var page7=document.getElementById('page7');

    //音乐结束的时候，图标也停止
    audio.addEventListener('ended', function (event) {
        music.setAttribute('class', '');
    }, false);

    //开启或者关闭音乐
    music.addEventListener('touchstart', function (event) {
        if(audio.paused){
            audio.play();
            this.style.animationPlayState = 'running';
            this.style.webkitAnimationPlayState='running';
        }else {
            audio.pause();
            this.style.animationPlayState = 'paused';
            this.style.webkitAnimationPlayState = 'paused';
        }
    }, false);

    // 添加页面点击事件
    //点击page1的时候，页面缓慢消失，第二页缓慢出现
    page1.addEventListener('touchstart', function (event) {
        //进入的时候淡出
         page1.setAttribute('class', 'page fadeOut');
         page2.style.display='block';
    }, false);
    page2.addEventListener('touchstart', function (event) {
        //进入的时候淡出
        page1.style.display='none';
        page2.setAttribute('class', 'page fadeOut');
        page3.setAttribute('class', 'page fadeIn');
        page3.style.display='block'
    }, false);
    page3.addEventListener('touchstart', function (event) {
        //进入的时候淡出
        page2.style.display='none';
        page3.setAttribute('class','page fadeOut');
        page4.style.display='block';
        page5.style.display='block';
        page4.setAttribute('class', 'page fadeIn');
        page5.style.top='100%';
        setTimeout(function () {
            page3.style.display='none';
            page4.setAttribute('class', 'page fadeOut');
            page5.setAttribute('class', 'page fadeIn');
        },4500);
    }, false);
    page5.addEventListener('touchstart', function (event) {
        //进入的时候淡出
        page4.style.display='none';
        page5.setAttribute('class','page fadeOut');
        page6.style.display='block';
        page6.style.top="100%";
        page6.setAttribute('class', 'page fadeIn');
    }, false);
    page6.addEventListener('touchstart', function (event) {
        //进入的时候淡出
        page5.style.display='none';
        page6.setAttribute('class','page fadeOut');
        page7.style.display='block';
        page7.setAttribute('class', 'page fadeIn');
    }, false);

}
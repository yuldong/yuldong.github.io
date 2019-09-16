// js
// 1、浏览器应用程序接口 - 浏览器内置的API提供了丰富的功能，比如：动态创建HTML和设置CSS样式、从用户摄像头
// 采集处理视频流、生成3D图像和音频样本等
// 2、第三方API - 让开发者可以在自己的站点中整合其他内容提供者提供的功能
// 3、第三方框架和库 - 用来快速构建网站和应用

let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "./images/firefox-icon.png") {
        myImage.setAttribute("src", './images/firefox2.png');
    } else {
        myImage.setAttribute("src", './images/firefox-icon.png')
    }
}

function setHeading(name) {
    let myHeading = document.querySelector('h1');
    myHeading.textContent = "Mozilla 酷毙了, " + name + "!";
}

function setUserName() {
    let myName = prompt("请输入你的名字");
    localStorage.setItem('name', myName);
    setHeading(myName);
}

let storedName = localStorage.getItem('name');
if (!storedName) {
    setUserName();
} else {
    setHeading(storedName);
}

let myButton = document.querySelector('button');
myButton.onclick = setUserName;
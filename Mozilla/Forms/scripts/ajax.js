function sendData(data) {
    var XHR = new XMLHttpRequest();

    var FD = new FormData();

    for(name in data) {
        FD.append(name, data[name]);
    }

    XHR.addEventListener('load', function(event) {
        alert('耶! 已发送数据并加载响应。');
      });

    XHR.addEventListener('error', function(event) {
        alert('哎呀！出问题了。');
    });

    // 建立我们的请求
    XHR.open('POST', 'https://example.com/cors.php');

    XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    XHR.send(FD);
}
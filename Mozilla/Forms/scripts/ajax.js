function sendData(data) {
    var XHR = new XMLHttpRequest();
    var urlEncodedData = "";
    var urlEncodedDataPairs = [];

    var name;
    for(name in data) {
        urlEncodedDataPairs.push(encodeURIComponent(name) + encodeURIComponent(data[name]));
    }

    urlEncodedData = urlEncodedDataPairs.join("&").replace(/%20/g, '+');

    XHR.addEventListener('load', function(event) {
        alert('耶! 已发送数据并加载响应。');
      });

    XHR.addEventListener('error', function(event) {
        alert('哎呀！出问题了。');
    });

    // 建立我们的请求
    XHR.open('POST', 'https://example.com/cors.php');

    XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    XHR.send(urlEncodedData);
}
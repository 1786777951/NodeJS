//引入http模块
var http = require('http');


//准备处理并响应
function service(request,response) {
    //设置返回代码200，以及返回格式text/plain
    response.writeHead(200,{'Content-Type':'text/plain'});
    //返回内容
    response.end('Hello Node.js');
}

//创建服务器
var server = http.createServer(service);

//监听8088
server.listen(8088);


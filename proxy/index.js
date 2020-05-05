var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer({ target: 'http://192.168.86.85:8080/' })
proxy.listen(5050)
console.log('go to localhost:5050')
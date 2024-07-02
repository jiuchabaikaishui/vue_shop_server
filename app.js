const express = require('express')
const app = express()

// 开启 gzip 一定要挂载在静态资源托管之前
const compression = require('compression')
app.use(compression())

// 将打包的目录托管为静态资源
app.use(express.static('./dist'))

/*
const https = require('https')
const fs = require('fs')
// 读取公钥和私钥
const options = {
    cert: fs.readFile('./full_chain.pem'),
    ket: fs.readFile('./private.key')
}
// 启动 https 服务器
https.createServer(options, app).listen(443)
*/

// 启动服务器
app.listen('8090', function() {
    console.log('express server running at http://127.0.0.1:8090')
})
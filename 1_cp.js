//child proccess is a node module  used to create sub process  withina script
//you can  perform deffrent  task with in the script by uing some methods

const cp = require('child_process')


// cp.execSync('calc')
//   cp.execSync('start chrome https://www.scaler.com/topics/course/nodejs/video/973/')
cp.execSync('node demo.js')



/*
node.js date method issue
written by moufumofufarm
*/
// UTCからJSTに変換する
var dt = new Date();
dt.setTime(dt.getTime() + 1000*60*60*9);
console.log(dt);

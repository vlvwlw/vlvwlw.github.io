let myDialog = document.createElement('div')
myDialog.id = 'myDialog'
document.body.appendChild(myDialog);


// 引入本地script
var scriptTag = document.createElement('script');
scriptTag.src = 'http://localhost:4000/code.js';
document.body.appendChild(scriptTag);

// 引入本地css link
let cssLink = document.createElement('link')
cssLink.rel = 'stylesheet'
cssLink.href = 'http://localhost:4000/cssCode.css'
document.head.appendChild(cssLink);

console.log('hello world this is my test code')
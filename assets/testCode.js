let myDialog = document.createElement('div')
myDialog.id = 'myDialog'
document.body.appendChild(myDialog);


// 引入本地script
var scriptTag = document.createElement('script');
scriptTag.src = 'https://vlvwlw.github.io/assets/code.js';
document.body.appendChild(scriptTag);

// 引入本地css link
let cssLink = document.createElement('link')
cssLink.rel = 'stylesheet'
cssLink.href = 'https://vlvwlw.github.io/assets/cssCode.css'
document.head.appendChild(cssLink);

console.log('添加一个弹框')

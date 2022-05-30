const {createApp} = Vue;

createApp({
    data() {
        return {
            message: 'Hello Vue!',
        };
    },
}).mount('#app');

window.variableInMainContext = 'hi';
document.querySelector('.diy-option').addEventListener('click', function () {
    if (chrome.runtime.openOptionsPage) {
        chrome.runtime.openOptionsPage();
    } else {
        console.log('test');
        window.open(chrome.runtime.getURL('./src/html/options.html?123'));
    }
});

// 接收popup数据并修改dom
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    // document.querySelector("body").style.setProperty("background", request.color);
    $('body').css('background', request.color);
    sendResponse({name: 1});
});

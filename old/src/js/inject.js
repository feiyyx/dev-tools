const nullthrows = (v) => {
    if (v == null) throw new Error("it's a null");
    return v;
};

function injectCode(src) {
    console.log('test');
    const script = document.createElement('script');
    // This is why it works!
    script.src = src;
    script.onload = function () {
        console.log('script injected');
        this.remove();
    };

    // This script runs before the <head> element is created,
    // so we add the script to <html> instead.
    nullthrows(document.head || document.documentElement).appendChild(script);
}

injectCode(chrome.runtime.getURL('./plugins/md5.min.js'));
injectCode(chrome.runtime.getURL('./plugins/vue.global.js'));
injectCode(chrome.runtime.getURL('./src/js/myscript.js'));

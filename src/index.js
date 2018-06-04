function getIOSVersion(ua) {
    ua = ua || navigator.userAgent;
    var match = ua.match(/OS ((\d+_?){2,3})\s/i);
    return match ? match[1].replace(/_/g, '.') : 'unknown';
}

class inputShow{
    /**
     * @param {Object|String} input 输入框元素节点或选择器
     * @param {*} param1 
     */
    constructor(input, {delay=200, intervals=300}={}) {
        this.isSpecVersion = this.checkVersion();
        this.interval = null;
        this.input = (typeof input).toLowerCase() == 'object' ? input : document.querySelector(input);
        this.delay = delay;
        this.intervals = intervals;
        this.init();
    }
    init() {
        this.input.addEventListener('focus', this.onFocus.bind(this));
        this.input.addEventListener('blur', this.clearSrcoll.bind(this));
    }
    onFocus() {
        // if(this.isSpecVersion){
            // ios11.0-11.3 对scrollTop及scrolIntoView解释有bug
            // 直接执行会导致输入框滚到底部被遮挡
            this.input.style.minHeight = window.innerHeight + this.input.offsetHeight + 88 + 'px';
        // } else {
        //     setTimeout(() => {
        //         this.interval = setInterval(this.scrollToView.bind(this), this.intervals);
        //     }, this.delay)
        // }
    }
    scrollToView() {
        this.input.scrollIntoView(true);
        this.input.scrollIntoViewIfNeeded();
    }
    checkVersion() {
        const iosVsn = getIOSVersion().split('.');
        return +iosVsn[0] == 11 && +iosVsn[1] >= 0 && +iosVsn[1] < 3;
    }
    clearSrcoll() {
        // this.interval && clearInterval(this.interval);
        this.input.style.minHeight = 'auto';
    }
}

export default inputShow;
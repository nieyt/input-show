var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function getIOSVersion(ua) {
    ua = ua || navigator.userAgent;
    var match = ua.match(/OS ((\d+_?){2,3})\s/i);
    return match ? match[1].replace(/_/g, '.') : 'unknown';
}

var inputShow = function () {
    /**
     * @param {Object|String} input 输入框元素节点或选择器
     * @param {*} param1 
     */
    function inputShow(input) {
        var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _ref$delay = _ref.delay,
            delay = _ref$delay === undefined ? 200 : _ref$delay,
            _ref$intervals = _ref.intervals,
            intervals = _ref$intervals === undefined ? 300 : _ref$intervals;

        _classCallCheck(this, inputShow);

        this.isSpecVersion = this.checkVersion();
        this.interval = null;
        this.input = (typeof input === 'undefined' ? 'undefined' : _typeof(input)).toLowerCase() == 'object' ? input : document.querySelector(input);
        this.delay = delay;
        this.intervals = intervals;
        this.init();
    }

    _createClass(inputShow, [{
        key: 'init',
        value: function init() {
            this.input.addEventListener('focus', this.onFocus.bind(this));
            this.input.addEventListener('blur', this.clearSrcoll.bind(this));
        }
    }, {
        key: 'onFocus',
        value: function onFocus() {
            var _this = this;

            if (this.isSpecVersion) ; else {
                setTimeout(function () {
                    _this.interval = setInterval(_this.scrollToView.bind(_this), _this.intervals);
                }, this.delay);
            }
        }
    }, {
        key: 'scrollToView',
        value: function scrollToView() {
            this.input.scrollIntoView(true);
            this.input.scrollIntoViewIfNeeded();
        }
    }, {
        key: 'checkVersion',
        value: function checkVersion() {
            var iosVsn = getIOSVersion().split('.');
            return +iosVsn[0] == 11 && +iosVsn[1] >= 0 && +iosVsn[1] < 3;
        }
    }, {
        key: 'clearSrcoll',
        value: function clearSrcoll() {
            this.interval && clearInterval(this.interval);
        }
    }]);

    return inputShow;
}();

export default inputShow;

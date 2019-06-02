import { d as registerInstance, e as h } from './stencil-components-4a70dd52.js';
function format(first, middle, last) {
    return ((first || '') +
        (middle ? " " + middle : '') +
        (last ? " " + last : ''));
}
var MyComponent = /** @class */ (function () {
    function MyComponent(hostRef) {
        registerInstance(this, hostRef);
    }
    MyComponent.prototype.getText = function () {
        return format(this.first, this.middle, this.last);
    };
    MyComponent.prototype.render = function () {
        return h("div", { class: "my-component" }, this.getText());
    };
    Object.defineProperty(MyComponent, "style", {
        get: function () { return ".my-component{font-weight:700;margin-top:30%;text-align:center;font-size:30px}"; },
        enumerable: true,
        configurable: true
    });
    return MyComponent;
}());
var TimerComponent = /** @class */ (function () {
    function TimerComponent(hostRef) {
        registerInstance(this, hostRef);
        this.timeLeft = 0;
    }
    TimerComponent.prototype.startTimer = function () {
        var _this = this;
        this.interval = setInterval(function () {
            if (_this.timeLeft > -1) {
                _this.timeLeft = _this.timeLeft + 1;
            }
            else {
                _this.timeLeft = 0;
            }
        }, 1);
    };
    TimerComponent.prototype.componentDidLoad = function () {
        this.startTimer();
    };
    TimerComponent.prototype.componentDidUnload = function () {
        window.clearInterval(this.interval);
    };
    TimerComponent.prototype.render = function () {
        return h("div", { id: 'timer' }, h("div", { class: 'timer-container' }, this.timeLeft, " ms"));
    };
    Object.defineProperty(TimerComponent, "style", {
        get: function () { return "#timer{font-weight:700;font-size:25px;text-align:center}#timer .timer-container{width:160px;height:90px;margin:20px auto}"; },
        enumerable: true,
        configurable: true
    });
    return TimerComponent;
}());
export { MyComponent as my_component, TimerComponent as timer_component };

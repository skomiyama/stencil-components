'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./stencil-components-738235af.js');

function format(first, middle, last) {
    return ((first || '') +
        (middle ? ` ${middle}` : '') +
        (last ? ` ${last}` : ''));
}

class MyComponent {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
    }
    getText() {
        return format(this.first, this.middle, this.last);
    }
    render() {
        return __chunk_1.h("div", { class: "my-component" }, this.getText());
    }
    static get style() { return ".my-component{font-weight:700;margin-top:30%;text-align:center;font-size:30px}"; }
}

class TimerComponent {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        this.timeLeft = 0;
    }
    startTimer() {
        this.interval = setInterval(() => {
            if (this.timeLeft > -1) {
                this.timeLeft = this.timeLeft + 1;
            }
            else {
                this.timeLeft = 0;
            }
        }, 1);
    }
    componentDidLoad() {
        this.startTimer();
    }
    componentDidUnload() {
        window.clearInterval(this.interval);
    }
    render() {
        return __chunk_1.h("div", { id: 'timer' }, __chunk_1.h("div", { class: 'timer-container' }, this.timeLeft, " ms"));
    }
    static get style() { return "#timer{font-weight:700;font-size:25px;text-align:center}#timer .timer-container{width:160px;height:90px;margin:20px auto}"; }
}

exports.my_component = MyComponent;
exports.timer_component = TimerComponent;

import { d as registerInstance, e as h } from './stencil-components-4a70dd52.js';

function format(first, middle, last) {
    return ((first || '') +
        (middle ? ` ${middle}` : '') +
        (last ? ` ${last}` : ''));
}

class MyComponent {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    getText() {
        return format(this.first, this.middle, this.last);
    }
    render() {
        return h("div", { class: "my-component" }, this.getText());
    }
    static get style() { return ".my-component{font-weight:700;margin-top:30%;text-align:center;font-size:30px}"; }
}

class TimerComponent {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return h("div", { id: 'timer' }, h("div", { class: 'timer-container' }, this.timeLeft, " ms"));
    }
    static get style() { return "#timer{font-weight:700;font-size:25px;text-align:center}#timer .timer-container{width:160px;height:90px;margin:20px auto}"; }
}

export { MyComponent as my_component, TimerComponent as timer_component };

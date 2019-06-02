import { e as registerInstance, f as h } from './stencil-components-ea49fb3f.js';

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
    static get style() { return "#timer {\n  font-weight: bold;\n  font-size: 25px;\n  text-align: center;\n}\n#timer .timer-container {\n  width: 160px;\n  height: 90px;\n  margin: 20px auto;\n}"; }
}

export { TimerComponent as timer_component };

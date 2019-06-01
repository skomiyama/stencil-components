import { h } from '@stencil/core';
export class TimerComponent {
    constructor() {
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
        return h("div", { id: 'timer' },
            h("div", { class: 'timer-container' },
                this.timeLeft,
                " ms"));
    }
    static get is() { return "timer-component"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["timer.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["timer.css"]
    }; }
    static get states() { return {
        "timeLeft": {}
    }; }
}

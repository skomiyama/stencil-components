import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'timer-component',
  styleUrl: 'timer.scss',
  shadow: true
})
export class TimerComponent {

  @State() timeLeft: number = 0;
  interval;

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > -1) {
        this.timeLeft = this.timeLeft + 1 ;
      } else {
        this.timeLeft = 0;
      }
    },1)
  }

  componentDidLoad() {
    this.startTimer()
  }
  componentDidUnload() {
    window.clearInterval(this.interval)
  }

  render() {
    return  <div id='timer'>
              <div class='timer-container'>{ this.timeLeft } ms</div>
            </div>;
  }
}

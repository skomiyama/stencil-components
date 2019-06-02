import { e as registerInstance, f as h } from './stencil-components-ea49fb3f.js';

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
    static get style() { return ".my-component {\n  font-weight: bold;\n  margin-top: 30%;\n  text-align: center;\n  font-size: 30px;\n}"; }
}

export { MyComponent as my_component };

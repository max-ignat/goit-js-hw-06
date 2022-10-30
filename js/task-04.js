const counterValue = function ({
    selector,
    value = 0, step = 1,
} = {}) {
    this.selector = selector;
    this.value = value;
    this.step = step;
    this.refs = this.getRefs(selector);
    this.events();
    this.changeValue();
};


counterValue.prototype.getRefs = function (selector) {
    const refs = {};
    refs.container = document.querySelector(selector);
    refs.increment = refs.container.querySelector('[data-action="increment"]');
    refs.decrement = refs.container.querySelector('[data-action="decrement"]');
    refs.value = refs.container.querySelector('#value');
    
    return refs;
}

counterValue.prototype.events = function () {
    this.refs.increment.addEventListener('click', () => {
        this.increment();
        this.changeValue();
    });

    this.refs.decrement.addEventListener('click', () => {
        this.decrement();
        this.changeValue();
    });

}

counterValue.prototype.changeValue = function () {
    this.refs.value.textContent = this.value;
}

counterValue.prototype.increment = function () {
    this.value += this.step;
};
counterValue.prototype.decrement = function () {
    this.value -= this.step;
};
const counter = new counterValue({selector: '#counter', step: 1});
console.log(counter)






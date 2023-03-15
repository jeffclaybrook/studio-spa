import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Analytics');
    }

    async getHtml() {
        return `
        <p>Analytics</p>
        `
    }
}
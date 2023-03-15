import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Comments');
    }

    async getHtml() {
        return `
        <p>Comments</p>
        `
    }
}
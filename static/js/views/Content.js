import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Content');
    }

    async getHtml() {
        return `
        <p>Content</p>
        `
    }
}
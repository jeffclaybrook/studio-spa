import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Dashboard');
    }

    async getHtml() {
        return `
        <section id="dashboard">
            <div class="row dashboard-header">
                <div class="inline-card">
                    <img src="static/images/avatar.webp" alt="Jeffrey Claybrook" width="72px" height="72px" loading="lazy">
                    <div class="wrapper">
                        <mdw-span block type-style="headline-small">Jeffrey Claybrook</mdw-span>
                        <mdw-span block type-style="headline-medium">125</mdw-span>
                        <mdw-span block type-style="body-medium">Total subscribers</mdw-span>
                    </div>
                </div>
            </div>
            <div class="row channel-analytics">
                <div class="row-header">
                    <mdw-span block type-style="headline-small">Channel analytics</mdw-span>
                    <mdw-span block type-style="body-medium">Last 28 days</mdw-span>
                </div>
                <div class="row-content">
                    <mdw-card outlined>
                        <mdw-span block type-style="body-medium">Views</mdw-span>
                        <mdw-span block type-style="headline-medium">3.8K</mdw-span>
                    </mdw-card>
                    <mdw-card outlined>
                        <mdw-span block type-style="body-medium">Watch time (hours)</mdw-span>
                        <mdw-span block type-style="headline-medium">112</mdw-span>
                    </mdw-card>
                </div>
            </div>
            <div class="row published-content">
                <div class="row-header">
                    <mdw-span block type-style="headline-small">Latest published content</mdw-span>
                </div>
            </div>
            <div class="row latest-comments"></div>
        </section>
        `
    }
}
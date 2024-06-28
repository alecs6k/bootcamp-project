import './home.component.scss';
import html from './home.component.html';

export class HomeComponent {
    constructor() {
        this.title = 'Dashboard';
    }

    build() {
        const div = document.createElement('div');
        div.innerHTML = html;
        return div;
    }
}
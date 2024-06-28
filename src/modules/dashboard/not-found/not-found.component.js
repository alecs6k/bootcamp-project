import './not-found.component.scss'
import html from './not-found.component.html';

export class NotFountComponent {
	constructor() {

	}

	build() {
		const div = document.createElement('div');
		div.innerHTML = html;
		return div.removeChild(div.firstChild);
	}
}
import './login.component.scss';
import html from './login.component.html';
import axios from "axios";
import { LocalStoreService } from '../../services/local-store.service';

export class LoginComponent {
    #ctxHtml;
    constructor() {
        this.#ctxHtml = document.createElement('div');
        this.#ctxHtml.innerHTML = html;
        this.#eventListeners();
    }

    async login(credentials) {
        try {
            const result = await axios.post("http://localhost:3000/auth", credentials);
            const localStorage = new LocalStoreService();
            localStorage.setUser(result.data);
            window.location.hash = '#/top';
        } catch (error) {
            alert("Invalid credentials");
        }
    }

    build() {
        return this.#ctxHtml.removeChild(this.#ctxHtml.firstChild);
    }

    #eventListeners() {
        const form = this.#ctxHtml.querySelector(".sign-in-form");
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const form = e.target;
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            this.login(data);
        });
    }
}
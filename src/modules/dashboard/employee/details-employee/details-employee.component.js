import './details-employee.component.scss';
import html from './details-employee.component.html';
import axios from "axios";
import { LocalStoreService } from "../../../services/local-store.service";

export class DetailsEmployeeComponent {
    #ctxHtml;

    constructor() {
        this.#ctxHtml = document.createElement('div');
        this.#ctxHtml.innerHTML = html;
        this.#init();
        this.#eventListener();
    }

    build() {
        return this.#ctxHtml;
    }

    #init() {
        const localStorage = new LocalStoreService();
        const employeeId = localStorage.getEmployeeId();

        axios.get(`http://localhost:3000/employees/${employeeId}`)
            .then((response) => this.updateData(response.data));
    }

    #eventListener() {
        const btnBack = this.#ctxHtml.querySelector('#details-employee-back');
        btnBack.addEventListener('click', () => {
            const localStorage = new LocalStoreService();
            localStorage.setEmployeeId(null);
            window.history.back();
        });
    }

    updateData(employee) {
        const fullName = this.#ctxHtml.querySelector('#details-employee-fullName');
        fullName.innerHTML = employee.fullName;

        const position = this.#ctxHtml.querySelector('#details-employee-position');
        position.innerHTML = employee.position;

        const email = this.#ctxHtml.querySelector('#details-employee-email');
        email.innerHTML = employee.email;

        const leaveDays = this.#ctxHtml.querySelector('#details-employee-leaveDays');
        leaveDays.innerHTML = employee.leaveDays;

        const supervisor = this.#ctxHtml.querySelector('#details-employee-supervisor');
        supervisor.innerHTML = employee.supervisor;

        const phone = this.#ctxHtml.querySelector('#details-employee-phone');
        phone.innerHTML = employee.phone;

        const admission = this.#ctxHtml.querySelector('#details-employee-admission');
        admission.innerHTML = employee.dateOfAdmission;

        const img = this.#ctxHtml.querySelector('#choose-image');
        img.src = employee.image || '../../../../assets/img/1.jpg';
    }
}
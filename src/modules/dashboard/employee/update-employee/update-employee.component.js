import './update-employee.component.scss';
import html from './update-employee.component.html';
import axios from "axios";
import {LocalStoreService} from "../../../services/local-store.service";

export class UpdateEmployeeComponent {
    #ctxHtml;

    constructor() {
        this.#ctxHtml = document.createElement('div');
        this.#ctxHtml.innerHTML = html;
        this.#init();
        this.#eventListener();
    }

    async onSave(employee) {
        try {
            const localStorage = new LocalStoreService();
            const employeeId = localStorage.getEmployeeId();

            employee.image = this.#ctxHtml.querySelector('#choose-image').src;

            employee.leaveDays = parseInt(employee.leaveDays);
            employee.phone = parseInt(employee.phone);
            await axios.put(`http://localhost:3000/employees/${employeeId}`, employee);
            alert('Employee data updated successfully');
            window.location.hash = "#/top/search-employee";
        } catch (error) {
            console.log(error);
        }
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
        const btnBack = this.#ctxHtml.querySelector('#update-employee-back');
        btnBack.addEventListener('click', () => {
            const localStorage = new LocalStoreService();
            localStorage.setEmployeeId(null);
            window.location.href = `#/top/search-employee`;
        });

        const form = this.#ctxHtml.querySelector(".top-form-container-employee");
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            this.onSave(data);
        });

        const fileInput = this.#ctxHtml.querySelector("#upload-btn");
        const image = this.#ctxHtml.querySelector("#choose-image");
        fileInput.onchange = async () => {
            const file = fileInput.files[0];
            image.src = await this.convertImageToBase64Async(file);
        };
    }

    updateData(employee) {
        const fullName = this.#ctxHtml.querySelector('#fullName');
        fullName.value = employee.fullName;

        const position = this.#ctxHtml.querySelector('#position');
        position.value = employee.position.toUpperCase();

        const email = this.#ctxHtml.querySelector('#email');
        email.value = employee.email;

        const leaveDays = this.#ctxHtml.querySelector('#leaveDays');
        leaveDays.value = employee.leaveDays;

        const supervisor = this.#ctxHtml.querySelector('#supervisor');
        supervisor.value = employee.supervisor.toUpperCase();

        const phone = this.#ctxHtml.querySelector('#phone');
        phone.value = employee.phone;

        const admission = this.#ctxHtml.querySelector('#dateAdmission');
        admission.value = employee.dateOfAdmission;

        const img = this.#ctxHtml.querySelector('#choose-image');
        img.src = employee.image || '../../../../assets/img/1.jpg';
    }

    async convertImageToBase64Async(image) {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.onload = () => resolve(fileReader.result);
            fileReader.onerror = (error) => reject(error);
            fileReader.readAsDataURL(image);
        });
    }
}
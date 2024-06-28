import './search-employee.component.scss';
import html from './search-employee.component.html';
import axios from "axios";
import {LocalStoreService} from "../../../services/local-store.service";

export class SearchEmployeeComponent {
    #ctxHtml;

    constructor() {
        this.#ctxHtml = document.createElement('div');
        this.#ctxHtml.innerHTML = html;
        this.#loadEmployees();
        this.#eventListeners();
    }

    build() {
        return this.#ctxHtml;
    }

    createRowEmployee(employee) {
        const tableBody = this.#ctxHtml.querySelector('.top-search-employee-table-tbody');
        const newRow = document.createElement('tr');
        newRow.setAttribute('employee', employee);
        const fullName = document.createElement('td');
        fullName.innerHTML = employee.fullName;
        const position = document.createElement('td');
        position.innerHTML = employee.position;
        const dateOfAdmission = document.createElement('td');
        dateOfAdmission.innerHTML = employee.dateOfAdmission;

        newRow.append(fullName);
        newRow.append(position);
        newRow.append(dateOfAdmission);
        newRow.append(this.createButtonsSection(employee));

        tableBody.append(newRow);
    }

    formatDate(date) {
        const dateParse = new Date(date)
        return `${dateParse.getDate()}/${dateParse.getMonth() + 1}/${dateParse.getFullYear()}`;
    }

    createButtonsSection(employee) {
        const buttonsCol = document.createElement('td');
        const buttonsSection = document.createElement('section');
        buttonsSection.classList.add('top-search-employee-table-controls');

        const btnView = document.createElement('a');
        btnView.classList.add('top-search-employee-table-controls-icon', 'top-search-employee-table-controls-icon--view');
        const iconView = document.createElement('span');
        iconView.innerHTML = 'visibility';
        iconView.classList.add('material-symbols-rounded');
        btnView.append(iconView);

        const btnUpdate = document.createElement('a');
        btnUpdate.classList.add('top-search-employee-table-controls-icon', 'top-search-employee-table-controls-icon--update');
        const iconUpdate = document.createElement('span');
        iconUpdate.innerHTML = 'edit_note';
        iconUpdate.classList.add('material-symbols-rounded');
        btnUpdate.append(iconUpdate);

        const btnDelete = document.createElement('button');
        btnDelete.setAttribute('employee', employee);
        btnDelete.classList.add('top-search-employee-table-controls-icon', 'top-search-employee-table-controls-icon--delete');
        const iconDelete = document.createElement('span');
        iconDelete.innerHTML = 'delete';
        iconDelete.classList.add('material-symbols-rounded');
        btnDelete.append(iconDelete);

        buttonsSection.append(btnView, btnUpdate, btnDelete);

        buttonsCol.append(buttonsSection);

        this.addEventListenerView(employee, btnView);
        this.addEventListenerUpdate(employee, btnUpdate);
        this.addEventListenerDelete(employee, btnDelete);

        return buttonsCol;
    }

    addEventListenerView(employee, btnView) {
        btnView.addEventListener('click', () => {
            const localStorage = new LocalStoreService();
            localStorage.setEmployeeId(employee.id)
            window.location.href = `#/top/details-employee`;
        });
    }

    addEventListenerUpdate(employee, btnUpdate) {
        btnUpdate.addEventListener('click', () => {
            const localStorage = new LocalStoreService();
            localStorage.setEmployeeId(employee.id)
            window.location.href = `#/top/update-employee`;
        });
    }

    addEventListenerDelete(employee, btnDelete) {
        btnDelete.addEventListener('click', () => {
            const modal = this.#ctxHtml.querySelector('#modal-confirm-delete');
            modal.showModal();

            const btnConfirmDelete = this.#ctxHtml.querySelector('.top-modal-confirm-delete-btn--delete');
            btnConfirmDelete.addEventListener('click', () => {
                modal.close();
                axios.delete(`http://localhost:3000/employees/${employee.id}`)
                    .then(() => {
                        alert('Employee successfully removed');
                        window.location.reload();
                    });
            });
        });
    }

    #loadEmployees() {
        axios.get("http://localhost:3000/employees")
            .then((response) => {
                response.data.forEach(employee => this.createRowEmployee(employee));
            });
    }

    #eventListeners() {
        const modal = this.#ctxHtml.querySelector('#modal-confirm-delete');

        const btnCancelDelete = this.#ctxHtml.querySelector('.top-modal-confirm-delete-btn--cancel');
        btnCancelDelete.addEventListener('click', () => {
            modal.close();
        });
    }
}
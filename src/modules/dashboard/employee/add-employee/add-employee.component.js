import "./add-employee.component.scss";
import html from "./add-employee.component.html";
import axios from "axios";

export class AddEmployeeComponent {
  #ctxHtml;
  constructor() {
    this.#ctxHtml = document.createElement("div");
    this.#ctxHtml.innerHTML = html;
    this.#eventListeners();
  }

  async onSave(employee) {
    try {
      const imageBase64 = await this.convertImageToBase64Async(employee.image);
      employee.image = imageBase64;
      if (!this.#ValidateFields(employee)) return;
      employee.leaveDays = parseInt(employee.leaveDays);
      employee.phone = parseInt(employee.phone);
      await axios.post("http://localhost:3000/employees", employee);
      this.#clearFields();
      window.location.hash = "#/top/search-employee";
    } catch (error) {
      alert("Error saving the employee");
    }
  }

  build() {
    return this.#ctxHtml;
  }

  #clearFields() {
    const form = this.#ctxHtml.querySelector(".top-form-container-employee");
    form.reset();
    const image = this.#ctxHtml.querySelector("#choose-image");
    image.src = "../../../../assets/img/1.jpg";
  }

  #ValidateFields(employee) {
    if (!employee) {
      alert("No employee has entered");
      return false;
    }
    if (!employee.fullName) {
      alert("The full name is required");
      return false;
    }
    if (!employee.position) {
      alert("The position is required");
      return false;
    }
    if (!employee.email) {
      alert("The email is required");
      return false;
    }
    if (!employee.phone) {
      alert("The phone is required");
      return false;
    }
    if (!employee.leaveDays) {
      alert("The leave days is required");
      return false;
    }
    if (!employee.dateOfAdmission) {
      alert("The date admission is required");
      return false;
    }
    if (!employee.supervisor) {
      alert("The supervisor is required");
      return false;
    }

    if (!employee.image) {
      alert("The image is required");
      return false;
    }
    return true;
  }

  #eventListeners() {
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
      const img = await this.convertImageToBase64Async(file);
      image.src = img;
    };

    const clearFields = this.#ctxHtml.querySelector(".clear");
    clearFields.addEventListener("click", () => {
      this.#clearFields();
    });
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

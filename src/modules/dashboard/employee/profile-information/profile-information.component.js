import "./profile-information.component.scss";
import html from "./profile-information.component.html";
import { LocalStoreService } from "../../../services/local-store.service";

export class ProfileInformationComponent {
  #ctxHtml;
  constructor() {
    this.#ctxHtml = document.createElement("div");
    this.#ctxHtml.innerHTML = html;

    const firstName = this.#ctxHtml.querySelector("#firstName");
    const lastName = this.#ctxHtml.querySelector("#lastName");
    const nickName = this.#ctxHtml.querySelector("#nickName");
    const birthday = this.#ctxHtml.querySelector("#birthday");
    const country = this.#ctxHtml.querySelector("#country");

    const localStorage = new LocalStoreService();
    const user = localStorage.getUser();

    const date = new Date(user.birthday);

    firstName.innerHTML = user.firstName;
    lastName.innerHTML = user.lastName;
    nickName.innerHTML = user.nickName;
    birthday.innerHTML = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    country.innerHTML = user.country;
  }

  build() {
    return this.#ctxHtml;
  }
}

import {appRoutingModule} from "./app-routing.module";
import html from "./app.component.html";
import {LocalStoreService} from "./services/local-store.service";

const linksMenu = [
    {
        name: 'Home',
        path: '#/top/home',
        icons: 'home',
        permissions: ['admin', 'user']
    },
    {
        name: 'Add Employee',
        path: '#/top/add-employee',
        icons: 'person_add',
        permissions: ['admin']
    },
    {
        name: 'Search Employee',
        path: '#/top/search-employee',
        icons: 'search',
        permissions: ['admin']
    },
    {
        name: "Profile Information",
        path: "#/top/profile-information",
        icons: "settings_account_box",
        permissions: ["admin", "user"],
    },

    {
        name: "Logout",
        path: "#/login",
        icons: "login",
        permissions: ["admin", "user"],
    },
];

export class AppComponent {
    constructor() {
        this.title = "Login";
    }

    build() {
        const localStorage = new LocalStoreService();
        const user = localStorage.getUser();

        const appComponent = document.createElement("div");
        appComponent.innerHTML = html;

        let navCloseBtn = appComponent.querySelector(
            "#top-sidebar-close-navbar-btn"
        );
        let navOpenBtn = appComponent.querySelector(".top-navbar-btn-menu");
        let navbar = appComponent.querySelector("#top-sidebar");
        const links = appComponent.querySelector(".top-sidebar-links-menu");
        const userName = appComponent.querySelector(".user-name");
        userName.innerHTML = `Hello ${user.firstName} ${user.lastName}, welcome back!`

        navOpenBtn.addEventListener("click", () => {
            navbar.classList.add("open-top-sidebar");
        });
        navCloseBtn.addEventListener("click", () => {
            navbar.classList.remove("open-top-sidebar");
        });

        linksMenu.forEach((link) => {
            if (link.permissions.includes(user.role)) {
                const linkElement = document.createElement("a");
                linkElement.classList.add("link");
                linkElement.setAttribute("href", link.path);
                linkElement.innerHTML = `
                <span class="icon material-symbols-rounded">${link.icons}</span>
                <span class="link-text">${link.name}</span>`;
                links.appendChild(linkElement);
                if (link.name === "Logout") {
                    linkElement.classList.add("logout");
                    linkElement.addEventListener("click", () => {
                        localStorage.clear();
                        window.location.hash = "#/login";
                    });
                }
            }
        });
        const appChild = appComponent.querySelector("#appChild");
        appChild.appendChild(
            appRoutingModule(
                window.location.hash.replace("#", "").toLocaleLowerCase()
            )
        );
        return appComponent.removeChild(appComponent.firstChild);
    }
}
import { LocalStoreService } from './modules/services/local-store.service.js';
import { AppComponent } from './modules/app.component.js';
import { LoginComponent } from './modules/public/login/login.component';
import './styles.scss';
import './styles/common/common.scss';
import './styles/icons/icons.scss';
import './styles/common/input.scss';
import './styles/common/text.scss';
import './styles/common/modules.scss';
import './styles/common/button.scss';
import './styles/common/icons.scss';
import './styles/common/breadcrudmbs.scss';
import './styles/common/media-queries.scss';
import './styles/common/row.scss';
import './modules/app.component.scss';
import './modules/dashboard/home/home.component.scss';

const routes = {
    '/': LoginComponent,
    '/login': LoginComponent
};

const appBuild = () => {
    try {
        const root = document.querySelector("#appRoot");
        const hash = window.location.hash
        const pathHash = hash.replace('#', '').toLocaleLowerCase();
        root.innerHTML = "";
        let component = routes[pathHash]
        if (!component) {
            const localStorage = new LocalStoreService();
            if (localStorage.getUser()) {
                component = AppComponent;
                window.location.hash = hash;
            }
            else {
                component = LoginComponent;
                window.location.hash = '#/login';
            }
        }
        root.appendChild(new component().build());
    } catch (error) {
        console.log(error);
    }
};

const appRun = () => {
    appBuild();
    window.addEventListener("hashchange", () => {
        appBuild();
    });
};

appRun();
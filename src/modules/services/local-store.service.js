export class LocalStoreService {
    #store;

    constructor() {
        this.#store = window.localStorage;
    }

    get(key) {
        return this.#store.getItem(key);
    }

    set(key, value) {
        this.#store.setItem(key, value);
    }

    remove(key) {
        this.#store.removeItem(key);
    }

    clear() {
        this.#store.clear();
    }

    get length() {
        return this.#store.length;
    }

    key(index) {
        return this.#store.key(index);
    }

    setUser(rolUser) {
        this.set("User", JSON.stringify(rolUser));
    }

    getUser() {
        return JSON.parse(this.get("User"));
    }

    setEmployeeId(employeeId) {
        this.set('employeeId', employeeId);
    }

    getEmployeeId() {
        return this.get('employeeId');
    }
}
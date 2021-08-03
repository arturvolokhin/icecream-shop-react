const setLocalStorage = (name, data) => {
    localStorage.setItem(name, JSON.stringify(data));
};

const getLocalStorage = (name) => {
    !localStorage.getItem(name) && setLocalStorage(name, []);
    return JSON.parse(localStorage.getItem(name));
};

export { setLocalStorage, getLocalStorage };
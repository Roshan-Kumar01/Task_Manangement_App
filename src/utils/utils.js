export function setInLocalStorage(name, newArr){
    const arrayOfObjectsString = JSON.stringify(newArr);

    // Store the stringified array in localStorage under a specific key
    localStorage.setItem(name, arrayOfObjectsString);
}

export function getFromLocalStorage(name) {
    const storedArrayString = localStorage.getItem(name);
    const storedArrayOfObjects = JSON.parse(storedArrayString);

    return storedArrayOfObjects
}

export function removeFromLocalStorage(name) {
    localStorage.removeItem(name);
}
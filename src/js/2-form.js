'use strict';

const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";

function getFormData(form) {
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();
     
    return {
        email,
        message
    }
}

function saveFormDataToLocalStorage(event) {
    const formData = getFormData(event.currentTarget);
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

function loadFormDataFromLocalStorage() {
    const dataFromLocalStorage = localStorage.getItem(localStorageKey);
    if (dataFromLocalStorage) {
        const data = JSON.parse(dataFromLocalStorage);
        form.elements.email.value = data.email;
        form.elements.message.value = data.message;
    }
}

function handleSubmit(event){
    event.preventDefault();

    const email = event.target.elements.email.value.trim();
    const message= event.target.elements.message.value.trim();

    if (email === "" || message === "") {
        return alert("Please fill all fields");
    } else { 
        const loginData = {
            email,
            message,
        }
        console.log(loginData);
    }
    localStorage.removeItem(localStorageKey);

    form.reset();
};
    
form.addEventListener("submit",handleSubmit);
form.addEventListener("input", saveFormDataToLocalStorage);

loadFormDataFromLocalStorage();
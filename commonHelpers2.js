import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const a=document.querySelector(".feedback-form"),l="feedback-form-state";function s(e){const t=e.elements.email.value.trim(),o=e.elements.message.value.trim();return{email:t,message:o}}function r(e){const t=s(e.currentTarget);localStorage.setItem(l,JSON.stringify(t))}function m(){const e=localStorage.getItem(l);if(e){const t=JSON.parse(e);a.elements.email.value=t.email,a.elements.message.value=t.message}}function n(e){e.preventDefault();const t=e.target.elements.email.value.trim(),o=e.target.elements.message.value.trim();if(t===""||o==="")return alert("Please fill all fields");console.log({email:t,message:o}),localStorage.removeItem(l),a.reset()}a.addEventListener("submit",n);a.addEventListener("input",r);m();
//# sourceMappingURL=commonHelpers2.js.map

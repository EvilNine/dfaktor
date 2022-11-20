import Accordion from "./components/accordion.js";

document.addEventListener('DOMContentLoaded', function () {
    Accordion({
        btn:            '.accordion__trigger',
        body:           '.accordion__body',
        bodyContent:    '.accordion__content'
    });
});
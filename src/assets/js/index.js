import Accordion from "./components/accordion.js";

document.addEventListener('DOMContentLoaded', function () {
    Accordion({
        item:       '.accordion__item',
        btn:        '.accordion__trigger',
        btnActive:  'accordion__trigger-active',
        body:       '.accordion__body',
        bodyHidden: 'accordion__body-hidden'
    });
});
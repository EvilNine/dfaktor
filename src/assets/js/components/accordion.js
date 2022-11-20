const Accordion = (props) => {
    const items = document.querySelectorAll(props.btn);
    const itemBody = document.querySelectorAll(props.body);
    
    for (let i = 0; i < itemBody.length; i++) {
        const contentHeight = itemBody[i].querySelector(props.bodyContent).getBoundingClientRect().height;
        itemBody[i].style.setProperty("--height", `${contentHeight}px`);
    };
    function toggleAccordion() {
        const itemToggle = this.getAttribute('aria-expanded');
        for (let i = 0; i < items.length; i++) {
            items[i].setAttribute('aria-expanded', 'false');
        }
        if (itemToggle == 'false') this.setAttribute('aria-expanded', 'true');
    }

    items.forEach(item => item.addEventListener('click', toggleAccordion));
}

export default Accordion;
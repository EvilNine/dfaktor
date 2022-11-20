const Accordion = (props) => {
    const btn = document.querySelectorAll(props.btn);

    const accordionTriggerDisable = (trigger) => {
        trigger.disabled = true;
        setTimeout(() => {
            trigger.disabled = false;
        }, 500);
    }

    const accordionOpen = (trigger, body) => {
        body.style.height = body.scrollHeight + 'px';
        if (body.style.height === "0px" || window.getComputedStyle(body).height === "0px") {
            trigger.classList.add(props.btnActive);
            trigger.setAttribute("aria-expanded", "true");
            body.setAttribute("aria-hidden", "false");
            body.classList.remove(props.bodyHidden);
        }
    }

    const accordionClose = (trigger, body) => {
        if (body.style.height !== "0px" && window.getComputedStyle(body).height !== "0px") {
            trigger.classList.remove(props.btnActive);
            trigger.setAttribute("aria-expanded", "false");
            body.setAttribute("aria-hidden", "true");
            body.style.height = body.scrollHeight + 'px';
            setTimeout(() => {
                body.style.height = "0";
            }, 0);
            setTimeout(() => {
                body.classList.add(props.bodyHidden);
            }, 500);
        }
    }

    const setHeightOnTransitionEnd = (body) => {
        body.addEventListener("transitionend", () => {
            if (body.style.height !== "0px") {
                body.style.height = "auto";
            }
        })
    }

    const accordionToggle = (target) => {
        const trigger = target;
        const body = target.closest(props.item).querySelector(props.body);
        setHeightOnTransitionEnd(body);
        accordionClose(trigger, body);
        accordionOpen(trigger, body);
        accordionTriggerDisable(trigger);
    }

    btn.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            accordionToggle(e.currentTarget);
        })
    })

}

export default Accordion;
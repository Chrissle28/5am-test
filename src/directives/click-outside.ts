import { DirectiveBinding } from 'vue';

interface ClickOutsideElement extends HTMLElement {
    clickOutsideEvent?: (event: MouseEvent) => void;
}

const clickOutsideDirective = {
    beforeMount(el: ClickOutsideElement, binding: DirectiveBinding) {
        // Funktion, die aufgerufen wird, wenn ein Klick registriert wird
        el.clickOutsideEvent = function (event: MouseEvent) {
            // Überprüfen, ob der Klick außerhalb des Elements erfolgt ist
            if (!(el == event.target || el.contains(event.target as Node))) {
                // Wenn ja, rufe die gebundene Methode auf
                binding.value(event, el);
            }
        };
        // Event-Listener zum Body hinzufügen
        document.body.addEventListener('click', el.clickOutsideEvent);
    },
    unmounted(el: ClickOutsideElement) {
        // Event-Listener vom Body entfernen
        document.body.removeEventListener('click', el.clickOutsideEvent!);
    },
};

export default clickOutsideDirective;

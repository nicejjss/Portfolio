import { BaseController } from "./base.js";
import { navigations } from "./constants.js"


export class NavigationController extends BaseController {

    displayContext() {
        let ul = document.createElement('ul');
        ul.id = 'navigation';
        navigations.forEach(item => {
            let li = document.createElement('li');
            li.id = item;
            li.classList.add('cleardot');
            li.textContent = item.toUpperCase();
            ul.appendChild(li);
        });
        this.displayItemContext(ul);
    }

    displayItemContext(ul) {
        let header = document.getElementById('header');
        header.appendChild(ul);
    }
}
import { CodeController } from "../code.js"
import { AboutController } from "../about.js";
import { HomeController } from "../home.js";
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

    displayUnderline(element) {
        switch(true) {
            case (element instanceof HomeController):
                this.clearUnderline();
                this.showUnderline('home');
                break;
            case (element instanceof AboutController):
                this.clearUnderline();
                this.showUnderline('about');
                break;
            case (element instanceof CodeController):
                this.clearUnderline();
                this.showUnderline('code');
                break;
        }

    }

    showUnderline(element) {
        let ele = document.getElementById(element);
        ele.style.textDecoration = 'underline';
    }

    clearUnderline() {
        let list = document.querySelectorAll('#navigation li');
        list.forEach(element => {
            element.style.textDecoration = 'none';
        });
    }
    
}
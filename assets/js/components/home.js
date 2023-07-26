import { BaseController } from "../base.js";
export class HomeController extends BaseController {

    dynamicTexts = [
        'Developer',
        'Gamer',
        'Kẻ Mộng Mơ',
    ];

    staticText = "I'm";

    countText = 0;

    setI;

    displayContext() {

        let left = document.getElementById('left-side');

        let introduce = document.createElement('div');
        introduce.id = 'introduce-text';

        let pstaticText = document.createElement('p');
        pstaticText.id = 'text-static';
        pstaticText.innerText = this.staticText;

        introduce.appendChild(pstaticText);
        this.getDynamicElementCircle(introduce);
        left.appendChild(introduce);
    }

    getDynamicElementCircle(introduce) {
        this.getDynamicElement(introduce);
        this.setI = setInterval(() => this.getDynamicElement(introduce), 4000);
    }

    getDynamicElement(introduce) {
        let dynamicT = document.getElementById('texts-dynamic');
        if (document.body.contains(dynamicT)) {
            dynamicT.remove();
        }

        if (this.countText === 3) {
            this.countText = 0;
        }
        let divDynamicText = document.createElement('div');
        divDynamicText.id = 'texts-dynamic';
        divDynamicText.innerText = this.dynamicTexts[this.countText];
        introduce.appendChild(divDynamicText);
        this.countText++;
    }

    clearContext(){
        let left = document.getElementById('left-side');
        left.innerHTML = '';
        let right = document.getElementById('right-side');
        right.innerHTML = '';
        clearInterval(this.setI);
    }
}


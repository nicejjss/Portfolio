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

    displayRight() {
        let imageContainer = document.createElement('div');
        imageContainer.className = 'image-container';

        let image = document.createElement('img');
        image.src = './assets/resource/image/anhdung2.jpg';

        imageContainer.appendChild(image);

        super.displayRight(imageContainer);
    }

    displayLeft() {
        let introduce = document.createElement('div');
        introduce.id = 'introduce-text';

        let pstaticText = document.createElement('p');
        pstaticText.id = 'text-static';
        pstaticText.innerText = this.staticText;

        introduce.appendChild(pstaticText);
        this.getDynamicElementCircle(introduce);
        this.displayAnimation(introduce);
        super.displayLeft(introduce);
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

    clearContext() {
        super.clearContext();
        clearInterval(this.setI);
    }
}


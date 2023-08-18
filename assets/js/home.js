import { BaseController } from "./components/base.js";
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
        imageContainer.className = 'image-container-home';

        let image = document.createElement('img');
        image.classList.add('image');
        image.src = './assets/resource/image/anhdung2.jpg';

        imageContainer.appendChild(image);
        this.displayAnimation(imageContainer, 'fromRightToLeft', 0.5, 'linear',0.5);
        super.displayRight(imageContainer);
    }

    displayLeft() {
        let introduce = this.displayIntroduce();
        this.displayLeftDetail(introduce);
        super.displayLeft(introduce);
    }

    displayLeftDetail(element){
        let pstaticText = document.createElement('p');
        pstaticText.id = 'text-static';
        pstaticText.innerText = this.staticText;

        element.appendChild(pstaticText);
        this.getDynamicElementCircle(element);
        this.displayAnimation(pstaticText, 'fromLeftToRight', 0.5, 'linear',0);
    }

    getDynamicElementCircle(introduce) {
        this.getDynamicElement(introduce);
        this.setI = setInterval(() => this.getDynamicElement(introduce), 6000);
    }

    getDynamicElement(introduce) {
        let dynamicT = document.getElementById('texts-dynamic');
        if (document.body.contains(dynamicT)) {
            dynamicT.remove();
        }

        if (this.countText === this.dynamicTexts.length) {
            this.countText = 0;
        }

        let divDynamicText = document.createElement('div');
        divDynamicText.id = 'texts-dynamic';
        divDynamicText.classList.add('text');
        divDynamicText.innerText = this.dynamicTexts[this.countText];
        introduce.appendChild(divDynamicText);
        this.countText++;
    }

    clearContext() {
        super.clearContext();
        clearInterval(this.setI);
    }
}


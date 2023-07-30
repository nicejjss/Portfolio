import { BaseController } from "./components/base.js";
import { FLAG_OFF } from "./components/constants.js"

export class CodeController extends BaseController {

    openT = "Projects";
    codeItems = [
        {
            'name': 'BLOG',
            'technique': 'HTML, CSS, JS, PHP',
            'link': 'https://mycms001.000webhostapp.com/',
            'year': 2022,
        },
        {
            'name': 'WORKPLACE',
            'technique': 'HTML, CSS, JS',
            'link': 'https://nicejjss.github.io/workspace/',
            'year': 2021,
        },
    ]

    displayRight() {
        let listWeb = document.createElement('ul');
        listWeb.classList.add('cleardot');
        listWeb.id = 'list-web';

        this.displayItemWeb(listWeb);
        super.displayRight(listWeb);
    }

    displayLeft() {
        let introduce = this.displayIntroduce();
        this.displayLeftDetail(introduce);
        super.displayLeft(introduce);
    }

    displayLeftDetail(element) {

        let headerText = document.createElement('div');
        headerText.id = 'text-head';
        headerText.className = 'text relative';
        headerText.innerText = 'PROJECTS'
        let ul = document.createElement('ul');
        ul.classList.add('cleardot');
        ul.id = 'list-code';


        let delay = 0.1;
        this.codeItems.forEach((element, key) => {
            let li = document.createElement('li');
            li.classList.add('item-code');
            
            let pTitle = document.createElement('p');
            pTitle.className = 'item-title relative';
            pTitle.innerText = element.name;

            this.displayAnimation(pTitle, 'fromLeftToRight', 0.5, 'linear', (delay * key) + delay);

            delay = delay + 0.1;

            let pContent = document.createElement('p');
            pContent.className = 'item-content relative';
            pContent.innerText = element.technique;
            this.displayAnimation(pContent, 'fromLeftToRight', 0.5, 'linear', (delay * key) + delay);

            delay = delay + 0.1;

            let pYear = document.createElement('p');
            pYear.className = 'item-content relative';
            pYear.innerText = element.year;
            this.displayAnimation(pYear, 'fromLeftToRight', 0.5, 'linear', (delay * key) + delay);

            li.appendChild(pTitle);
            li.appendChild(pContent);
            li.appendChild(pYear);

            ul.appendChild(li);
        });
        element.appendChild(headerText);
        element.appendChild(ul);
    }

    displayItemWeb(listWeb) {
        this.codeItems.forEach((context, key) => {
            let li = document.createElement('li');
            li.classList.add('item-web');
            if(key % 2 === 0){
                li.style.alignSelf = 'flex-start';
            } else {
                li.style.alignSelf = 'flex-end';
            }
            this.displayItemContext(li, context);

            let div = document.createElement('div');
            div.className = 'item-web-container';
            div.appendChild(li);

            if (key%2 !== 0) {
                div.style.flexDirection = 'row-reverse';
            }

            let webName = document.createElement('a');
            webName.className = 'web-name';
            webName.href = context.link;
            webName.innerText = context.name;

            div.appendChild(webName);

            if(key%2 === 0){
                this.displayAnimation(div, 'fromRightToLeft', 0.5, 'linear', (0.2 * key) + 0.2);
            } else {
                this.displayAnimation(div, 'fromLeftToRight', 0.5, 'linear', (0.2 * key) + 0.2);
            }

            listWeb.appendChild(div);
        });

    }

    displayItemContext(li, context) {
        let a = document.createElement('a');
        a.classList.add('item-web-link');
        a.href = context.link;

        let iframe = document.createElement('iframe');
        iframe.src = context.link;
        iframe.setAttribute('scrolling', 'no');
        iframe.setAttribute('frameborder', FLAG_OFF);

        li.appendChild(a);
        li.appendChild(iframe);
    }

    changeBaseElement(){
        let container = document.getElementsByClassName('container')[0];
        container.style.height = '90vh';
        let introduceT= document.getElementById('introduce-text');
        introduceT.style.position = 'absolute';
    }

}


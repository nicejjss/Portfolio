import { BaseController } from "./components/base.js";
import { FLAG_OFF } from "./components/constants.js"

export class CodeController extends BaseController {

    openT = "Projects";
    codeItems = [
        {
            'name': 'DOTS',
            'tech': 'HTML, CSS, JS',
            'link': 'https://dots-sage.vercel.app/',
            'year': 2023,
        },
        {
            'name': 'BLOG',
            'tech': 'HTML, CSS, JS, PHP, MYSQL',
            'link': 'https://mycms001.000webhostapp.com/',
            'year': 2022,
        },
        {
            'name': 'WORKPLACE',
            'tech': 'HTML, CSS, JS',
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

            let webTech = document.createElement('p');
            webTech.className = 'web-tech';
            webTech.innerText = context.tech;

            let webYear = document.createElement('p');
            webYear.className = 'web-year';
            webYear.innerText = context.year;

            let webInfo = document.createElement('div');
            webInfo.id = 'web-info';

            webInfo.appendChild(webName);
            webInfo.appendChild(webTech);
            webInfo.appendChild(webYear);

            div.appendChild(webInfo);

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
        iframe.setAttribute('loading','lazy');
        iframe.setAttribute('scrolling', 'no');
        iframe.setAttribute('frameborder', FLAG_OFF);
        iframe.classList.add('bordered');

        li.appendChild(a);
        li.appendChild(iframe);
    }
}


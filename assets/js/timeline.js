import { BaseController } from "./components/base.js";

export class TimelineController extends BaseController {

    openT = "Projects";
    timeLineItems = [
        {
            'name': 'VTI',
            'img': './assets/resource/image/timeline/vti.jpg',
            'year': "2023 -",
        },
        {
            'name': 'GRADUATION - HOU',
            'img': './assets/resource/image/timeline/graduation.jpg',
            'year': "2020 - 2025",
        },
    ]

    displayRight() {
        let listTimeline = document.createElement('ul');
        listTimeline.classList.add('cleardot');
        listTimeline.id = 'list-timeLine';

        this.displayItemtimeLine(listTimeline);
        super.displayRight(listTimeline);
    }

    displayItemtimeLine(listTimeline) {
        this.timeLineItems.forEach((context, key) => {
            let li = document.createElement('li');
            li.classList.add('item-timeLine');
            if(key % 2 === 0){
                li.style.alignSelf = 'flex-start';
            } else {
                li.style.alignSelf = 'flex-end';
            }
            this.displayItemContext(li, context);

            let div = document.createElement('div');
            div.className = 'item-timeLine-container';
            div.appendChild(li);

            if (key%2 !== 0) {
                div.style.flexDirection = 'row-reverse';
            }

            let timeLineName = document.createElement('p');
            timeLineName.className = 'timeLine-name';
            timeLineName.href = context.link;
            timeLineName.innerText = context.name;

            let timeLineYear = document.createElement('p');
            timeLineYear.className = 'timeLine-year';
            timeLineYear.innerText = context.year;

            let timeLineInfo = document.createElement('div');
            timeLineInfo.classList.add('timeLine-info');

            timeLineInfo.appendChild(timeLineName);
            timeLineInfo.appendChild(timeLineYear);

            div.appendChild(timeLineInfo);

            if(key%2 === 0){
                this.displayAnimation(div, 'fromRightToLeft', 0.5, 'linear', (0.2 * key) + 0.2);
            } else {
                this.displayAnimation(div, 'fromLeftToRight', 0.5, 'linear', (0.2 * key) + 0.2);
            }

            listTimeline.appendChild(div);
        });

    }

    displayItemContext(li, context) {
        let img = document.createElement('img');
        img.alt = context.name;
        img.src = context.img;
        img.id = context.name.split(" ")[0];
    
        img.classList.add('bordered');
        img.classList.add('item-img');

        li.appendChild(img);
    }
}


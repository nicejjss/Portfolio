import { BaseController } from "./components/base.js";

export class AboutController extends BaseController {


    person = {
        'name': 'Dao Duc Loc',
        'dayBorn': '04/03/2002',
        'school': 'Hanoi Open University',
        'stay': 'Hanoi',
        'like': 'Games, Football, Reading',
        'timeLine':[
            {
            'time': '01/02/2023',
            'place': 'VTI Stock Company',
            'position': 'Internship',
            },
        ]
    }

    displayLeft() {
        let introduce = this.displayIntroduce();
        this.displayLeftDetail(introduce);
        super.displayLeft(introduce);
    }

    displayLeftDetail(element) {

    }

    displayRight() {

    }

    changeBaseElement() {

        let container = document.getElementsByClassName('container')[0];
        container.style.alignItems = 'center';

        let right = document.getElementById('right-side');
        let left = document.getElementById('left-side');
        left.style.textAlign = 'center';
        right.classList.add('absolute');
        left.classList.add('absolute');

        let introduceT= document.getElementById('introduce-text');
        introduceT.style.position = 'static';
    }
}


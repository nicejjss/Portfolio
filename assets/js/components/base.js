export class BaseController {

    displayContext() {
        this.displayRight();
        this.displayLeft();
        this.changeBaseElement();
    }

    displayRight(element = null) {
        let right = document.getElementById('right-side');
        if (element != null) {
            right.appendChild(element);
        } else {
            right.style.display = 'none';
        }
    }

    displayLeft(element = null) {
        let left = document.getElementById('left-side');
        if (element != null) {
            left.appendChild(element);
        } else {
            left.style.display = 'none';
        }
    }

    displayLeftDetail(){}

    clearContext() {
        let left = document.getElementById('left-side');
        left.innerHTML = '';
        left.removeAttribute('class');
        let right = document.getElementById('right-side');
        right.innerHTML = '';
        right.removeAttribute('class');
        left.removeAttribute('style');
    }

    displayAnimation(element, AnimationName, duration, type, delay) {
        element.style.animation = '';
        element.style.animation = AnimationName + ' ' + duration + 's' + ' ' + type + ' ' + delay + 's';
        element.style.animationFillMode = 'forwards';
    }

    displayIntroduce() {
        let introduce = document.createElement('div');
        introduce.id = 'introduce-text';
        return introduce;
    }

    changeBaseElement(){

    }

    clearAnimation() {
    }
}
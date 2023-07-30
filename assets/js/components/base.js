export class BaseController {

    displayContext() {
        this.displayRight();
        this.displayLeft();
        this.changeBaseElement();
    }

    displayRight(element) {
        let right = document.getElementById('right-side');
        right.appendChild(element);
    }

    displayLeft(element) {
        let left = document.getElementById('left-side');
        left.appendChild(element);
    }

    displayLeftDetail(){

    }

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
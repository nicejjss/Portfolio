export class BaseController {

    animationElements = [];

    displayContext(){
        this.displayRight();
        this.displayLeft();
        this.displayAnimation();
    }

    displayRight(element) {
        let right = document.getElementById('right-side');
        this.animationElements.push(element);
        right.appendChild(element);
    }

    displayLeft(element) {
        let left = document.getElementById('left-side');
        this.animationElements.push(element)
        left.appendChild(element);
    }

    clearContext(){
        this.clearAnimation();
            let left = document.getElementById('left-side');
            left.innerHTML = '';
            let right = document.getElementById('right-side');
            right.innerHTML = '';
    }

    displayAnimation() {
        this.animationElements.forEach(element => {
            element.style.animation = 'displayContext 1s linear';
        });
    }

    clearAnimation() {
        this.animationElements.forEach(element => {
            element.style.animation = 'clearContext 0.5s linear';
        });
    }
}
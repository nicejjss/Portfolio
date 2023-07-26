export class BaseController {

    displayContext(){

    }

    clearContext(){
        let left = document.getElementById('left-side');
        left.innerHTML = '';
        let right = document.getElementById('right-side');
        right.innerHTML = '';
        clearInterval()
    }
}
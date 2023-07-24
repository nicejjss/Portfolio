import { AboutController } from './components/about.js';
import { displayBackground } from './components/background.js';
import { CodeController } from './components/code.js';
import { HomeController } from './components/home.js';


var home = new HomeController();
var code = new CodeController();
var about = new AboutController();
var navigation;
document.getElementById('home').onclick = function () {
    navigation = 0;
    var homeContext = document.getElementById('introduce-text');
    if (!document.body.contains(homeContext)) {
        home.displayContext(navigation);
    } 
    displayBackground(navigation);
}

document.getElementById('about').onclick = function () {
    navigation = 1;
    about.displayContext(navigation);
    displayBackground(navigation);
}

document.getElementById('coding').onclick = function () {
    navigation = 2;
    code.displayContext(navigation);
    displayBackground(navigation);
}


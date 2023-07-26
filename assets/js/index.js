import { AboutController } from './components/about.js';
import { displayBackground } from './components/background.js';
import { CodeController } from './components/code.js';
import { HomeController } from './components/home.js';

class Index {

    constructor(homeController, codeController, aboutController) {
        this.homeController = homeController;
        this.codeController = codeController;
        this.aboutController = aboutController;
    }

    DisplayFunction() {
        document.getElementById('home').onclick = () => {
            var homeContext = document.getElementById('introduce-text');
            if (!document.body.contains(homeContext)) {
                // this.codeController.clearContext();
                // this.aboutController.clearContext();
                this.homeController.displayContext();
            }
            displayBackground(this.homeController);
        }

        document.getElementById('about').onclick = () => {          
            // this.homeController.clearContext();
            // this.codeController.clearContext();
            // this.aboutController.displayContext();
            displayBackground(this.aboutController);
        }

        document.getElementById('coding').onclick = () => {
            // this.aboutController.clearContext();
            // this.homeController.clearContext();
            // this.codeController.displayContext();
            displayBackground(this.codeController);
        }
    }

    displayDefault(){
        this.homeController.displayContext();
    }

}


let homeController = new HomeController();
let codeController = new CodeController();
let aboutController = new AboutController();

let index = new Index(homeController, codeController, aboutController);
index.DisplayFunction();
index.displayDefault();
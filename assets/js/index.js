import { AboutController } from './about.js';
import { Background } from './components/background.js';
import { CodeController } from './code.js';
import { HomeController } from './home.js';
import { NavigationController } from './components/navigation.js';

class Index {

    constructor(homeController, codeController, aboutController, Background, Navigation) {
        this.homeController = homeController;
        this.codeController = codeController;
        this.aboutController = aboutController;
        this.Background = Background;
        this.Navigation = Navigation;
    }

    DisplayNavigation() {
        this.Navigation.displayContext();
    }


    DisplayFunction() {
        document.getElementById('home').onclick = () => {
            var homeContext = document.getElementsByClassName('image-container-home')[0];
            if (!document.body.contains(homeContext)) {
                this.codeController.clearContext();
                this.aboutController.clearContext();
                this.homeController.displayContext();
            }
            background.displayBackground(this.homeController);
        }

        document.getElementById('about').onclick = () => {
            var contenContainer = document.getElementById('content-container');
            if (!document.body.contains(contenContainer)) {
                this.homeController.clearContext();
                this.codeController.clearContext();
                this.aboutController.displayContext();
            }
            background.displayBackground(this.aboutController);
        }

        document.getElementById('code').onclick = () => {
            var listCode = document.getElementById('list-web');
            if (!document.body.contains(listCode)) {
                this.aboutController.clearContext();
                this.homeController.clearContext();
                this.codeController.displayContext();
            }

            background.displayBackground(this.codeController);
        }
    }

    displayDefault() {
        this.aboutController.displayContext();
        let video = document.getElementsByTagName('video')[0];
        // video.play()
        background.displayBackground(this.aboutController);
    }

}


let homeController = new HomeController();
let codeController = new CodeController();
let aboutController = new AboutController();
let background = new Background();
let navigation = new NavigationController();

let index = new Index(homeController, codeController, aboutController, background, navigation);
index.DisplayNavigation();
index.DisplayFunction();
index.displayDefault();


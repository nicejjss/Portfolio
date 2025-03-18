import { AboutController } from './about.js';
import { Background } from './components/background.js';
import { CodeController } from './code.js';
import { HomeController } from './home.js';
import { NavigationController } from './components/navigation.js';
import { TimelineController } from './timeline.js';

class Index {

    constructor(homeController, codeController, aboutController, timelineController, Background, Navigation) {
        this.homeController = homeController;
        this.codeController = codeController;
        this.aboutController = aboutController;
        this.timelineController = timelineController;
        this.Background = Background;
        this.Navigation = Navigation;
    }

    DisplayNavigation() {
        this.Navigation.displayContext();
    }


    DisplayFunction() {
        document.getElementById('home').onclick = () => {
            let homeContext = document.getElementsByClassName('image-container-home')[0];
            if (!document.body.contains(homeContext)) {
                this.codeController.clearContext();
                this.aboutController.clearContext();
                this.timelineController.clearContext();
                this.homeController.displayContext();
            }
            background.displayBackground(this.homeController);
        }

        document.getElementById('about').onclick = () => {
            let contenContainer = document.getElementById('content-container');
            if (!document.body.contains(contenContainer)) {
                this.homeController.clearContext();
                this.codeController.clearContext();
                this.timelineController.clearContext();
                this.aboutController.displayContext();
            }
            background.displayBackground(this.aboutController);
        }

        document.getElementById('projects').onclick = () => {
            let listCode = document.getElementById('list-web');
            if (!document.body.contains(listCode)) {
                this.aboutController.clearContext();
                this.homeController.clearContext();
                this.timelineController.clearContext();
                this.codeController.displayContext();
            }

            background.displayBackground(this.codeController);
        }

        document.getElementById('timeline').onclick = () => {
            let listCode = document.getElementById('list-timeline');
            if (!document.body.contains(listCode)) {
                this.aboutController.clearContext();
                this.homeController.clearContext();
                this.codeController.clearContext();
                this.timelineController.displayContext();
            }

            background.displayBackground(this.timelineController);
        }
    }

    displayDefault() {
        this.homeController.displayContext();
        background.displayBackground(this.homeController);
    }

}


let homeController = new HomeController();
let codeController = new CodeController();
let aboutController = new AboutController();
let timelineController = new TimelineController();
let background = new Background();
let navigation = new NavigationController();

let index = new Index(homeController, codeController, aboutController, timelineController, background, navigation);
index.DisplayNavigation();
index.DisplayFunction();
index.displayDefault();


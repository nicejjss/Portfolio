import { FLAG_OFF, FLAG_ON, aboutbg, backgrounds, codebg, homebg, timebg} from "./constants.js";
import { AboutController } from "../about.js";
import { CodeController } from "../code.js";
import { HomeController } from "../home.js";
import { TimelineController } from "../timeline.js";

export class Background {

    backgroundAfter = document.getElementById('backgroundafter');
    backgroundBefore = document.getElementById('backgroundbefore');


    displayBackground(navigation) {
        switch (true) {
            case (navigation instanceof HomeController): {
                this.whatshow(homebg);
            }; break;
            case (navigation instanceof AboutController): {
                this.whatshow(aboutbg);
            }; break;
            case (navigation instanceof CodeController): {
                this.whatshow(codebg);
            }; break;
            case (navigation instanceof TimelineController): {
                this.whatshow(timebg);
            }; break;
            default:
                this.whatshow(FLAG_OFF);
        }
    }

    whatshow(navigation) {
        let navigation1 = navigation ?? 0;
        if (this.backgroundAfter.style.opacity == FLAG_ON) {
            this.backgroundAfter.style.opacity = FLAG_OFF;
            this.showBackground(this.backgroundBefore, navigation1)
        } else {
            this.backgroundBefore.style.opacity = FLAG_OFF;
            this.showBackground(this.backgroundAfter, navigation1);
        }
    }

    showBackground(background, navigation) {
        background.style.backgroundImage = backgrounds[navigation];
        background.style.opacity = FLAG_ON;
    }
}

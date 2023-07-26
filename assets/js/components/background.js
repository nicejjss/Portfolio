import { FLAG_OFF, FLAG_ON, aboutbg, backgrounds, codebg, homebg } from "../constants.js";
import { AboutController } from "./about.js";
import { CodeController } from "./code.js";
import { HomeController } from "./home.js";

var backgroundAfter = document.getElementById('backgroundafter');
var backgroundBefore = document.getElementById('backgroundbefore');


export function displayBackground(navigation) {
    switch (true) {
        case (navigation instanceof HomeController): { 
            whatshow(homebg);
        }; break;
        case (navigation instanceof AboutController): {
            whatshow(aboutbg);
        }; break;
        case (navigation instanceof CodeController): {
            whatshow(codebg);
        }; break;
        default:
            whatshow(FLAG_OFF);
    }
}

function whatshow(navigation) {
    if (backgroundAfter.style.opacity == FLAG_ON) {
        backgroundAfter.style.opacity = FLAG_OFF;
        showBackground(backgroundBefore, navigation)
    } else {
        backgroundBefore.style.opacity = FLAG_OFF;
        showBackground(backgroundAfter, navigation);
    }
}

function showBackground(background, navigation) {
    background.style.backgroundImage = backgrounds[navigation];
    background.style.opacity = FLAG_ON;
}
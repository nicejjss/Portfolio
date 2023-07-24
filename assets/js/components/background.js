import { FLAG_OFF, FLAG_ON, backgrounds } from "../constants.js";

var backgroundAfter = document.getElementById('backgroundafter');
var backgroundBefore = document.getElementById('backgroundbefore');

export function displayBackground(navigation) {
    switch (navigation) {
        case 0: {
            whatshow(navigation);
        }; break;
        case 1: {
            whatshow(navigation);
        }; break;
        case 2: {
            whatshow(navigation);
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
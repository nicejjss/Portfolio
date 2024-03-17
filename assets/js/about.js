import { BaseController } from "./components/base.js";
import { FLAG_OFF } from './components/constants.js'

export class AboutController extends BaseController {

    infors = [
        'Some knowledge of IT',
        'Just a student with the desire of knowledge',
        'Create with my fun',
        'Games make life better',
        '+84-914-696-280 - Locdaoduc2002@gmail.com',
    ]

    contacts = [
        {
            'link': 'https://www.facebook.com/loc.daoduc.3',
            'img': './assets/resource/icon/contacts/facebook.png',
        },
        {
            'link': 'https://www.instagram.com/locdd02/',
            'img': './assets/resource/icon/contacts/instagram.png',
        },
        {
            'link': 'https://www.linkedin.com/in/đào-lộc-a0a17624a',
            'img': './assets/resource/icon/contacts/linkedin.png',
        },
        {
            'link': 'https://github.com/nicejjss',
            'img': './assets/resource/icon/contacts/github.png',
        },
    ];

    displayLeft() {
        let introduce = this.displayIntroduce();
        this.displayLeftDetail(introduce);
        super.displayLeft(introduce);
    }

    displayLeftDetail(element) {
        element.classList.add('bordered');
        element.classList.add('about-text');
        element.style.width = '100%';
        element.style.background = 'linear-gradient(45deg, #ef55554a, #fdff6dad)';
        this.displayAnimation(element, 'fromBottomToTop', 0.5, 'linear', 0);

        this.infors.forEach((infor,key) => {
            let inforText = document.createElement('div');
            inforText.textContent = infor;
            inforText.classList.add('text-info');
            inforText.classList.add('relative');
            this.displayAnimation(inforText, 'fromBottomToTop', 0.2, 'ease-out', key * 0.5);
            element.appendChild(inforText);
        });
    }

    displayRight() {
        let contenContainer = document.createElement('div');
        contenContainer.id = 'content-container';

        let contactContainer = document.createElement('div');
        contactContainer.id = 'contact-container';
        this.contactDetail(contactContainer);

        let musicContainer = document.createElement('div');
        musicContainer.id = 'music-container';
        this.musicDetail(musicContainer);

        contenContainer.appendChild(contactContainer);
        contenContainer.appendChild(musicContainer);
        super.displayRight(contenContainer);
    }

    contactDetail(element) {
        let contactText = document.createElement('div');
        contactText.id = 'contact-text';
        contactText.classList.add('fontsize40');
        contactText.textContent = 'You can see me on:';

        let contactList = document.createElement('ul');
        contactList.id = 'contact-list';
        this.contactListDetail(contactList);

        element.appendChild(contactText);
        element.appendChild(contactList);
    }

    contactListDetail(contactList) {
        this.contacts.forEach((contact, index) => {
            let li = document.createElement('li');
            li.className = 'contact-item relative';
            this.contactItemDetail(li, contact);
            this.displayAnimation(li, 'fromRightToLeft', 0.5, 'linear', index * 0.5);
            contactList.appendChild(li);
        });
    }

    contactItemDetail(li, contact) {
        let a = document.createElement('a');
        a.href = contact.link;
        let img = document.createElement('img');
        img.src = contact.img;
        img.classList.add('contact-icon');
        a.appendChild(img);
        li.appendChild(a);
    }

    musicDetail(musicContainer) {
        let musicText = document.createElement('div');
        musicText.id = 'music-text';
        musicText.textContent = 'If you get bored:';
        musicText.classList.add('fontsize40');

        let musicList = document.createElement('iframe');
        musicList.id = 'music-list';
        musicList.classList.add('relative');
        musicList.src = 'https://open.spotify.com/embed/playlist/5K4XVUWJlHyo35nJ30qY90?utm_source=generator';
        musicList.setAttribute('frameborder', FLAG_OFF);
        // musicList.setAttribute('loading', 'lazy');
        this.displayAnimation(musicList, 'fromBottomToTop', 1, 'linear', 0);

        musicContainer.appendChild(musicText);
        musicContainer.appendChild(musicList);
    }
}


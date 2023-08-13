import { BaseController } from "./components/base.js";

export class AboutController extends BaseController {

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
    ];

    displayLeft() {
        let introduce = this.displayIntroduce();
        this.displayLeftDetail(introduce);
        super.displayLeft(introduce);
    }

    displayLeftDetail(element) {

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
        contactText.textContent = 'You can see me in:';

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
            this.displayAnimation(li, 'fromRightToLeft', 0.5, 'linear', index * 0.75);
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

    musicDetail() {

    }
}


import "./components/export";
import { dataCard } from "./data";
import { dataSidebar } from "./data2";
import { dataAbout } from "./data3";
import { dataLikes } from "./data4";
import About, { Attribute } from "./components/about/about";
import Card, { Attribut } from "./components/card/card";


class AppContainer extends HTMLElement {
     AboutS: About[] = [];
     CardS: Card[] = [];

    constructor() {
        super();

        this.attachShadow({ mode: "open" });
    }

    
    

    connectedCallback() {
        dataAbout.forEach((user) => {
            const aboutCard = this.ownerDocument.createElement("my-about") as About;
            aboutCard.setAttribute(Attribute.name, user.name);
            aboutCard.setAttribute(Attribute.description, user.description);
            this.AboutS.push(aboutCard);
        });


        dataCard.forEach((user) => {
            const sectionCard = this.ownerDocument!.createElement("my-card") as Card;
            sectionCard.setAttribute(Attribut.name, user.name);
            sectionCard.setAttribute(Attribut.username, user.username);
            sectionCard.setAttribute(Attribut.profile, user.profile);
            sectionCard.setAttribute(Attribut.image, user.image);
            sectionCard.setAttribute(Attribut.image2, user.image2);
            sectionCard.setAttribute(Attribut.image3, user.image3);
            sectionCard.setAttribute(Attribut.image4, user.image4);
            sectionCard.setAttribute(Attribut.date, user.date);
            this.CardS.push(sectionCard);
        });


        this.render();
    }

    render() {
        const all = this.ownerDocument.createElement("section");
        all.className = "all"

        if (this.shadowRoot) {
            this.shadowRoot.innerHTML += `<link rel="stylesheet" href="../src/index.css">`;
            this.shadowRoot.innerHTML += `<h1>About</h1>`;
            this.shadowRoot.innerHTML += `<button>Post</button>`;
            this.shadowRoot.innerHTML += `<my-search></my-search>`;

            const logo = this.ownerDocument.createElement("img");
            logo.src="/src/inklogo.png"
            logo.className= "logo"

            this.shadowRoot.appendChild(logo);

            const aboutSection = this.ownerDocument!.createElement("section");
            aboutSection.className = "aboutSection";
            this.AboutS.forEach((ab) => {
                aboutSection.appendChild(ab);
            });
            all.appendChild(aboutSection);
        }

        const sectionCard = this.ownerDocument!.createElement("section");
        sectionCard.className = "cardSection";
        this.CardS.forEach((ab) => {
            sectionCard.appendChild(ab);
        });
        all.appendChild(sectionCard);

        const sectionBar = this.ownerDocument!.createElement("my-sidebar");
        sectionBar.className = "BarSection";

        all.appendChild(sectionBar);
        this.shadowRoot?.appendChild(all)
    }
}

customElements.define("app-container", AppContainer);

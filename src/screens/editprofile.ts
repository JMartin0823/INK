import styles from "./editprofile.css"
class AppEditProfile extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
        connectedCallback() {
            this.render();
        }

        render() {

            if (this.shadowRoot) {

            
                this.shadowRoot.innerHTML += ``;

                const all=this.ownerDocument.createElement("section");
                  all.className="all"

                  const sidebar=this.ownerDocument.createElement("my-pfsidebar")

                  const pfuser=this.ownerDocument.createElement("my-pfuser")

                  const bottom=this.ownerDocument.createElement("my-bottom")

                  const pfpost=this.ownerDocument.createElement("my-pfpost")
                
                  all.appendChild(sidebar)
                  all.appendChild(pfuser)
                  all.appendChild(bottom)
                  all.appendChild(pfpost)

                this.shadowRoot?.appendChild(all)

                const css = this.ownerDocument.createElement("style");
                css.innerHTML = styles;
                this.shadowRoot?.appendChild(css);

                  }
                }
            }

    customElements.define("app-editprofile", AppEditProfile);

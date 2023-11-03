import styles from "./createpage.css"
class AppCreate extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
        connectedCallback() {
            this.render();
        }

        render() {
            if (this.shadowRoot) {
                const create=this.ownerDocument.createElement("my-create")

                const all=this.ownerDocument.createElement("section")
                all.className="all"
                all.appendChild(create)
                this.shadowRoot?.appendChild(all)

                const css = this.ownerDocument.createElement("style");
                css.innerHTML = styles;
                this.shadowRoot?.appendChild(css);

                  }
                }
            }

    customElements.define("app-create", AppCreate);
            

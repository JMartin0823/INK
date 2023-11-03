import { dispatch } from "../store";
import { navigate } from "../store/actions";
import { Screens } from "../types/store";
import styles from "./landing.css"

class AppLanding extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
        connectedCallback() {
            this.render();
        }

        render() {
            if (this.shadowRoot) {

                const button=this.ownerDocument.createElement("button")
                button.textContent="Lets go!"
                button.addEventListener("click", () =>{
                    dispatch(navigate(Screens.LOGIN))
                } )

                const all=this.ownerDocument.createElement("section")
                all.className="all"
                all.appendChild(button)
                this.shadowRoot?.appendChild(all)

                const css = this.ownerDocument.createElement("style");
                css.innerHTML = styles;
                this.shadowRoot?.appendChild(css);

                  }
                }
            }

    customElements.define("app-landing", AppLanding);
            
   
import { dispatch } from "../../store";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/store";
import styles from "./sidebar.css"

class Sidebar extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = ``;

                const section=this.ownerDocument.createElement("section")
                section.className="all"

                const Explore = this.ownerDocument.createElement("button")
                Explore.className = "button"
                Explore.textContent="Explore"

                const Notifications = this.ownerDocument.createElement("button")
                Notifications.className = "button"
                Notifications.textContent="Notifications"

                const Messages = this.ownerDocument.createElement("button")
                Messages.className = "button"
                Messages.textContent="Messages"

                const Bookmarks = this.ownerDocument.createElement("button")
                Bookmarks.className = "button"
                Bookmarks.textContent="Bookmarks"

                const Profile = this.ownerDocument.createElement("button")
                Profile.className = "button"
                Profile.textContent="Profile"
                Profile.addEventListener("click", () =>{
                    dispatch(navigate(Screens.PROFILE))
                } )

                const More = this.ownerDocument.createElement("button")
                More.className = "button"
                More.textContent="More"
                More.addEventListener("click", () =>{
                    dispatch(navigate(Screens.LOGIN))
                } )

                section.appendChild(Explore)
                section.appendChild(Notifications)
                section.appendChild(Messages)
                section.appendChild(Bookmarks)
                section.appendChild(Profile)
                section.appendChild(More)

                this.shadowRoot.appendChild(section)

                const css = this.ownerDocument.createElement("style");
            css.innerHTML = styles;
            this.shadowRoot?.appendChild(css);
            }
        }
    }

    customElements.define("my-sidebar", Sidebar);
    export default Sidebar;
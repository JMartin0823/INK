import { appState, dispatch } from '../../store';
import { navigate, setUserCredentials } from '../../store/actions';
import { Screens } from '../../types/store';
import styles from './pfsidebar.css'

class PFSidebar extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    logOutUser() {
        if(appState.user !== null || ''){
            sessionStorage.clear();
            dispatch(navigate(Screens.LOGIN));
            location.reload();
        }
    }

        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = `<img class="img1" src="../../src/img/inklogo2.png" alt="">`;
                const section=this.ownerDocument.createElement("section")
                section.className="section"

                const Back = this.ownerDocument.createElement("button")
                Back.className = "button"
                Back.textContent="Back to home"
                Back.addEventListener("click", () =>{
                    dispatch(navigate(Screens.HOMEPAGE))
                } )

                const Edit = this.ownerDocument.createElement("button")
                Edit.className = "button"
                Edit.textContent="Edit profile"
                Edit.addEventListener("click", () =>{
                    dispatch(navigate(Screens.EDITPROFILE))
                } )

                const Change = this.ownerDocument.createElement("button")
                Change.className = "button"
                Change.textContent="Change password"

                const Connected = this.ownerDocument.createElement("button")
                Connected.className = "button"
                Connected.textContent="Connected apps"

                const Push = this.ownerDocument.createElement("button")
                Push.className = "button"
                Push.textContent="Push notifications"

                const Manage = this.ownerDocument.createElement("button")
                Manage.className = "button"
                Manage.textContent="Manage contacts"

                const Privacy = this.ownerDocument.createElement("button")
                Privacy.className = "button"
                Privacy.textContent="Log out"
                Privacy.addEventListener("click", this.logOutUser)

                section.appendChild(Back)
                section.appendChild(Edit)
                section.appendChild(Change)
                section.appendChild(Connected)
                section.appendChild(Push)
                section.appendChild(Manage)
                section.appendChild(Privacy)

                this.shadowRoot.appendChild(section)

                const css = this.ownerDocument.createElement("style");
                css.innerHTML = styles;
                this.shadowRoot?.appendChild(css);
            }
        }
    }

    customElements.define("my-pfsidebar", PFSidebar);
    export default PFSidebar;
import "./screens/landing"
import "./screens/homepage"
import "./screens/loginpage"
import "./screens/registerpage"
import "./screens/profilepage"
import "./screens/editprofile"
import "./screens/createpage"
import "./components/export"
import styles from "../src/index.css"
import { Screens } from "./types/store"
import { addObserver, appState } from "./store"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        addObserver(this)
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot)this.shadowRoot.innerHTML='';
        switch (appState.screen) {
            case Screens.HOMEPAGE:
                const homepage = this.ownerDocument.createElement('app-homepage');
                this.shadowRoot?.appendChild(homepage);
                break;

                case Screens.LANDING:
                const landing = this.ownerDocument.createElement('app-landing');
                this.shadowRoot?.appendChild(landing);

                break;

                case Screens.LOGIN:
                const login = this.ownerDocument.createElement('app-loginpage');
                this.shadowRoot?.appendChild(login);

                break;

                 case Screens.REGISTER:
                const searchbar = this.ownerDocument.createElement('app-registerpage');
                this.shadowRoot?.appendChild(searchbar);

                break;

                 case Screens.PROFILE:
                const profile = this.ownerDocument.createElement('app-profilepage');
                this.shadowRoot?.appendChild(profile);

                break;

                case Screens.EDITPROFILE:
                const editprofile = this.ownerDocument.createElement('app-editprofile');
                this.shadowRoot?.appendChild(editprofile);

                break;

                case Screens.CREATEPAGE:
                    const createpost = this.ownerDocument.createElement('app-create');
                    this.shadowRoot?.appendChild(createpost);
    
                    break;

            default:
                break;
        }

        const css = this.ownerDocument.createElement("style");
        css.innerHTML = styles;
        this.shadowRoot?.appendChild(css);
    }
}

customElements.define('app-container', AppContainer)
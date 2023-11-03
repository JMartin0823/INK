import { appState, dispatch } from '../../store';
import { navigate } from '../../store/actions';
import { Screens } from '../../types/store';
import Firebase from '../../utils/firebase';
import { login } from '../export';
import styles from './login.css'

const credentials = { email: "", password: "" };

class Login extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    async handleLoginButton() {
        Firebase.loginUser(credentials);
      }

        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = ``;

                const all = this.ownerDocument.createElement("section")
                all.className = "all"

                const header = this.ownerDocument.createElement("h1")
                header.textContent="Login to your account"

                const two = this.ownerDocument.createElement("section")
                two.className = "two"

                const one = this.ownerDocument.createElement("section")
                one.className = "one"

                const input1 = this.ownerDocument.createElement("input")
                input1.className = "emailbar"
                input1.placeholder="Email"
                input1.type = "email"
                input1.addEventListener(
                    "change",
                    (e: any) => (credentials.email = e.target.value)
                  );

                const input2 = this.ownerDocument.createElement("input")
                input2.className = "passbar"
                input2.placeholder="Password"
                input2.type = "password";
                input2.addEventListener(
                "change",
                (e: any) => (credentials.password = e.target.value)
                );

                const login = this.ownerDocument.createElement("button")
                login.className = "signin"
                login.textContent="Sign in"
                login.addEventListener("click", this.handleLoginButton)


                const header2 = this.ownerDocument.createElement("h2")
                header2.textContent="New here?"

                const text = this.ownerDocument.createElement("p")
                text.textContent="Let’s Wow your online presence"

                const register = this.ownerDocument.createElement("button")
                register.className = "register"
                register.textContent="Register"
                register.addEventListener("click", () =>{
                    dispatch(navigate(Screens.REGISTER))
                } )

                all.appendChild(header)
                all.appendChild(two)
                two.appendChild(one)
                one.appendChild(input1)
                one.appendChild(input2)
                two.appendChild(login)
                all.appendChild(header2)
                all.appendChild(text)
                all.appendChild(register)

                this.shadowRoot.appendChild(all)
                

                const css = this.ownerDocument.createElement("style");
                css.innerHTML = styles;
                this.shadowRoot?.appendChild(css);
            }
        }
    }

    customElements.define("my-login", Login);
    export default Login;
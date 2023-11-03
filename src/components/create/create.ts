import { dispatch } from '../../store';
import { navigate } from '../../store/actions';
import { Screens } from '../../types/store';
import styles from './create.css'

class Create extends HTMLElement {

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

                const all = this.ownerDocument.createElement("section")
                all.className = "all"

                const header = this.ownerDocument.createElement("h1")
                header.textContent="New post"

                const two = this.ownerDocument.createElement("section")
                two.className = "two"

                const one = this.ownerDocument.createElement("section")
                one.className = "one"

                const input2 = this.ownerDocument.createElement("input")
                input2.className = "passbar"
                input2.placeholder="Caption"

                const login = this.ownerDocument.createElement("button")
                login.className = "signin"
                login.textContent="Post"
                login.addEventListener("click", () =>{
                    dispatch(navigate(Screens.HOMEPAGE))
                } )

                const header2 = this.ownerDocument.createElement("h2")
                header2.textContent="Select files"

                const url = this.ownerDocument.createElement("input")
                url.type = "url"
                url.className = "url"
                url.placeholder="Image URL"
                url.addEventListener('input', (event) => {
                    const inputElement = event.target as HTMLInputElement;
                    const imageUrl = inputElement.value;
                    if (imageUrl) {
                      const imgPreview = this.ownerDocument.createElement('img');
                      imgPreview.src = imageUrl;
                      imgPreview.alt = 'Preview';
                      imgPreview.className = 'imgPreview';
                      all.appendChild(imgPreview);
                    }
                  });

                const fileInput = this.ownerDocument.createElement("input");
                fileInput.type = "file";
                fileInput.className = "media"
                fileInput.addEventListener("change", () => {
                const file = fileInput.files && fileInput.files[0]; 
                if (file) {
                console.log(file);
                const reader = new FileReader();
                reader.onload = (e) => {
                const imgPreview = this.ownerDocument.createElement("img");
                if (e.target && e.target.result) {
                imgPreview.src = e.target.result as string;
                }
                imgPreview.alt = "Preview";
                imgPreview.className = "imgPreview";
                all.appendChild(imgPreview);
                };
                reader.readAsDataURL(file);
                }
                });

                const text = this.ownerDocument.createElement("p")
                text.textContent="Great Choice!"

                const register = this.ownerDocument.createElement("button")
                register.className = "register"
                register.textContent="Upload"
                
            
                all.appendChild(header)
                all.appendChild(two)
                two.appendChild(one)
                one.appendChild(input2)
                two.appendChild(login)
                all.appendChild(header2)
                all.appendChild(url)
                all.appendChild(fileInput)
                all.appendChild(text)
                all.appendChild(register)

                this.shadowRoot.appendChild(all)
                

                const css = this.ownerDocument.createElement("style");
                css.innerHTML = styles;
                this.shadowRoot?.appendChild(css);
            }
        }
    }

    customElements.define("my-create", Create);
    export default Create;
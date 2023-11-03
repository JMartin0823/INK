import styles from './pfpost.css'
class PFPost extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = `
                <section class="posts">
                <img src="../../src/img/feid1.JPG" alt="">
                <img src="../../src/img/feid2.JPG" alt="">
                <img src="../../src/img/feid3.JPG" alt="">
                <img src="../../src/img/feid4.JPG" alt="">
                <img src="../../src/img/feid5.JPG" alt="">
                <img src="../../src/img/feid6.JPG" alt="">
                </section>
                `;
                const css = this.ownerDocument.createElement("style");
                css.innerHTML = styles;
                this.shadowRoot?.appendChild(css);
            }
        }
    }

    customElements.define("my-pfpost", PFPost);
    export default PFPost;
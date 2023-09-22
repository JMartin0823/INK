class Searchbar extends HTMLElement {

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
                <link rel="stylesheet" href="../src/components/searchbar/searchbar.css">
                <section class="container">
            <form action="" class="searchbar"><input type="text" placeholder="search anything" class="bar">
            <button class="buttonsearch"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
            <path d="M21 21l-6 -6"></path>
         </svg></button>
            </form>
            </section>
                `;
            }
        }
    }

    customElements.define("my-search", Searchbar);
    export default Searchbar;
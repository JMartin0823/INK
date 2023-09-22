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
                this.shadowRoot.innerHTML = `<link rel="stylesheet" href="../src/components/sidebar/sidebar.css">`;

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

                const More = this.ownerDocument.createElement("button")
                More.className = "button"
                More.textContent="More"

                section.appendChild(Explore)
                section.appendChild(Notifications)
                section.appendChild(Messages)
                section.appendChild(Bookmarks)
                section.appendChild(Profile)
                section.appendChild(More)

                this.shadowRoot.appendChild(section)

            }
        }
    }

    customElements.define("my-sidebar", Sidebar);
    export default Sidebar;
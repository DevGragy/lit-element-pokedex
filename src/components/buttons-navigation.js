import { LitElement, html, css } from "lit";

export class ButtonsNavigation extends LitElement {
    static properties = {
        currentIndex: { type: Number },
    };

    constructor() {
        super();
        this.currentIndex = 1;
    }

    static styles = css`
        div {
            text-align: center;
        }

        .button {
            appearance: button;
            backface-visibility: hidden;
            background-color: #132043;
            border-radius: 6px;
            border-width: 0;
            box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
                rgba(50, 50, 93, 0.1) 0 2px 5px 0,
                rgba(0, 0, 0, 0.07) 0 1px 1px 0;
            box-sizing: border-box;
            color: #fff;
            cursor: pointer;
            font-family: -apple-system, system-ui, "Segoe UI", Roboto,
                "Helvetica Neue", Ubuntu, sans-serif;
            font-size: 100%;
            height: 44px;
            line-height: 1.15;
            margin: 12px 0 0;
            outline: none;
            overflow: hidden;
            padding: 0 25px;
            text-align: center;
            text-transform: none;
            transform: translateZ(0);
            transition: all 0.2s, box-shadow 0.08s ease-in;
            user-select: none;
            -webkit-user-select: none;
            touch-action: manipulation;
        }

        .button:hover {
            background-color: #1f4172;
        }

        .button:disabled {
            cursor: default;
        }

        .button:focus {
            box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
                rgba(50, 50, 93, 0.2) 0 6px 15px 0,
                rgba(0, 0, 0, 0.1) 0 2px 2px 0,
                rgba(50, 151, 211, 0.3) 0 0 0 4px;
        }
    `;

    _onPreviousClick() {
        this.currentIndex--;

        //Si es menor al primero (1) regresa al ultimo elemento (20)
        if (this.currentIndex < 1) {
            this.currentIndex = 20;
        }

        this.dispatchEvent(
            new CustomEvent("on-previus-click", {
                detail: this.currentIndex,
            })
        );
    }

    _onNextClick() {
        this.currentIndex++;

        //Si el indice llega al ultimo elemento (20) regresa al primero (1)
        if (this.currentIndex > 20) {
            this.currentIndex = 1;
        }

        this.dispatchEvent(
            new CustomEvent("on-next-click", {
                detail: this.currentIndex,
            })
        );
    }

    render() {
        return html`
            <div>
                <button class="button" @click="${this._onPreviousClick}">
                    Anterior
                </button>
                <button class="button" @click="${this._onNextClick}">
                    Siguiente
                </button>
            </div>
        `;
    }
}
customElements.define("buttons-navigation", ButtonsNavigation);

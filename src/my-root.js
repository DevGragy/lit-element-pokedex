import { LitElement, html, css } from "lit";
import "./components/buttons-navigation";
import "./components/pokemon-card";
import "./components/data-manager";
import "./components/data-provider";
import Pokeball from "./images/pokebola.png";

export class MyRoot extends LitElement {
    static properties = {};

    static styles = [
        css`
            :host {
                display: block;
                font-family: "Roboto", sans-serif;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                text-align: center;
                height: 100vh;
                background-color: #ce5959;
            }
            .title {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .pokeball {
                width: 35px;
                margin-left: 10px;
            }
        `,
    ];

    firstUpdated() {
        super.firstUpdated();
        this.loadPokemon({ detail: 1 });
    }

    _onPreviousClick() {
        this.shadowRoot.querySelector('data-manager').handlePrevious();
    }

    _onNextClick() {
        this.shadowRoot.querySelector('data-manager').handleNext();
    }

    loadPokemon(event) {
        this.shadowRoot.querySelector('data-provider').getData(event.detail);
    }

    handlePokemonRequest(event) {
        this.shadowRoot.querySelector('pokemon-card').pokemonData = event.detail
    }

    render() {
        return html`
            <h1 class="title">
                Pokedex <img src="${Pokeball}" class="pokeball" />
            </h1>
            <data-provider
                @get-pokemon-data="${this.handlePokemonRequest}"
            ></data-provider>
            <data-manager
                @request-pokemon="${this.loadPokemon}"
            ></data-manager>
            <pokemon-card> </pokemon-card>
            <buttons-navigation
                @on-previus-click="${this._onPreviousClick}"
                @on-next-click="${this._onNextClick}"
            ></buttons-navigation>
        `;
    }
}
customElements.define("my-root", MyRoot);

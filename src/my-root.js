import { LitElement, html, css } from "lit";
import "./components/buttons-navigation";
import "./components/pokemon-card";
import "./components/data-manager";
import "./components/data-provider";
import Pokeball from "./images/pokebola.png";

export class MyRoot extends LitElement {
    static properties = {
        pokeIndex: { type: Number },
        pokemonData: { type: Object },
    };

    constructor() {
        super();
        this.pokeIndex = 1;
        this.pokemonData = {};
    }

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

    _onPreviousClick(event) {
        const currentIndex = event.detail;
        this.pokeIndex = currentIndex;
    }

    _onNextClick(event) {
        const currentIndex = event.detail;
        this.pokeIndex = currentIndex;
    }

    handlePokemonRequest(event) {
        const pokemonResquest = event.detail;
        this.pokemonData = pokemonResquest;
    }

    handlePokemonData(event) {
        const pokemonData = event.detail;
        this.pokemonData = pokemonData;

        console.log(this.pokemonData);
    }

    render() {
        return html`
            <h1 class="title">
                Pokedex <img src="${Pokeball}" class="pokeball" />
            </h1>
            <data-provider
                .pokemonIndex="${this.pokeIndex}"
                @get-pokemon-data="${this.handlePokemonRequest}"
            ></data-provider>
            <data-manager
                .pokemonData="${this.pokemonData}"
                @set-pokemon-data="${this.handlePokemonData}"
            ></data-manager>
            <pokemon-card .pokemonData="${this.pokemonData}"> </pokemon-card>
            <buttons-navigation
                @on-previus-click="${this._onPreviousClick}"
                @on-next-click="${this._onNextClick}"
            ></buttons-navigation>
        `;
    }
}
customElements.define("my-root", MyRoot);

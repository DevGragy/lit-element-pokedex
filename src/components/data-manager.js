import { LitElement, html, css } from 'lit';

export class DataManager extends LitElement {
    static properties = {
        pokemonData: { type: Object },
    };

    constructor() {
        super();
        this.pokemonData = {};
    }

    updated(changedProperties) {
        if (changedProperties.has("pokemonData")) {
            this.handleDataUpdated(this.pokemonData);
        }
    }

    handleDataUpdated(data) {
        if (data) {
            this.dispatchEvent(new CustomEvent("set-pokemon-data", {
                detail: data,
            }));
        }
    }
}

customElements.define('data-manager', DataManager);

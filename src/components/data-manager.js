import { LitElement, html, css } from 'lit';

export class DataManager extends LitElement {
    static properties = {
        index: { type: Number }
    };

    constructor() {
        super();
        this.index = 1;
    }

    handlePrevious() {
        this.index--;

        if (this.index < 1) this.index = 19;

        this.requestPokemon();
    }

    handleNext() {
        this.index++;

        if (this.index > 19) this.index = 1;

        this.requestPokemon();
    }

    requestPokemon() {
        this.dispatchEvent(new CustomEvent('request-pokemon', { detail: this.index }));
    }
}

customElements.define('data-manager', DataManager);

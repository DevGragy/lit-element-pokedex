import { LitElement, html } from "lit";

export class DataProvider extends LitElement {
    static properties = {};

    async getData(pokemonIndex) {
        try {
            const response = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`
            );
            const data = await response.json();

            this.dispatchEvent(new CustomEvent("get-pokemon-data", {
                detail: data,
            }));
        } catch (error) {
            console.error("Error fetching data:", error);
            return null;
        }
    }
}

customElements.define("data-provider", DataProvider);

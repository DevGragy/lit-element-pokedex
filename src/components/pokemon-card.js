import { LitElement, html, css } from "lit";

export class PokemonCard extends LitElement {
    static properties = {
        pokemonData: { type: Object },
    };

    static styles = [
        css`
            .card {
                background-color: #fff;
                padding: 0.4em;
                border-radius: 6px;
                width: 300px;
            }

            .card-image {
                width: 200px;
                border: 1px solid #fff3da;
                border-radius: 50%;
                background-color: #fff3da;
            }

            .card-image:hover {
                transform: scale(1.2);
            }

            .category {
                text-transform: uppercase;
                font-size: 0.7em;
                font-weight: 600;
                color: rgb(63, 121, 230);
                padding: 10px 7px 0;
            }

            .category:hover {
                cursor: pointer;
            }

            .heading {
                font-weight: 600;
                color: rgb(88, 87, 87);
                padding: 7px;
            }

            .heading:hover {
                cursor: pointer;
            }

            .poke-id {
                color: gray;
                font-weight: 700;
                font-size: 16px;
            }
        `,
    ];

    constructor() {
        super();
        this.pokemonData = {};
    }

    render() {
        const { pokemonData } = this;

        return html`
            <div class="card">
                <p class="poke-id">No. #${pokemonData.id || "1"}</p>
                <img
                    class="card-image"
                    src="${pokemonData.sprites
                        ? pokemonData.sprites.front_default
                        : ""}"
                    alt="${pokemonData.name ? pokemonData.name : "Pokemon"}"
                />
                <h2 class="heading">
                    ${pokemonData.name
                        ? pokemonData.name.toUpperCase()
                        : "Pokemon"}
                </h2>
                <p>
                    ${pokemonData.types[0]
                        ? pokemonData.types[0].type.name
                        : ""}
                    |
                    ${pokemonData.types[1]
                        ? pokemonData.types[1].type.name
                        : ""}
                </p>
            </div>
        `;
    }
}

customElements.define("pokemon-card", PokemonCard);

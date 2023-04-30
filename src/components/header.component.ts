import { html } from "../helpers/html.helper";
import { Component } from "../interfaces/component.interface";


const HTML_TEMAPLATE = html`
    <header>
        header
        <button id="btn-ingresar">
            Ingresar
        </button>
    </header>
`

export const headerComponent: Component = {
    template: HTML_TEMAPLATE,
    afterViewInit() {
        const btnIngresar = this.template.querySelector<HTMLButtonElement>("#btn-ingresar");
        btnIngresar?.addEventListener("click", () => {
            alert("Ingresar");
        })
    },
}
import { html } from "../helpers/html.helper";
import { Component } from "../interfaces/component.interface";


const HTML_TEMAPLATE = html`
    <header>
        header
        <button id="btn-theme">
            Cambiar modo
        </button>
    </header>
`

export const headerComponent: Component = {
    template: HTML_TEMAPLATE,
    afterViewInit() {
        const btnTheme = this.template.querySelector<HTMLButtonElement>("#btn-theme")!;
        btnTheme.onclick = () => {
            document.querySelector('html')?.classList.toggle('dark');
        };
    },
}
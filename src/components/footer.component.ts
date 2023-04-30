import { html } from "../helpers/html.helper"
import { Component } from "../interfaces/component.interface";

const HTML_FOOTER = html`
    <footer>
        footer funciona
    </footer>
`;

export const footerComponent: Component = {
    template: HTML_FOOTER
}
import "./index.tsx";
import { html } from "lit-html";

export const story1 = () => html`
  <custom-element name="you"> </custom-element>
  <button
    @click=${() => {
      document
        .getElementsByTagName("custom-element")[0]
        .setAttribute("name", "jm");
    }}
  >
    test
  </button>
`;

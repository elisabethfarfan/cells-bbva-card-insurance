import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import '@bbva-web-components/bbva-web-button-default/bbva-web-button-default.js';
import '@bbva-web-components/bbva-core-icon/bbva-core-icon.js';
import * as ICONS from '@bbva-web-components/bbva-foundations-icons';
// import * as ICONS from '@bbva-web-components/bbva-core-icon/bbva-core-icon.js';


import styles from './CellsBbvaCardInsurance-styles.js';
/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<cells-bbva-card-insurance></cells-bbva-card-insurance>
```

##styling-doc

@customElement cells-bbva-card-insurance
*/
export class CellsBbvaCardInsurance extends LitElement {
  static get is() {
    return 'cells-bbva-card-insurance';
  }

  // Declare properties
  static get properties() {
    return {
      title: { type: String, },
      description: {type: String},
      options: {type: Array }

    };
  }

  // Initialize properties
  constructor() {
    super();
    this.title = '';
    this.description = '';
    this.options = [];
  }

  _onButtonClick() {
    this.dispatchEvent(
      new CustomEvent('event-button', {
        bubbles: true,
        detail: {
          title: this.title,
          description: this.description,
          options: this.options
        },
      })
    );
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('cells-bbva-card-insurance-shared-styles')
    ];
  }

  // Define a template
  render() {
    return html`
      <div class="container">
        <div>
          <h2>${this.title}</h2>
        </div>

        <div  class="container-description">
          <span>${this.description}</span>
        </div>   
        
        <div>
          ${this.options.map((item) =>
             html`
               <div>
                <bbva-core-icon
                    icon="${ICONS.bbvaBullet()}"
                >
              </bbva-core-icon>
                ${item}
              </div>
             `
          )}
        </div>
        <div  class="button">
            <bbva-web-button-default @click="${this._onButtonClick}">Cotiza</bbva-web-button-default>
        </div>
      </div>
    `;
  }
}

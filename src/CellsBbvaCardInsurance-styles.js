/* eslint-disable no-unused-vars */
import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';

export default css`:host {
  display: block;
  box-sizing: border-box;
}

:host([hidden]), [hidden] {
  display: none !important;
}

*, *:before, *:after {
  box-sizing: inherit;
}

bbva-core-icon {
  color: var(--color--icon--covergae, #1973b8);
}

.container {
  width: 90%;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 3px 25px;
  box-shadow: 1px 1px 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow-x: hidden;
  letter-spacing: -1px;
}

.container-description {
  margin-bottom: 20px;
  text-align: justify;
}

.button {
  margin-top: 20px;
  margin-bottom: 30px;
}

span {
  font-size: var(--font--size--currency, 15px);
  vertical-align: text-top;
  font-weight: normal;
}
`;
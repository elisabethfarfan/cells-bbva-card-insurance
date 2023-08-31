/* eslint-disable import/no-extraneous-dependencies */
import { html, fixture, assert, fixtureCleanup } from '@open-wc/testing';
import '../cells-bbva-card-insurance.js';
import { spy } from 'sinon';

suite('CellsBbvaCardInsurance', () => {
  let el;

  teardown(() => fixtureCleanup());

  setup(async () => {
    el = await fixture(html`<cells-bbva-card-insurance></cells-bbva-card-insurance>`);
    await el.updateComplete;
  });

  const cargarData = () =>{    
    el.title= "Seguro Vehicular",
    el.description="BBVA y Rímac se han unido para ofrecer a nuestros clientes los siguientes beneficios al contratar un seguro vehicular",
    el.options=[
          "Elegir entre 3 planes de protección para su vehículo",
          "Cobertura contra robo total",
          "Cobertura contra daños a terceros",
          "Auxilio mecánico y traslado de grúa",
          "Descuento en gasolina Repsol"
      ]  
  }
  test('Show Card', async () => {
    assert.isDefined(el.shadowRoot.querySelector('.container'));
  });


  test('Testeando el evento _onButtonClick', ()  => {
    cargarData();
    const spyDispatchEvent = spy();
    el.addEventListener('event-button', spyDispatchEvent);
    el.shadowRoot.querySelector('bbva-web-button-default').click();
    assert.isTrue(spyDispatchEvent.calledOnce);
  });

});

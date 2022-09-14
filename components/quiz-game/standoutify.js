/**
 * The StandOutify web component module.
 *
 * @author Alejandro Lindström Mamani <al225vh@student.lnu.se>
 * @version 1.0
 */

// Define template.
const template = document.createElement('template')
template.innerHTML = `
<style>
/*Style here.*/
</style>
<div id="standoutify">
</div>
`

customElements.define('standoutify',
  /**
   * Represents a Highlightify element.
   */
  class extends HTMLElement {
    /**
     * The Standoutify element.
     *
     * @type {HTMLDivElement}
     */
    #standOutify

    /**
     * Creates an instance of the current type.
     */
    constructor (animation, childElement) {
      super()

      // Save the animation and childElement as properties.
      this.#animationStyle = animation
      this.#childElement = childElement

      // Attach a shadow DOM tree to this element and
      // append the template to the shadow root.
      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      // Get the Standoutify element in the shadow root.
      this.#standOutify = this.shadowRoot.querySelector('standoutify')

      // Gets a reference to the StandOutify container element.
      this.standOutifyElementContainer = this.shadowRoot.getElementById('standoutify')

    }

    /**
     * Called after the element is inserted into the DOM.
     */
    connectedCallback () {
      // Eventlistener to the child element.
      this.childElement.addEventListener('onmouseover', (event) => {

      })
    }
  }
)

/**
 * The StandOutify web component module.
 *
 */

// Define template.
const template = document.createElement('template')
template.innerHTML = `
<style>
/*Style here.*/
</style>
<slot id="slot-element"></slot>
`

customElements.define('stand-outify',
  /**
   * Represents a Standoutify element.
   */
  class extends HTMLElement {
    /**
     * The slot element.
     *
     * @type {HTMLDivElement}
     */
    #slotElement

    /**
     * The string value for the animation.
     *
     * @type {string}
     */
    #animationStyle

    /**
     * The child element.
     *
     * @type {HTMLElement}
     */
    #childElement

    /**
     * Creates an instance of the current type.
     */
    constructor() {
      super()

      // Save the animation style and childElement as properties.
      this.#animationStyle = 'standard'
      this.#childElement =

        // Attach a shadow DOM tree to this element and
        // append the template to the shadow root.
        this.attachShadow({ mode: 'open' })
          .appendChild(template.content.cloneNode(true))

      // Gets a reference to the slot element.      
      this.#slotElement = this.shadowRoot.getElementById('slot-element')

    }

    /**
 * Attributes to monitor for changes.
 *
 * @returns {string[]} A string array of attributes to monitor.
 */
    static get observedAttributes() {
      return ['value']
    }

    /**
     * Called after the element is inserted into the DOM.
     */
    connectedCallback() {

    }

    /**
 * Called when observed attribute(s) changes.
 *
 * @param {string} name - The attribute's name.
 * @param {*} oldValue - The old value.
 * @param {*} newValue - The new value.
 */
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'value' && newValue !== oldValue) {
        // Assigns the new value to the attribute value.
        this.value.setAttribute('value', newValue)
      }
    }

    /**
     * Getter method for the animation style.
     */
    #getAnimationStyle() {
      return this.#animationStyle
    }

    /**
     * Setter method for the animation style.
     */
    #setAnimationStyle(animationStyle) {
      this.#animationStyle = animationStyle
    }

    /**
     * Getter method for the child element.
     */
    #getChildElement() {
      return this.#childElement
    }

    /**
     * Setter method for the child element.
     */
    #setChildElement(childElement) {
      this.#childElement = childElement
    }

    /**
     * Initializes the custom element with a style and child element.
     */
    initialize(animationstyle, childElement) {

      // Check if the input is valid.
      if (typeof animationstyle === 'string' && typeof childElement === 'object') {

        // Set the animation style and assign the element as a child.
        this.#animationStyle = animationstyle

        // Set an id for the element.
        childElement.setAttribute('id', 'animation-element')

        this.#slotElement.appendChild(childElement)

        this.#childElement = this.shadowRoot.getElementById('animation-element')

        // Eventlistener to the child element.
        this.#childElement.addEventListener('mouseover', (event) => {
          console.log('Hover!!!')
        })

        console.log('Its valid input.')

      } else {
        console.log('Its invalid input.')
      }
    }

  }
)

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
     * The selected animation property.
     *
     * @type {object}
     */
    #selectedAnimationSettings

    /**
     * The selected timing property.
     *
     * @type {object}
     */
    #selectedTimingSettings

    /**
     * Object that holds the different animation settings.
     *
     * @type {object}
     */
    #animationObject = {
      spinning: [{ transform: 'rotate(0) scale(1)' }, { transform: 'rotate(360deg) scale(0)' }]
    }

    /**
     * Object that holds the timing settings for the animations.
     *
     * @type {object}
     */
    #timingObject = {
      spinning: { duration: 2000, iterations: 1, }
    }

    /**
     * Creates an instance of the current type.
     */
    constructor() {
      super()

      // Attach a shadow DOM tree to this element and
      // append the template to the shadow root.
      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      // Reference to the slot element.      
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

        // Setup the element.
        this.#animationStyle = animationstyle

        childElement.setAttribute('id', 'animation-element')

        this.#slotElement.appendChild(childElement)

        this.#childElement = this.shadowRoot.getElementById('animation-element')

        console.log('Its valid input.')

        // Set the correct animation settings.
        this.#setChosenAnimationSettings()

        // Animate the element.
        this.#animateChildElement()

      } else {
        console.log('Its invalid input.')
      }
    }

    /**
     * Animates the childElement with Web Animations API.
     */
    #animateChildElement() {

      // Animate the element.

      // Add a eventlistener.
    this.#childElement.addEventListener('mouseover', (event) => {
      console.log('Hover!!!')
    })
    }

    /**
     * Sets the animation settings to use.
     */
     #setChosenAnimationSettings() {

      // Set the animation.
      for (const key in this.#animationObject) {
        if (key === this.#animationStyle) {
          this.#selectedAnimationSettings = this.#animationObject[key]
        }
      }

      // Set the timing.
      for (const key in this.#timingObject) {
        if (key === this.#animationStyle) {
          this.#selectedTimingSettings = this.#timingObject[key]
        }
      }

     }

  }
)

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
     * The abort controller.
     *
     * @type {object}
     */
    #controller


    /**
     * The event to listen for.
     *
     * @type {object}
     */
    #eventType

    /**
     * Object that holds the different animation settings.
     *
     * @type {object}
     */
    #animationObject = {
      magnify: [
        { transform: 'scale(1)' },
        { transform: 'scale(1.3)' },
        { transform: 'scale(1)' }
      ],
      shake: [
        { transform: 'rotate(0deg)', offset: 0 },
        { transform: 'rotate(5deg)', offset: 0.25 },
        { transform: 'rotate(0deg)', offset: 0.50 },
        { transform: 'rotate(-5deg)', offset: 0.75 },
        { transform: 'rotate(0deg)', offset: 1 }
      ],
      highlight: [
        { transform: 'scale(1)', background: 'orange', opacity: 1 },
        { transform: 'scale(1)', background: 'orange', opacity: 1 },
        { transform: 'scale(1)' }
      ]
    }

    /**
     * Object that holds the timing settings for the animations.
     *
     * @type {object}
     */
    #timingObject = {
      magnify: { duration: 2000, iterations: 1, easing: 'ease-in-out', delay: '10' },
      shake: { duration: 300, iterations: 5 },
      highlight: { duration: 2000, iterations: 1, easing: 'ease-in-out' }
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

      // Create a controller object.
      this.#controller = new AbortController()
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
     * Getter method for the event type.
     */
    get #getEventType() {
      return this.#eventType
    }

     /**
     * Getter method for the selected animation settings.
     */
         get #getSelectedAnimationSettings() {
          return this.#selectedAnimationSettings
        }

    /**
     * Getter method for the selected timing settings.
     */
    get #getSelectedTimingSettings() {
      return this.#selectedTimingSettings
    }

    /**
     * Setter method for the event listener type.
     */
    #setEventType(eventType) {
      this.#eventType = eventType
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
    initializeElement(animationstyle, childElement, eventType) {

      // Check if the input is valid.
      if (typeof animationstyle === 'string' && typeof eventType === 'string'
        && typeof childElement === 'object') {

        // Setup the element.
        this.#animationStyle = animationstyle

        this.#eventType = eventType

        childElement.setAttribute('id', 'animation-element')

        this.#slotElement.appendChild(childElement)

        this.#childElement = this.shadowRoot.getElementById('animation-element')

        console.log('Its valid input.')

        // Set the correct animation settings.
        this.#setChosenAnimationSettings()

        // Animate the element and add a event listener.
        this.#addEventListenerToElement()

      } else {
        console.log('Its invalid input.')
      }
    }

    /**
     * Adds a event listener to the child element.
     */
    #addEventListenerToChildElement() {
      // Add a eventlistener with a signal.
      this.#childElement.addEventListener(this.#getEventType, (event) => {
        this.#animateChildElement()
      }, { signal: this.#controller.signal })
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

    /**
     * Change the animation of the element.
     */
    changeAnimationStyle(animationStyle) {

      // Update the property.
      this.#setAnimationStyle(animationStyle)

      // Update the animation settings.
      this.#setChosenAnimationSettings()
    }

    /**
     * Change the event listener type.
     */
    changeEventListenerType(eventType) {

      // Remove the event listener.
      this.#removeEventListenerOnElement()

      // Update the property.
      this.#setEventType(eventType)

      // Add new event listener.
      this.#addEventListenerToElement()
    }

    /**
     * Aborts the event listener on the child element.
     */
    abortEventListenerChildElement() {
      // Remove a eventlistener.
      this.#controller.abort()
    }

    /**
     * Animates the child element.
     */
    #animateChildElement() {
      this.#childElement.animate(this.#selectedAnimationSettings, this.#selectedTimingSettings)
    }

    /**
     * Adds event listener to element.
     */
    #addEventListenerToElement() {
      // Add a eventlistener.
      this.#childElement.addEventListener(this.#getEventType, this.#animateChildElement)
    }

    /**
     * Removes event listener on element.
     */
    #removeEventListenerOnElement() {
      // Remove a eventlistener.
      this.#childElement.removeEventListener(this.#getEventType, this.#animateChildElement)
    }
  }
)

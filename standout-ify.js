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
<div id="standoutify">
</div>
`

customElements.define('standout-ify',
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
    constructor () {
      super()

      // Save the animation style and childElement as properties.
      this.#animationStyle = 'standard'
      this.#childElement =

      // Attach a shadow DOM tree to this element and
      // append the template to the shadow root.
      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      // Get the Standoutify element in the shadow root.
      this.#standOutify = this.shadowRoot.querySelector('standoutify')

      // Gets a reference to the StandOutify container element.
      this.standOutifyElementContainer = this.shadowRoot.getElementById('standoutify')

      // Append the child element to the container.
      this.standOutifyElementContainer.appendChild(childElement)

    }

    /**
     * Called after the element is inserted into the DOM.
     */
    connectedCallback () {
      // Eventlistener to the child element.
      this.childElement.addEventListener('onmouseover', (event) => {
        console.log('Hover')
      })
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
      if(typeof animationstyle === 'string' && typeof childElement === 'object') {

        // Set the animation style and assign the element as a child.
        this.#animationStyle = animationstyle
        this.#standOutify.appendChild(childElement)

        console.log('Its valid input.' + this.#getAnimationStyle + this.#getChildElement)

      } else {
        console.log('Its invalid input.')
      }
    }

  }
)

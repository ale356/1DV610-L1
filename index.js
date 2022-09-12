
import Highligth from './file'

// The start of the application.

// Create the variables needed.
const buttonElement = document.createElement('button')
const animationStyle = 'focus'

// Create the custom element by sending in an animation choice and element to assign it to.
const highlightElement = new Highlight(animationStyle, buttonElement)

// This method changes the animation on the element.
highlightElement.changeAnimationStyle('bigger')

// This method removes the animation.
highlightElement.removeAnimation()

// This method

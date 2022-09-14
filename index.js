
import Highligth from './file'

// The start of the application.

// Create the variables needed.
const buttonElement = document.createElement('button')
const animationStyle = 'focus'
const newAnimationStyle = 'bigger'

// Create the class Highlight.
const highlightClass = new Highlight()

// This method sets the animation style on a element.
Highlight.setAnimationStyle(buttonElement, animationStyle)

// This method changes the animation on the element.
Highligth.changeAnimationStyle(buttonElement, newAnimationStyle)

// This method removes the animation.
Highlight.removeAnimation(buttonElement)

// This method changes the color of a animation.
Highlight.changeColorOfAnimation(buttonElement, 'red')


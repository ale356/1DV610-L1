# 1DV610-L1
Easily animate your HTML elements.
## About
Stand-outify.js makes important elements stand out with the help of Web Animations API. With the help of event listeners you can choose when your elements should be animated.
## Installation
Fork this repository.
```
$ git clone https://github.com/ale356/1DV610-L1.git
```
Then simply add the folder to your projects components folder.
Lastly import the folder from your components folder with ES6 modules to your index/app.js file.
##### Example:
```
import './components/1DV610-L1/index.js'
```
## How to use
First you have to create the custom element stand-outify. This element allows you to call on different methods to help with animationg your elements.
##### Example:
```
const standoutifyElement = document.createElement('stand-outify')
```
You will then need to initialize the choosen element to animate with the method initializeElement.  
Down below are explainations on how to use the various methods available.
### Methods
#### initializeElement()
A method that setups and animates your element. It takes in 3 parameters. It will add chosen element as a child to stand-outify custom element. It will then set the animation style settings. Lastly it will add an eventlistener that will trigger by chosen eventype that will animate the element.
- animationStyle - String
- childElement - HTML Element(object)
- eventType - String

As of right now there are 3 animation styles available.
- highlight
- magnify
- shake
##### Example:
```
standoutifyElement.initializeElement('highlight', headerElement, 'click')
```
#### changeAnimationStyle()
This method changes the animation style on the instantiated element. It takes in one parameter.
- animationStyle - String
As of right now there are 3 animation styles available.
- highlight
- magnify
- shake
##### Example:
```
standoutifyElement.initializeElement('highlight', headerElement, 'click')
```

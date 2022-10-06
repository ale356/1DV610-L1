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
```
Example: import './components/1DV610-L1/index.js'
```
## How to use
First you have to create the custom element stand-outify. This element allows you to call on different methods to help with animationg your elements.
```
// Create the custom element stand-outify.
const standoutifyElement = document.createElement('stand-outify')
```
You will then need to initialize the choosen element to animate with the method initializeElement.  
```
// Example of initializing an element.
standoutifyElement.initializeElement('highlight', headerElement, 'click')
```
Down below are explainations on how to use the various methods available.
### Methods
#### initializeElement()
This is the method that setups and animates your element. It takes in 3 parameters.
- animationStyle - String
- childElement - HTML Element(object)
- eventType - String

As of right now there are 3 animation styles available.
- highlight
- magnify
- shake

# Reflektion
 ## Namngivning ( kapitel 2 )
| Name And Explaination | Reflection And Rules From Clean Code |
| --------------------- | ------------------------------------ |
| initializeElement(animationstyle, childElement, eventType)

Method name of a method that initializes the custom element stand-outify with a style, event type and a child element.                    | Use intention revealing names.

By using the verb initialize in the method name I clearly state the intention behind the method. The word element could be clearer as a second thought. Since it’s not obvious what element it is that is initialised in the method. The parameters used are clearly telling what should be inputed in terms of what. But it does not talk about what type it should be.

Avoid disinformation

As mention earlier in the method name I use the word element, and this could trick people since I don’t clearly state what element it is that should be initialised.  Maybe initializeStandoutify() would have been more appropriate.
                                                        
Use solution domain names

I think that the verb initialize fits the solution domain since initializing is something programmers do frequently. In java you can initialize a variable by giving it a correct start value. |
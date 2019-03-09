# МЕМОРЫ  ГАМЕ! (Memory Game)
### Clicky Game built with React


This project is a memory game created with React. 


## How it works: 

When the user selects a painting, the application listens for click events which increment the score (Сцоре) by 1 and shuffles the order of the objects using the Fisher-Yates algorithm (as delivered by an npm package).  However, if the user selects the same image twice in a row their score is set to 0, meaning they lost the game. If the user continues to select non-consecutive images the top score (Топ Сцоре) will continue to increment. 



## Whats up with these paintings? 

This application features the work of Russian artist Kazimir Severinovich Malevich. Malevich was a pioneer in abstract, non-representational art and his work had a profound impact on 20th century modernism. All images are cleared for use under creative commons liscensing. 

## Technologies Used

* [Bootstrap](https://getbootstrap.com/)
* [React](https://reactjs.org/)
* [Node](https://nodejs.org/en/)
* [npm shuffle-array](https://www.npmjs.com/package/shuffle-array)

## Weirdness Calculator

#### Test Instructions

The app you will be asked to develop is a weirdness calculator. You will be required to use the Giphy API to show users several GIFs that range from 0-10 on Giphy’s weirdness scale. Users will be asked to enter a search term and the app will display a matching GIF starting on 0 weirdness. Using a slider, users should be able to then increase the weirdness and receive weirder and weirder results. When a user finds a GIF they like, they can add it to their list of favorite GIFs by pressing the Like button. Once a user selects their 5 favorite GIFs, they will be prompted to see their result telling them how weird they are.

#### Screenshot

![image](https://user-images.githubusercontent.com/9849990/62477013-b48d7b00-b76d-11e9-81ef-ab46ececef38.png)

## Environment Setup - How to Run

Just clone the repo and run `npm install`.

## Benefits and Shortcomings

Overall it's written in a style consistent with modern React. I use mostly function components and made some use of Hooks. I also tried to be conscious of where `state` can remain local and where it should be kept in Redux to not introduce extra complexity by throwing everything in the state manager. When confronted with the opportunity to pull in an `npm` package for something simple like the slider I decided to just write it myself, basically just to show that I don't need to pull in npm packages for simple stuff, even though there's nothing wrong with that.<br>

Additionally, I made components like `Button.js` reuseable, and used it a few times in different places.<br>

One shortcomming might be that I could have made the components even more reusable by using a more advanced convention for styling them (even though doing so was deemphasized for this test). Another shortcomming may be the way in which I made `Gif.js` reuseable for both ways in which GIFs appear (under YOUR RESULT and YOUR LIKED GIFS). I did it based on a conditional render and put the `handleDelete` handler in an `href` instead of reusing `Button.js`. There's probably a cleaner way to get that done.






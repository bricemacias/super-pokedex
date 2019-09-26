# Super Pokedex

## Link

The project is available on Netlify at the following address :

https://elated-lalande-2ab2ab.netlify.com/

### Installing and running Locally

- clone the repository
- at the root of the folder type yarn and then yarn start

## Functionnalities

The pokedex can search pokemons by name and by Type. It can also Filter them by Height and Weaknesses. It was built using React, axios and Redux.

## Optional improvements added

### Sharing the filter state and table

For sharing the state we used Redux. The app uses Google Chrome Redux Dev Tools, where you will be able to see the different states as you use the app.

### Optimization

The app has a global grade of A in terms of performance on webpagetest.org and a score of 95/100 in performance, 89/100 in accessibility and 93/100 in best practises according to Google Chrome Lighthouse.

In order to optimize the application, several choices where made :

- no big external packages like bootstrap or material-UI were installed. Only tachyons wich is much smaller was used to improve coding experience
- using flexbox for responsive results
- no background or unecessary images were used, only colors and gradients
- code kept a maximum clean and well splitted

Possible improvements: using React Lazy to charge modules only when necessary

## User Experience

The goal was to optimize user experience. For that, several choices were made :

- instant results, the user don't have to click any button to see the results, they are loaded automatically
- easy filters, especially for the height where a double slider was used to easilly fix min and max height
- colored cards per type of pokemon
- autocomplete added when searching by type
- allowing the search module to stay accessible on top even when scrolling
- responsive, works on mobile

Possible improvements:

- progressive web app for access offline and optimisation for mobile platforms,
- adding a toggle button to hide and show filters

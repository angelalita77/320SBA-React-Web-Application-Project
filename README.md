# SBA 320H - React Web Application Project


## Software: Rick and Morty Match Game and Gallery
## About
This project is a Single Page Application (SPA) built using React to create a memory matching game, complete with a character gallery and structured navigation bar. It demonstrates core React concepts for state management, component uses, and API calls.
- Match Game
- Character Gallery
The website link is now avialable through Netlify: https://rickmorty-gamegallery.netlify.app/
`The 404 Not Found does NOT WORK in the Netlify link - but it works when running from the local files`

## Match Game
The match game is a simple 8-card match game in which the cards flip to reveal the picture of a Rick and Morty character underneath.
Unsolved Problem: 
- Getting the cards to shuffle upon refresh.
- Data pull from API GET Method rather than from the API URL for the match game
- Getting Netlify to display the NotFound.jsx routed page for 404 Page Not Found catch


## Gallery
Gallery (Gallery.jsx): Manages the state for the API fetched data (rickMortyData), which holds the array of characters retrieved from the Rick and Morty API.
This shows other characters pulled from the Rick and Morty API (hopefully for future game development)

## Sticky Bar Feature
Used CSS stylings to create a sticky bar

### API Source
REST
Base url: https://rickandmortyapi.com/api
Character URL: https://rickandmortyapi.com/api/character/<number.jpg> 
Each character image is found under a <number.jpg> format. This is how the pictures for the match game were retrieved.


### Page Routes: 
| URL Path | Component | Rendered Purpose |
|----------|-----------|------------------|
| `/` | Home.jsx | The main landing page or homepage. |
| `/game` | Game.jsx | Contains the Memory Matching Game logic and interface. |
| `/gallery` | Gallery.jsx | Displays the fetched Rick and Morty characters in a grid layout using the Axios API call. |
| `/leaderboard` | LeaderBoard.jsx | The intended page for scores and rankings, but instead there is a clever satire of the show |
| `*` | NotFound.jsx | Renders when the user navigates to any undefined path, catching broken links. |

### Technologies Used from React
| Hook | Components Used In | Purpose |
|------|-------------------|---------|
| `useState, useEffect` | Game.jsx, Gallery.jsx | Manages all mutable data that changes the UI. This includes tracking the currently flipped cards (`openedCard`), matched pairs (`matched`), and the fetched API data (`rickMortyData`) for the pictures in `Gallery.jsx` on component mount. |


### Outside Imported React Technologies
| Library | Components Used In | Function |
|---------|-------------------|----------|
| React Router DOM | NavBar.jsx, App.jsx (Implicit) | Manages client-side routing via the `<Link>` component for fast navigation between pages (Home, Game, Gallery, etc.). |
| Axios | Gallery.jsx | A promise-based HTTP client used to make the API request to the Rick and Morty endpoint, abstracting the complexity of fetching and handling network responses. |


## 📑 Project Requirements
Your application must meet these requirements to pass (this it your Minimum Viable Product):

Built with HTML, CSS, JavaScript, REACT, and Redux Toolkit.
Hosted on Heroku or Netlify.
Frequent commits to GitHub.
A README.md file in your GitHub repository with:

Explanations of the technologies used.
Explanations of the approach taken.
A link to your live site.
Usage instructions, if relevant.
Unsolved problems.
etc.
Use AJAX to make a request to an external data source like OMDBapi, and insert some of the data retrieved into the DOM.

## ➕ Bonus Features
The following are not required:

Have one or more complex user interface modules such as a carousel, drag and drop, a sticky nav, tooltips, etc.
Look into localstorage so you can save data to the user's browser.

# References

Rick and Morty API
https://rickandmortyapi.com/

Flip Card CSS Trick
https://www.w3schools.com/howto/howto_css_flip_card.asp

React for Beginners - Let's build a memory game!
https://www.youtube.com/watch?v=c16KLlM3ZNw

Build Memory Game with React Hooks
https://youtu.be/Txm71YeFY8g?si=_M-iGtaBvALTO7E8

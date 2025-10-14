# SBA 320H - React Web Application Project

## 📑 Requirements
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

## Software: Rick and Morty Match Game and Gallery
## About
This project is a Single Page Application (SPA) built using React to create a memory matching game, complete with a character gallery and structured navigation bar. It demonstrates core React concepts for state management, component uses, and API calls.
- Match Game
- Character Gallery

## Match Game
The match game is a simple 8-card match game in which the cards flip to reveal the picture of a Rick and Morty character underneath.
Unsolved Problem: 
- Getting the cards to shuffle upon refresh.
- Data pull from API GET Method rather than from the URL


## Gallery
Gallery (Gallery.jsx): Manages the state for the fetched data (rickMortyData), which holds the array of characters retrieved from the Rick and Morty API.



### Page Routes: 
| URL Path | Component | Rendered Purpose |
|----------|-----------|------------------|
| `/` | Home.jsx | The main landing page or homepage. |
| `/game` | Game.jsx | Contains the Memory Matching Game logic and interface. |
| `/gallery` | Gallery.jsx | Displays the fetched Rick and Morty characters in a grid layout using the Axios API call. |
| `/leaderboard` | LeaderBoard.jsx | The intended page for scores and rankings, but instead there is a clever satire of the show |
| `*` | NotFound.jsx | Renders when the user navigates to any undefined path, catching broken links. |


import React, { useEffect, useState } from "react";
//import "../App.css"
import "../styles/Game.css"
import "../styles/PageCenter.css";

//URL of the Rick and Morty
const url = "https://rickandmortyapi.com/api/character/avatar/";

const Game = () => {
  const [openedCard, setOpenedCard] = useState([]);
  const [matched, setMatched] = useState([]);


  const characters = [
    { id: 1, name: "rick" },
    { id: 2, name: "morty" },
    { id: 3, name: "summer" },
    { id: 4, name: "beth" }
  ];

  
  //currently there are 4 chars but we need the pair
  const pairofCharacters = [...characters, ...characters];

  function flipCard(index) {
    setOpenedCard((opened) => [...opened, index]);
  }


  useEffect(() => {
    if (openedCard < 2) return;

    const firstMatched = pairofCharacters[openedCard[0]];
    const secondMatched = pairofCharacters[openedCard[1]];

    if (secondMatched && firstMatched.id === secondMatched.id) {
      setMatched([...matched, firstMatched.id]);
    }

    if (openedCard.length === 2) setTimeout(() => setOpenedCard([]), 1000);
  }, [openedCard]);

  return (
    <div>
      <div className="centered-page-content">
        <h1>Begin The Match</h1>
      <p>To reset the game, refresh the page.</p></div>
      <div className="game-container">

        <div className="cards">
          {/* For each object in the array... */}
          {pairofCharacters.map((char, index) => {

            //lets flip the card
            let isFlipped = false;

            if (openedCard.includes(index)) isFlipped = true;
            if (matched.includes(char.id)) isFlipped = true;
            return (
              <div
                className={`rickmorty-card ${isFlipped ? "flipped" : ""} `}
                key={index}
                onClick={() => flipCard(index)}
              >
                <div className="inner">
                  <div className="front">
                    <img
                      src={`${url}${char.id}.jpeg`}
                      alt="char-name"
                      width="100"
                    />
                  </div>
                  <div className="back"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Game
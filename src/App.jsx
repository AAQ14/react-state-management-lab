// src/App.jsx
import "./App.css";
import { useState } from "react";

const App = () => {
  let enoughBudget = true;
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png",
    },
    {
      id: 2,
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png",
    },
    {
      id: 3,
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png",
    },
    {
      id: 4,
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png",
    },
    {
      id: 5,
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png",
    },
    {
      id: 6,
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png",
    },
    {
      id: 7,
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png",
    },
    {
      id: 8,
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png",
    },
    {
      id: 9,
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png",
    },
    {
      id: 10,
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png",
    },
  ]);

  //The team total strength
  const totalStrength = team.reduce((accumulator, fighter) => {
    return (accumulator += fighter.strength);
  }, 0);

  //The team total agility
  const totalAgility = team.reduce((accumulator, fighter) => {
    return (accumulator += fighter.agility);
  }, 0);

  function handleAddFighter(character) {
    // check if there is enough money to add the character to the team
    if (character.price > money) {
      console.log("Not enough money");
      enoughBudget = false;
     
    } else {
      //add the character to the team
      console.log("button clicked");
      const newTeamArray = [...team, character];
      setTeam(newTeamArray);

      //remove the character from the zombieFighters
      const newFightersArray = zombieFighters.filter((fighter) => {
        if (character.id != fighter.id) return fighter;
      });
      setZombieFighters(newFightersArray);

      setMoney(money - character.price);
    }

    console.log(money);
    console.log(zombieFighters);
    console.log("The team are", team);
  }

  const handleRemoveFighter = (fighter) => {
    //filter method to return a new array of all fighters without the fuighter I removed
    const newTeamArray = team.filter((character) => fighter.id != character.id);
    setTeam(newTeamArray);

    //Add the fighter removed back into the zombieFighters array
    const newZombieArray = [...zombieFighters, fighter];
    setZombieFighters(newZombieArray);

    setMoney(money + fighter.price);
  };

  return (
    <>
      {/* can i map through the team inside the else statement after :  */}
      {team.length === 0 ? (
        <h2>Pick some team members!</h2>
      ) : (
        <>
          <h2>ur characters are : </h2>
        </>
      )}
      <h3>Total strength of the team is: {totalStrength}</h3>
      <h3>Total agility of the team is: {totalAgility}</h3>
      {enoughBudget == false ?  <h3>u don't have enough budget to add a fighter to ur team</h3> : <h3></h3>}
      <ul>
        {team.map((character) => (
          <li key={character.id}>
            <img src={character.img}></img>
            <h4>{character.name}</h4>
            <p>Price: {character.price}</p>
            <p>Strength: {character.strength}</p>
            <p>Agility: {character.agility}</p>
            <button onClick={() => handleRemoveFighter(character)}>
              remove
            </button>
          </li>
        ))}
      </ul>

      <hr />

      <ul>
        {zombieFighters.map((character) => (
          <li key={character.id}>
            <img src={character.img}></img>
            <h4>{character.name}</h4>
            <p>Price: {character.price}</p>
            <p>Strength: {character.strength}</p>
            <p>Agility: {character.agility}</p>
            <button onClick={() => handleAddFighter((character = character))}>
              Add
            </button>
            {/*  style={color: red} */}
            {/* {character.price> money? <h3>u don't have enough money to add a fighter to ur team</h3> : <p></p>} */}
          </li>
        ))}
      </ul>

    </>
  );
};

export default App;

// {img: character.img, name:character.name, price: character.price, strength: character.strength, agility= character.agility}

import { useState, useEffect } from "react";
import "../styles/App.css";
import Final_Result from "./Final_Result";

const characters = [
  {
    id: 1,
    name: "Jett",
    role: "Duelist",
    abilities: ["TailWind", "Cloud Burst", "UpDraft", "Blade Storm"],
  },
  {
    id: 2,
    name: "Phoenix",
    role: "Duelist",
    abilities: ["HotHands", "Blaze", "Curve Ball", "Run It Back"],
  },
  {
    id: 3,
    name: "Yoru",
    role: "Duelist",
    abilities: ["GateCrash", "Fakeout", "Blind Side", "Dimensional Drift"],
  },
  {
    id: 4,
    name: "Reyna",
    role: "Duelist",
    abilities: ["Dismiss", "Leer", "Devour", "Empress"],
  },
  {
    id: 5,
    name: "Raze",
    role: "Duelist",
    abilities: ["Paint Shells", "Boom Bot", "BlastPack", "ShowStopper"],
  },
  {
    id: 6,
    name: "Neon",
    role: "Duelist",
    abilities: ["High Gear", "Fast Lane", "Relay Bolt", "Over Drive"],
  },
  {
    id: 7,
    name: "Sova",
    role: "Initiator",
    abilities: ["Recon Bolt", "Owl Drone", "Shock Bolt", "Hunter's Fury"],
  },
  {
    id: 8,
    name: "Fade",
    role: "Initiator",
    abilities: ["Haunt", "Prowler", "Seize", "NightFall"],
  },
  {
    id: 9,
    name: "Skye",
    role: "Initiator",
    abilities: ["Guiding Light", "Regrowth", "Trail Blazer", "Seekers"],
  },
  {
    id: 10,
    name: "KAY/O",
    role: "Initiator",
    abilities: ["Zero/Point", "Frag/Ment", "Flash/Drive", "NULL/CMD"],
  },
  {
    id: 11,
    name: "Breach",
    role: "Initiator",
    abilities: ["Fault Line", "AfterShock", "FlashPoint", "Rolling Thunder"],
  },
  {
    id: 12,
    name: "Omen",
    role: "Controller",
    abilities: ["Dark Cover", "Shrouded Step", "Paranoia", "From the Shadows"],
  },
  {
    id: 13,
    name: "Astra",
    role: "Controller",
    abilities: ["Nebula", "Gravity Well", "Nova Pulse", "Cosmic Divide"],
  },
  {
    id: 14,
    name: "Viper",
    role: "Controller",
    abilities: ["Toxic Screen", "Snake Bite", "Poison Cloud", "Viper's PIT"],
  },
  {
    id: 15,
    name: "Brimstone",
    role: "Controller",
    abilities: ["SkySmoke", "Stim Beacon", "Icendiary", "Orbital Strike"],
  },
  {
    id: 16,
    name: "Chamber",
    role: "Sentinel",
    abilities: ["Rendezvous", "Trademark", "Head Hunter", "Tour De Force"],
  },
  {
    id: 17,
    name: "Sage",
    role: "Sentinel",
    abilities: ["Healing Orb", "Barrier Orb", "Slow Orb", "Resurrection"],
  },
  {
    id: 18,
    name: "Killjoy",
    role: "Sentinel",
    abilities: ["Turret", "Nano Swarm", "AlarmBot", "Blade Storm"],
  },
  {
    id: 19,
    name: "Cypher",
    role: "Sentinel",
    abilities: ["Spycam", "Trapwire", "Cyber Cage", "Nueral Theft"],
  },
];

// const tempCharacters = [...characters];

function App() {
  const [currChar, setCurrChar] = useState({
    name: "",
    role: "",
    abilities: [],
    options: [],
  });

  const [score, setScore] = useState(0);
  const [countTimes, setCountTimes] = useState(0);

  function handleChar() {
    try {
      const randIndex = Math.floor(Math.random() * characters.length);
      const tempCharacters = [...characters];
      const tempChar = characters[randIndex];
      const optionArr = [];
      // characters.splice(randIndex, 1);
      tempCharacters.splice(randIndex, 1);
      // if (characters.length > 4) {
        for (let i = 0; i < 3; i++) {
          const optIndex = Math.floor(Math.random() * tempCharacters.length);
          optionArr.push(tempCharacters[optIndex]);
          tempCharacters.splice(optIndex, 1);
        }
      // }

      const ansIndex = Math.floor(Math.random() * 4);
      optionArr.splice(ansIndex, 0, tempChar);
      setCurrChar({
        name: tempChar.name,
        role: tempChar.role,
        abilities: tempChar.abilities,
        options: optionArr,
      });
      setCountTimes(countTimes + 1);
      console.log(characters.length, currChar);
    } catch (error) {
      console.log(error);
      <Final_Result />;
    }
  }

  useEffect(() => {
    handleChar();
  }, []);

  const scoreHandler = (event) => {
    if (event.target.name === currChar.name) {
      setScore(score + 1);
    } else {
      if (score > 0) {
        setScore(score - 1);
      } else {
        setScore(0);
      }
    }
    handleChar();
  };
  return (
    <div id="main">
      {countTimes > characters.length ? (
        <Final_Result score={score} />
      ) : (
        <div className="container">
          <h1 className="header">Guess the Character</h1>
          <div className="ques-area">
            <div className="score" id="score">
              Score: {score}
            </div>
            <h3>The character has the following abilities:</h3>
            <h4>Role: {currChar.role}</h4>
            {currChar.abilities.join()}
            <div className="options">
              {currChar.options.map((option, index) => (
                <button name={option.name} key={index} onClick={scoreHandler}>
                  {option.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

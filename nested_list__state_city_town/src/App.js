import { useState } from "react";
import "./App.css";

const states = [
  {
    name: "Madhya Pradesh",
    cities: [
      {
        name: "Indore",
        towns: [
          {
            name: "Mhow",
          },
          {
            name: "Dewas",
          },
        ],
      },
      {
        name: "Bhopal",
        towns: [
          {
            name: "Manit",
          },
          {
            name: "Berasia",
          },
        ],
      },
      {
        name: "Gwalior",
        towns: [
          {
            name: "Ajaypur",
          },
        ],
      },
    ],
  },
  {
    name: "Jharkhand",
    cities: [
      {
        name: "Dhanbad",
        towns: [
          {
            name: "IIT(ISM) Dhanbad",
          },
          {
            name: "Hirapur",
          },
        ],
      },
      {
        name: "Wasseypur",
        towns: [
          {
            name: "Sardar khan's",
          },
          {
            name: "Faizal khan's",
          },
        ],
      },
      {
        name: "Mirzapur",
        towns: [
          {
            name: "Kaleen bhaiya's",
          },
          {
            name: "Guddu bhaiya's",
          },
        ],
      },
    ],
  },
  {
    name: "Assam",
    cities: [
      {
        name: "Guwhati",
        towns: [
          {
            name: "Amin",
          },
          {
            name: "Jalah",
          },
        ],
      },
      {
        name: "Jungle1",
        towns: [
          {
            name: "Tiger found at IIT Guwahati",
          },
          {
            name: "Leopard found in IIT Guwahati",
          },
        ],
      },
      {
        name: "Tezpur",
        towns: [
          {
            name: "Dibrugarh",
          },
          {
            name: "Silchar",
          },
        ],
      },
    ],
  },
  {
    name: "Bihar",
    cities: [
      {
        name: "Patna",
        towns: [
          {
            name: "Sonpur",
          },
          {
            name: "Maner",
          },
        ],
      },
      {
        name: "Gaya",
        towns: [
          {
            name: "Bakraur",
          },
          {
            name: "Barachatti",
          },
        ],
      },
      {
        name: "Darbhanga",
        towns: [
          {
            name: "Singhwara",
          },
          {
            name: "Jale",
          },
        ],
      },
    ],
  },
];

function App() {
  const [selectedState, setSelectedState] = useState(null);
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [towns, setTowns] = useState([]);

  return (
    <div className="App">
      <ul className="states-container">
        {states.map((state, index) => {
          return (
            <li
              key={state.name}
              id={`state${index + 1}`}
              onClick={(event) => {
                setSelectedState(state.name);
                setCities(state.cities);

                if (event.target.id.includes("state")) {
                  selectedState
                    ? setSelectedState(null)
                    : setSelectedState(state.name);
                }
              }}
            >
              {state.name}
              <ul className="cities-container">
                {selectedState === state.name &&
                  cities.map((city, index) => {
                    return (
                      <li
                        key={city.name}
                        id={`city${index + 1}`}
                        onClick={(event) => {
                          setSelectedCity(city.name);
                          setTowns(city.towns);

                          if (event.target.id.includes("city")) {
                            selectedCity
                              ? setSelectedCity(null)
                              : setSelectedCity(city.name);
                          }
                        }}
                      >
                        {city.name}
                        <ul className="towns-container">
                          {selectedCity === city.name &&
                            towns.map((town, index) => {
                              return (
                                <li key={town.name} id={`town${index + 1}`}>
                                  {town.name}
                                </li>
                              );
                            })}
                        </ul>
                      </li>
                    );
                  })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;

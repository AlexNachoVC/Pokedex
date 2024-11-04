"use client"
import {useState} from 'react';

export default function Home() {

  const [pokemonId, setPokemonId] = useState("");

  function handleButtonClick() {
    setPokemonId()
  }

  return (
        <div>
            <div id="pokedex">
                <div id="pokedata">

                </div>
                <div id="inputs">
                    <div id="display">

                    </div>
                    <div id="buttonContainer">
                        <button className="button">7</button>
                        <button className="button">8</button>
                        <button className="button">9</button>
                        <button className="button">4</button>
                        <button className="button">5</button>
                        <button className="button">6</button>
                        <button className="button">1</button>
                        <button className="button">2</button>
                        <button className="button">3</button>
                    </div>
                    <button className="searchButton"> Search </button>
                    <button className='searchButton' onClick={clearInput}>Clear</button>

                </div>
            </div>
            

        </div>
        
    );
}

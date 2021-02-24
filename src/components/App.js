import React, { useState } from 'react';
import '../stylesheets/App.scss';
import PokeList from './PokeList';
import pokemons from '../data/data.json';

function App() {
    // const [pokemonData, setPokemonData] = useState(pokemons);
  
    return (
      <div className="body">
        <header>
          <h2 className="body__title">Mi lista de Pokémon</h2>
        </header>
        <main>
          <PokeList list={pokemons} />
        </main>
      </div>
    );
  }
export default App;

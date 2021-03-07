import React, { useState } from 'react';
import '../stylesheets/App.scss';
import PokeList from './PokeList';
import pokemons from '../data/data.json';

function App() {
  const [pokemon] = useState(pokemons);
  
    return (
      <div className="body">
        <header>
          <h2 className="body__title">Mi lista de Pokémon</h2>
        </header>
        <main>
          <PokeList pokemons={pokemon} />
        </main>
      </div>
    );
  }
export default App;
import React from 'react';
import Pokemon from './Pokemon';


const PokeList = (props) => {
  const pokemons = props.list.map((onePoke) => {
    return (
       <li key={onePoke.id}>
          <Pokemon pokemonItem={onePoke} />
       </li>
        )
    });
        
  return (
   
    <div>
      <ul>
       {pokemons}
      </ul>
    </div>
  );
}

export default PokeList;
import React from 'react';
import Pokemon from './Pokemon';
import propTypes from "prop-types";


const PokeList = (props) => {
  const pokemons = props.pokemons.map((onePoke) => {
    return (
       <li className="body__container--card" key={onePoke.id}>
          <Pokemon pokemonItem={onePoke} />
       </li>
        )
    });
        
  return (
   
    <div>
      <ul className="body__container" >
       {pokemons}
      </ul>
    </div>
  );
}

PokeList.propTypes = {
  card: propTypes.object,
};

export default PokeList;
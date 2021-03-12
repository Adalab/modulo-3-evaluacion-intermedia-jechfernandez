import React from 'react';
import propTypes from "prop-types";

const Pokemon = props => {
  const pokemon = props.pokemonItem.types.map ((type, i) => {
    return (
      <li key={i}>
        {type}
      </li>
    );
  });

  return (
    <article className="card">
      <img className="card__image"src={props.pokemonItem.url} alt={props.pokemonItem.name} />
      <h2 className="card__title">{props.pokemonItem.name}</h2>
      <ul className="card__list">
        {pokemon}
      </ul>
    </article>
  );
};

Pokemon.protoTypes = {
  name: propTypes.string,
  type: propTypes.array,
};

export default Pokemon;

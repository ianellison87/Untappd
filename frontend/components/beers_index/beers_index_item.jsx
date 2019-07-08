import React from 'react';
import { Link } from 'react-router-dom';

const BeersIndexItem = ({ beer }) => (
  <li className="beers-index-item">
    <Link to={`/beers/${beer.id}`}>
      <span>{beer.name}</span>
      <li>{beer.ibu}</li>
      <li>{beer.abv}</li>
    </Link>
  </li>
)

export default BeersIndexItem;
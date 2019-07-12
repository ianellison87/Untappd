import React from 'react';
import { Link } from 'react-router-dom';

const BeersIndexItem = ({ beer }) => (

  <div className="beers-index-item">
    <div className="beer-name">
      <img className="beer-logo" src={beer.photoUrl} alt=""/>
      <Link to={`/beers/${beer.id}`}>
        <span className="beer">{beer.name}</span>
      </Link>
    </div>
      <div className="beer-details">
        <li className="ibu">{beer.ibu} IBU</li>
        <li className="abv">{beer.abv}% ABV</li>
        <li className="brewer">{beer.brewed_by}</li>
        <li className="rating">Rating placeholder</li>
      </div>
  </div>
)

export default BeersIndexItem;
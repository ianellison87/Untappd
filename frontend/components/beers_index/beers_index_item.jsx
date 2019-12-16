import React from 'react';
import { Link } from 'react-router-dom';

const BeersIndexItem = ({ beer }) => (

  <Link to={`/beers/${beer.id}`}>
    <div className="beers-index-item">
        <div className="beer-name">
          <img className="beer-logo" src={beer.photoUrl} alt=""/>
          <p className="description"><span className="description-title">Description:</span> {beer.description}</p>
            <span className="beer">{beer.name}</span>
        </div>
        <div className="beer-details">
            <li className="ibu">{beer.ibu} IBU</li>
            <li className="abv">{beer.abv}% ABV</li>
            <li className="brewer">{beer.brewed_by}</li>
            <li className="rating">{parseFloat(beer.average_rating).toFixed(2)}</li>
        </div>
      <Link to={`reviews/new`}><button className="rate">Rate This Beer</button></Link>
    </div>
  </Link>
)

export default BeersIndexItem;
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom'

import BeersIndexItem from './beers_index_item';
import BeerFormContainer from './beer_form_container';
import BeerShowContainer from '../beer_show/beer_show_container'

class BeersIndex extends Component {
  componentDidMount(){
    this.props.requestAllBeers();
  }


  render() {
    const {beers} = this.props;

    return(
      <div className="beers-index">
        <header className="inner">  
          <p>this is a header... where is my header</p>
        </header>
        {/* <Route exact path="/beers/new" component={BeerFormContainer}/>  */}
        {/* <Route exact path="/beers/:beerId" component={BeerShowContainer}/>  */}
        <div className="beers-list-title">
          <h3 className="beer-list">Beers List</h3>
          <Link to="beers/new" className="new-beer-btn" context>Add New Beer</Link>
        </div>
        <ul>
          {beers.map(beer => <BeersIndexItem key={beer.id} beer={beer} />)}
        </ul>
      </div>
    );
  }
}
export default BeersIndex;
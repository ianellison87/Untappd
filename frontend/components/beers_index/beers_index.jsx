import React, { Component } from 'react';
import { Route } from 'react-router-dom';

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
        {/* <Route exact path="/beers/new" component={BeerFormContainer}/>  */}
        {/* <Route exact path="/beers/:beerId" component={BeerShowContainer}/>  */}
        <ul>
          {beers.map(beer => <BeersIndexItem key={beer.id} beer={beer} />)}
        </ul>
      </div>
    );
  }
}
export default BeersIndex;
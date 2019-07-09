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
          <div className="header-inner">  
            <div className="header-left">
              <h2 className="logo-title">UNBARRELD</h2>
                <p className="logo-text">DRINK  RESPONSIBLY</p>
            </div>
            <div className="header-right">
              <button className="header-btn" onClick={logout}>Log Out</button>
            </div>
          </div>
        </header>
        {/* <Route exact path="/beers/new" component={BeerFormContainer}/>  */}
        {/* <Route exact path="/beers/:beerId" component={BeerShowContainer}/>  */}
        <div className="beers-index-page">
          <div className="beers-list-title">
            <h3 className="beer-list">Beers List</h3>
            <Link to="beers/new" className="new-beer-btn" context>Add New Beer</Link>
          </div>
          <div className="content-box">
            <ul>
              {beers.map(beer => <BeersIndexItem key={beer.id} beer={beer} />)}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default BeersIndex;
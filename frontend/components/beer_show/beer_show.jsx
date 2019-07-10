import React from 'react';
import { Link } from 'react-router-dom';
// import BeerDetail from './beer_detail';

class BeerShow extends React.Component {
  componentDidMount(){
    this.props.requestSingleBeer(this.props.beerId);
  }


  render() {
    let beer = this.props.beer
    if (!beer) {
      return <div>
        Loading...
      </div>
    }else{
    return (
    <div>
      <ul className="beer-item">
        <img className="beer-logo" src={beer.photoUrl} alt="" />
        <li>{beer.name}</li>
        <li>{beer.ibu}</li>
        <li>{beer.abv}</li>
        <li>{beer.brewed_by}</li>
        <li>* * * * *</li>
      </ul>
    </div>
    )}
  }
}

export default BeerShow;
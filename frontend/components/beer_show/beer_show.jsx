import React from 'react';
import { Link } from 'react-router-dom';
// import BeerDetail from './beer_detail';
import HeaderContainer from '../header/header_container';
import Header from '../header/header';
import BeerDetail from './beer_detail';

class BeerShow extends React.Component {
  constructor(props){
    super(props)

    this.state = this.props.beer

    this.handleDelete = this.handleDelete.bind(this)
  }
  componentDidMount(){
    this.props.requestSingleBeer(this.props.beerId);
  }

  handleDelete(e){
    e.preventDefault();
    this.props.deleteBeer(this.props.beerId)
      .then(()=> props.history.push("/home"));
  }

  render() {
    let beer = this.props.beer
    let reviews = this.state.reviewId
    if (!beer) {
      return <div>
        Loading...
      </div>
    }else{
    return (
    <div className="beer-item-page">
      <HeaderContainer />
      <BeerDetail beer={beer} reviews={this.state.reviewId}/>
      {/* <div>
        <ul className="beer-item" >
          <img className="beer-logo" src={beer.photoUrl} alt="" />
          <li>{beer.name}</li>
          <li>{beer.ibu}</li>
          <li>{beer.abv}</li>
          <li>{beer.brewed_by}</li>
          <li>* * * * *</li>
        </ul>
          <button onClick={this.handleDelete}> DELETE</button>
      </div> */}
    </div>
    )}
  }
}

export default BeerShow;
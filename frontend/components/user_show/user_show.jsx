import React from 'react';
import { Link } from 'react-router-dom';
// import BeerDetail from './beer_detail';
// import HeaderContainer from '../header/header_container';
// import Header from '../header/header';
// import BeerDetail from './beer_detail';

class UserShow extends React.Component {
  constructor(props) {
    super(props)

    this.state = this.props.user

    // this.handleDelete = this.handleDelete.bind(this)
  }
  // componentDidMount() {
  //   this.props.receiveCurrentUser(this.props.userId);
  // }


  // handleDelete(e) {
  //   e.preventDefault();
  //   this.props.deleteBeer(this.props.beerId);

  //   this.props.history.push("/home");
  //   window.location.reload();
  // }


  render() {
    // console.log(this.props.reviews)
    <p>User Show</p>
    // let beer = this.props.beer
    // let reviews = Object.values(this.props.reviews)
    // if (!beer) {
    //   return <div>
    //     Loading...
    //   </div>
    // } else {
    //   return (
    //     <div className="beer-show-page">
    //       <HeaderContainer />
    //       <div className="top-background"></div>
    //       <div className="beer-show-item-box">
    //         <div className="beer-item">
    //           <img className="beer-logo-show" src={beer.photoUrl} alt="" />


    //           <ul className="beer-item-stats" >
    //             <h2 className="beer-item-name">{beer.name}</h2>
    //             <div className="beer-stats-top">
    //               <li className="beer-item-ibu">IBU: {beer.ibu}</li>
    //               <li className="beer-item-abv">ABV: {beer.abv}</li>
    //             </div>
    //             <div className="beer-stats-bottom">
    //               <li className="beer-item-brewed">Brewed by: {beer.brewed_by}</li>
    //               <li className="beer-item-avg">AVG Rating: {parseFloat(beer.average_rating).toFixed(2)}</li>
    //             </div>
    //             <button className="delete-btn" onClick={this.handleDelete}>DELETE</button>
    //           </ul>
    //         </div>
    //       </div>
    //       <div className="comments">
    //         <BeerDetail beer={beer} reviews={reviews} />
    //       </div>
    //     </div>
    //   )
    // }
  }
}

export default UserShow;
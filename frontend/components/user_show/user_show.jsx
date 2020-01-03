import React from 'react';
import { Link } from 'react-router-dom';
// import BeerDetail from './beer_detail';
import HeaderContainer from '../header/header_container';
// import Header from '../header/header';
// import BeerDetail from './beer_detail';

class UserShow extends React.Component {
  componentDidMount() {
    // this.props.receiveCurrentUser(this.props.userId);
    this.props.requestAllBeers();
  }






  render() {
    const allBeers = this.props.beers;
    let username = this.props.user.currentUser.users[1].username
    let reviews = [];
    {console.log(this.props)}
    
    // for (let i = 0; i < allBeers.length; i++) {
      //   const beer = allBeers[i];
      //   // beerNames.push(beer.name);
      //   reviews.push(beer.reviewIds[0]);
      
      // };
      // console.log(reviews)
      // let totalReviews = reviews.length
      
      
      // console.log(currentUser.users[1].username)
      
      return (
        <div className="form-page">
            <HeaderContainer/>
            <div className="top-background"></div>
            <br/> 
            <br/>
            <br/>
            <br/>
            <p> This functionality is down right now </p>
            <p> We at Unbarreld are working without breaks in order to bring it back up as quickly as possible </p>
            <p> Thank you for your patience</p>
            {/* <p> { totalReviews } </p> */}


          </div>

    )
  }
}

export default UserShow;
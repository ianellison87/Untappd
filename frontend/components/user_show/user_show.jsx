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
        <div>
            <HeaderContainer/>
            <br/> 
            <br/>
            <br/>
            <br/>
            <p> User Show </p>
            <p> { username } </p>
            {/* <p> { totalReviews } </p> */}


          </div>

    )
  }
}

export default UserShow;
import React from 'react';
import { Link } from 'react-router-dom';
// import BeerDetail from './beer_detail';
// import HeaderContainer from '../header/header_container';
// import Header from '../header/header';
// import BeerDetail from './beer_detail';

class UserShow extends React.Component {
  componentDidMount() {
    // this.props.receiveCurrentUser(this.props.userId);
    this.props.requestAllBeers();
  }



  // handleDelete(e) {
  //   e.preventDefault();
  //   this.props.deleteBeer(this.props.beerId);

  //   this.props.history.push("/home");
  //   window.location.reload();
  // }


  render() {

    console.log(this.props.user.currentUser)

    return (
          
          <p>User Show</p>

    )
  }
}

export default UserShow;
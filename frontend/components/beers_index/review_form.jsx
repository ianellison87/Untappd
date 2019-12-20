import React from 'react';
import { withRouter } from 'react-router-dom';
import HeaderContainer from '../header/header_container';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 5,
      body: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToBeerShow = this.navigateToBeerShow.bind(this);
  }

  navigateToBeerShow() {
    const url = `/beers/${this.props.match.params.beerId}`
    this.props.history.push(url);
  }

  handleSubmit(e) {
    e.preventDefault();
    const beerId = parseInt(this.props.match.params.beerId);
    const review = Object.assign({}, this.state, {
      beer_id: beerId
    });
    this.props.createReview(review);
    this.navigateToBeerShow();
  }

  update(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
  }

  render() {
    return (
      <div className='form-page'>
        <HeaderContainer/>
        <div className='comment-form-box'>
          <div className="review-form">
            <form onSubmit={this.handleSubmit}>

              <label>Comment</label>
              <br />

              <textarea
                cols="30"
                rows="10"
                value={this.state.body}
                onChange={this.update("body")}
              />
              <br />
              <label>Rating</label>
              <br />
              <input
                type="number"
                value={this.state.rating}
                onChange={this.update("rating")}
              />
              <br />
              <input type="submit" />
            </form>
            <button onClick={this.navigateToBeerShow}>Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ReviewForm);